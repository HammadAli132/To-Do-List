import getProjectSection from "./projectSection";
import getChecklistSection from "./checklistSection";

function getMenu() {
    const menu = document.createElement('div');
    menu.id = 'menu';

    const menuTitle = document.createElement('div');
    menuTitle.id = 'menu-title';
    menuTitle.innerText = "Menu";
    menu.appendChild(menuTitle);
    
    const projectSection = getProjectSection();
    menu.appendChild(projectSection);

    const checklistSection = getChecklistSection();
    menu.appendChild(checklistSection);

    return menu;
};

export default getMenu;