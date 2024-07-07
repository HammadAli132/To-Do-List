function loadHeader () {
    const header = document.createElement('header');

    const title = document.createElement('h1');
    title.innerText = "Minimal To-Do";
    title.id = "site-title";

    header.appendChild(title);

    document.body.appendChild(header);
};

export default loadHeader;