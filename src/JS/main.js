import getMenu from "./menu";
import getTaskSection from "./taskSection";
import getForms from "./forms";
import { loadInitials } from "./projectAndTaskManager";

function loadMain() {
    const main = document.createElement('main');

    const menu = getMenu();
    main.appendChild(menu);

    const taskSection = getTaskSection();
    main.appendChild(taskSection);

    const forms = getForms();
    main.appendChild(forms);

    document.body.appendChild(main);
    loadInitials();
};

export default loadMain;