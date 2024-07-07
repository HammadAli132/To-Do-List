function getChecklistSection() {
    const checklistSection = document.createElement('div');
    checklistSection.id = 'checklist-section';

    const checkListHeading = document.createElement('div');
    checkListHeading.id = 'add-checks';
    checkListHeading.setAttribute('class', 'menu-subtitle');
    checkListHeading.innerText = 'Checklist';
    checklistSection.appendChild(checkListHeading);

    const checklistList = document.createElement('div');
    checklistList.id = 'checklist-list';
    checklistSection.appendChild(checklistList);

    return checklistSection;
};

export default getChecklistSection;