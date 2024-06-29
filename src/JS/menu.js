import getProjectSection from "./projectSection";
import getChecklistSection from "./checklistSection";
import { getForms, addFormFunctionality } from "./forms";

function loadMenu() {
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

    const forms = getForms();
    menu.appendChild(forms);

    return menu;
};

export default loadMenu;