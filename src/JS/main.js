import loadMenu from "./menu";
import { addFormFunctionality } from "./forms";

function loadMain() {
    const main = document.createElement('main');

    const menu = loadMenu();
    main.appendChild(menu);

    document.body.appendChild(main);
    addFormFunctionality();
};

export default loadMain;