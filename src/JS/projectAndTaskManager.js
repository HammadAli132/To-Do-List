import deleteIcon from "../assets/bin.png";

class TASK {
    constructor(title, desc, dueDate, priority) {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
    }
};

class PROJECT {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.taskArray = [];
    }
};

let projectEventListenerAdded = false;
let taskEventListenerAdded = false;
let updateEventListenerAdded = false;
let cancelEventListenerAdded = false;
let taskUpdatingMode = false;
let projectList = [];
let index = 0, openedProject, taskIndex = 0;

function cleanTasksSection() {
    const taskSection = document.getElementById('tasks-section');
    while (taskSection.firstChild) {
        taskSection.removeChild(taskSection.firstChild);
    }
    projectList[openedProject].taskArray = projectList[openedProject].taskArray.filter(task => task !== undefined);
    taskIndex = 0;
    updateEventListenerAdded = false;
};

function getTaskCount() {
    let count = 0;
    projectList[openedProject].taskArray.forEach(task => {
        if (task !== undefined)
            count++;
    });
    document.querySelectorAll(".count")[openedProject].innerText = `${count}`;
};

function getTaskCreated(task) {
    const taskGrid = document.getElementById('task-grid');
    let Task = document.createElement('div');
    Task.setAttribute('class', 'task');
    Task.id = `${taskIndex}`;
    taskIndex++;
    Task.innerHTML = `
                    <div class="task-title">${task.title}</div>
                    <div class="task-desc">${task.desc}</div>
                    <div class="check-box"></div>`;

    const taskItems = document.createElement("div");
    taskItems.setAttribute('class', 'task-items');
    let dueDate = document.createElement("div");
    dueDate.setAttribute('class', 'due-date');
    dueDate.innerText = `Due Date: ${task.dueDate}`;
    taskItems.appendChild(dueDate);
    const taskDelete = document.createElement('div');
    taskDelete.setAttribute('class', 'task-delete');
    taskDelete.innerHTML = `<img src="${deleteIcon}" height="100%" width="100%">`;
    taskDelete.addEventListener('click', (e) => {
        e.stopPropagation();
        const ID = taskDelete.parentNode.parentNode.id;
        projectList[openedProject].taskArray[ID] = undefined;
        const tasks = taskGrid.querySelectorAll('.task');
        tasks.forEach(task => {
            if (task.id === ID) {
                console.log("yes");
                task.remove(ID);
            }
        });
        getTaskCount();
    });
    taskItems.appendChild(taskDelete);
    Task.appendChild(taskItems);
    if (task.priority === 'H')
        Task.style.cssText = "border-left: 3px solid red;";
    else if (task.priority === 'M') 
        Task.style.cssText = "border-left: 3px solid orange;";
    else 
        Task.style.cssText = "border-left: 3px solid green;";
    return Task;
};

function addEventListenerToProjectBar(bar, project) {
    const taskSection = document.getElementById("tasks-section");
    bar.addEventListener('click', () => {
        openedProject = bar.id;
        cleanTasksSection();
        const addTask = document.getElementById("add-task");
        addTask.style.display = "flex";
        const projectTitle = document.createElement('div');
        projectTitle.id = "project-title";
        projectTitle.innerText = project.name;
        taskSection.appendChild(projectTitle);

        const taskGrid = document.createElement('div');
        taskGrid.id = "task-grid";
        taskSection.appendChild(taskGrid);
        project.taskArray.forEach(task => {
            const Task = getTaskCreated(task);
            taskGrid.appendChild(Task);
        });
    });
};

function appendTaskInList(task) {
    const taskGrid = document.getElementById('task-grid');
    const Task = getTaskCreated(task);
    taskGrid.appendChild(Task);
    getTaskCount();
};

function appendProjectInList(object) {
    const htmlProjectList = document.getElementById('projects-list');

    const projectBar = document.createElement('div');
    projectBar.setAttribute('class', 'project-bar');
    projectBar.id = `${index}`;
    projectBar.style.borderLeft = `3px solid ${object.color}`;
    index++;

    const projectName = document.createElement('div');
    projectName.setAttribute('class', 'project-name');
    projectName.innerText = object.name;
    projectBar.appendChild(projectName);

    const count = document.createElement('div');
    count.setAttribute('class', 'count');
    count.innerText = `${object.taskArray.length}`;
    projectBar.appendChild(count);

    addEventListenerToProjectBar(projectBar, object);

    htmlProjectList.appendChild(projectBar);
};

function addNewProject() {
    const form = document.getElementById('info-input-sec');
    const projectForm = document.getElementById('project-info');
    const taskForm = document.getElementById('task-info');
    
    projectForm.style.display = 'flex';
    taskForm.style.display = "none";
    form.style.right = 0;

    if (!projectEventListenerAdded) {
        projectForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const projectName = document.getElementById('projectName');
            const projectColor = document.getElementById('projectColor');
            const project = new PROJECT(projectName.value, projectColor.value);
            projectName.value = "";
            projectColor.value = "#000000";
            projectList.push(project);
            appendProjectInList(project);
            form.style.right = '-700px';
        });
        projectEventListenerAdded = true;
    }

    if (!cancelEventListenerAdded) {
        const cancelBtns = document.querySelectorAll('.cancel-btn');
        cancelBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                form.style.right = '-700px';
            });
        });
        cancelEventListenerAdded = true;
    }
};

function addNewTask() {
    taskUpdatingMode = false;
    const form = document.getElementById('info-input-sec');
    const taskForm = document.getElementById('task-info');
    const projectForm = document.getElementById('project-info');
    
    projectForm.style.display = "none";
    taskForm.style.display = 'flex';
    form.style.right = 0;

    if (!taskEventListenerAdded) {
        taskForm.addEventListener('submit', (e) => {
            if (taskUpdatingMode) return;
            e.preventDefault();
            const taskName = document.getElementById('taskName');
            const taskDesc = document.getElementById('taskDesc');
            let taskPriority = undefined;
            const taskDate = document.getElementById('taskDate');
            document.getElementsByName('taskPriority').forEach(priority => {
                if (priority.checked)
                    taskPriority = priority.value;
                priority.checked = false;
            });
            const task = new TASK(taskName.value, taskDesc.value, taskDate.value, taskPriority);
            projectList[openedProject].taskArray.push(task);
            taskName.value = '';
            taskDesc.value = '';
            taskDate.value = '';
            appendTaskInList(task);
            form.style.right = '-700px';
        });
        taskEventListenerAdded = true;
    }
};

export {addNewProject, addNewTask};