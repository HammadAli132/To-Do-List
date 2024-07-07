let Data = [
    {
        name: "Dummy Project",
        color: "blue",
        taskArray: [
            {
                title: "Go to Gym",
                desc: "Engage in a productive workout session to boost physical fitness and overall well-being.",
                dueDate: "2024/07/10",
                priority: "H",
                checked: false
            },
            {
                title: "Water the Plants",
                desc: "Nourish the plants to maintain their health and growth.",
                dueDate: "2024/07/9",
                priority: "M",
                checked: false
            },
            {
                title: "Go for swimming",
                desc: "Enjoy a refreshing swim to enhance fitness and relaxation.",
                dueDate: "2024/07/8",
                priority: "L",
                checked: false
            },
            {
                title: "Read 10 pages",
                desc: "Immerse in reading 10 pages to expand knowledge and unwind.",
                dueDate: "2024/07/11",
                priority: "M",
                checked: false
            },
            {
                title: "Keep Growing",
                desc: "Just keep growing and spread positivity everywhere.",
                dueDate: "2024/07/11",
                priority: "H",
                checked: false
            }
        ]
    },
]

function getData() {
    return JSON.stringify(Data);
}

export default getData;