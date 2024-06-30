import addNewProject from "./projectAndTaskManager";

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
        addNewProject();
    });

    projectSection.appendChild(addProject);
    projectSection.appendChild(projectsList);
    
    return projectSection;
};

export default getProjectSection;