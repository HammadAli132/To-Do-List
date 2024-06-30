import getMenu from "./menu";
import getForms from "./forms"

function loadMain() {
    const main = document.createElement('main');

    const menu = getMenu();
    main.appendChild(menu);

    const forms = getForms();
    main.appendChild(forms);

    document.body.appendChild(main);
};

export default loadMain;