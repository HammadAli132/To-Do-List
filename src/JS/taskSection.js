import addTaskImg from "../assets/plus.png";
import { addNewTask } from "./projectAndTaskManager";

function getTaskSection() {
    const taskSection = document.createElement("div");
    taskSection.id = "tasks-section";

    const addNewTaskBtn = document.createElement('div');
    addNewTaskBtn.id = "add-task";
    const taskBtnImg = document.createElement('img');
    taskBtnImg.src = addTaskImg;
    addNewTaskBtn.appendChild(taskBtnImg);

    addNewTaskBtn.addEventListener('click', () => {
        addNewTask();
    })

    document.body.appendChild(addNewTaskBtn);

    return taskSection;
};

export default getTaskSection;