function addFormFunctionality() {
    const formsDiv = document.getElementById('info-input-sec');
    
    const forms = document.querySelectorAll('.form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const inputFields = document.querySelectorAll('.form > input');
            inputFields.forEach(input => {
                input.value = "";
            });
            formsDiv.style.right = "-500px";
        });
    });

    const cancel = document.querySelectorAll('.cancel-btn');
    cancel.forEach(cancelBtn => {
        cancelBtn.addEventListener('click', () => {
            formsDiv.style.right = '-500px';
        });
    });
};

function getForms() {
    const forms = document.createElement('div');
    forms.id = 'info-input-sec';

    forms.innerHTML = `
            <div id="project-info">
                <span class="form-heading">Please Provide Project Details</span>
                <form action="#" class="form" id="project-form">
                    <label for="projectName" class="label">Project Name:</label>
                    <input type="text" name="projectName" id="projectName" placeholder="Project Name" required>
                    <label for="projectColor" class="label">Project Color:</label>
                    <input type="color" name="projectColor" id="projectColor">
                    <div class="form-btn">
                        <input type="submit" class="submit-btn" value="Add Project">
                        <input type="button" class="cancel-btn" value="Cancel">
                    </div>
                </form>
            </div>
            <div id="task-info">
                <span class="form-heading">Please Provide Task Details</span>
                <form action="#" class="form" id="task-form">
                    <label for="taskName" class="label">Task Name:</label>
                    <input type="text" name="taskName" id="taskName" placeholder="Task Name" required>

                    <label for="taskDesc" class="label">Task Description:</label>
                    <textarea name="taskDesc" id="taskDesc" placeholder="Enter Task Description" cols="45" rows="5"></textarea>

                    <label for="taskPriority" class="label">Task Priority</label>
                    <div id="priorities">
                        <input type="radio" name="taskPriority" id="taskPriorityH" required> <span id="h">High</span>
                        <input type="radio" name="taskPriority" id="taskPriorityM"> <span  id="m">Medium</span>
                        <input type="radio" name="taskPriority" id="taskPriorityL"> <span  id="l">Low</span>
                    </div>

                    <label for="taskDate" class="label">Task Due Date:</label>
                    <input type="date" name="taskDate" id="taskDate" required>

                    <div class="form-btn">
                        <input type="submit" class="submit-btn" value="Add Task">
                        <input type="button" class="cancel-btn" value="Cancel">
                    </div>
                </form>
            </div>`;
    
    return forms;
};

export {getForms, addFormFunctionality};