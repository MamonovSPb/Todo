

const OneScreenInput = document.querySelector('.input');
document.body.className="body-style"


let box = document.createElement('div');
box.className = "box";
box.innerHTML = "";
document.body.append(box);


let boxHighTask= document.createElement('div');
boxHighTask.className="parameters-box-HighTask";
box.append(boxHighTask);


let boxLowTask= document.createElement('div');
boxLowTask.className="parameters-box-LowTask";
box.append(boxLowTask);

let FirstInputTask= document.createElement('input');
FirstInputTask.className = "input";
FirstInputTask.setAttribute("design-parameters","first");
FirstInputTask.classList.add('text-input');
FirstInputTask.innerHTML = "";
FirstInputTask.type="text"
FirstInputTask.placeholder="Добавить важных дел"
box.prepend(FirstInputTask);


let SecondInputTask= document.createElement('input');
SecondInputTask.className = "input";
SecondInputTask.setAttribute("design-parameters","second");
SecondInputTask.classList.add('text-input');
SecondInputTask.innerHTML = "";
SecondInputTask.type="text"
SecondInputTask.placeholder="Добавить"
box.append(SecondInputTask);

let headerHigh = document.createElement('h1');
headerHigh.className = "priority-header-high";
headerHigh.innerHTML = "HIGH";
box.prepend(headerHigh);

let headerLow = document.createElement('h1');
headerLow.className = "priority-header-low";
headerLow.innerHTML = "LOW";
box.prepend(headerLow);

let isFirstAddTaskButton= document.createElement('input');
isFirstAddTaskButton.className ="button-style";
isFirstAddTaskButton.setAttribute('order-state','one');
isFirstAddTaskButton.setAttribute('value','╳');
isFirstAddTaskButton.innerHTML = "";
isFirstAddTaskButton.type="button"
box.append(isFirstAddTaskButton);

let isSecondAddTaskButton= document.createElement('input');
isSecondAddTaskButton.className ="button-style";
isSecondAddTaskButton.setAttribute('order-state','two');
isSecondAddTaskButton.setAttribute('value','╳');
isSecondAddTaskButton.innerHTML = "";
isSecondAddTaskButton.type="button"
box.append(isSecondAddTaskButton);



document.querySelector('.input')
    .addEventListener('click', function (event) {
        isClick(event.target.innerText);
    })