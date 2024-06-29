import loadMenu from "./menu";

function loadMain() {
    const main = document.createElement('main');

    const menu = loadMenu();
    main.appendChild(menu);

    document.body.appendChild(main);
};

export default loadMain;