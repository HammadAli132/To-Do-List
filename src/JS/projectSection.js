class TASK {
    constructor(title, desc, dueDate, priority, status) {

    }
};

class PROJECT {
    constructor() {
        
    }
};

function createNewProject() {
    const form = document.getElementById('info-input-sec');
    const projectForm = document.getElementById('project-info');
    const taskForm = document.getElementById('task-info');
    projectForm.style.display = 'flex';
    taskForm.style.display = 'none';
    form.style.right = 0;
};

function getProjectSection() {
    const projectSection = document.createElement('div');
    projectSection.id = 'projects-section';

    const addProject = document.createElement('div');
    addProject.id = 'add-project';
    addProject.setAttribute('class', 'menu-subtitle');
    addProject.innerText = 'Projects';
    const icon = document.createElement('div');
    icon.setAttribute('class', 'icon');
    addProject.appendChild(icon);

    const projectsList = document.createElement('div');
    projectsList.id = 'projects-list';
    
    addProject.addEventListener('click', () => {
        const project = createNewProject();
    });
    
    projectSection.appendChild(addProject);
    return projectSection;
};

export default getProjectSection;