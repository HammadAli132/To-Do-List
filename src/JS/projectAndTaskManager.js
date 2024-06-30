class TASK {
    constructor(title, desc, dueDate, priority, status) {

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
let cancelEventListenerAdded = false;
let projectList = [];
let index = 0;

function appendProjectInList(object) {
    console.log(object);
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

    htmlProjectList.appendChild(projectBar);
}

function addNewProject() {
    const form = document.getElementById('info-input-sec');
    const projectForm = document.getElementById('project-info');
    const taskForm = document.getElementById('task-info');
    
    projectForm.style.display = 'flex';
    taskForm.style.display = 'none';
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
            form.style.right = '-500px';
        });
        projectEventListenerAdded = true;
    }

    if (!cancelEventListenerAdded) {
        const cancelBtns = document.querySelectorAll('.cancel-btn');
        cancelBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                form.style.right = '-500px';
            });
        });
        cancelEventListenerAdded = true;
    }
};

export default addNewProject;