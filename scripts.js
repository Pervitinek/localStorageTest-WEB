const inputTaskname = document.getElementById("taskname");
const inputPoints = document.getElementById("points");
const addTask = document.getElementById("addTask");
const container = document.getElementById("container");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let obj = new Date();
let day = obj.getUTCDate();
let month = obj.getUTCMonth() + 1;
let year = obj.getUTCFullYear();

printTasks();

addTask.addEventListener("click", function(){
    if(inputTaskname.value !== "" && inputPoints.value !== "")
    tasks.push({
        id: tasks.length,
        taskName: inputTaskname.value,
        points: inputPoints.value,
        date: day+"."+month+"."+year
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log(tasks);
    printTasks();
});

function printTasks() {
    let obj = new Date();
    let day = obj.getUTCDate();
    let month = obj.getUTCMonth() + 1;
    let year = obj.getUTCFullYear();
    container.innerHTML = "";
    tasks.forEach(task =>{
        if(task.date === day+"."+month+"."+year) {
            const newElement = document.createElement("div");
            newElement.classList.add("pointHolder");
            const levyText = document.createElement("p");
            levyText.classList.add("levyText");
            const points = document.createElement("p");
            points.classList.add("points");

            levyText.innerText = task.taskName;
            points.innerText = task.points;

            newElement.appendChild(levyText);
            newElement.appendChild(points);
            container.appendChild(newElement);
        }
    })
    console.log(tasks);
}