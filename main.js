
const list=[
    {
        id:1,
        name:"Create a task",
        status:"To Do",
        priority:"low",
    },
    {
        id:2,
        name:"make a bed",
        status:"Done",
        priority:"high",
    },
    {
        id:3,
        name:"Learn Js",
        status:"In progress",
        priority:"high",
    }
]

export function addTask(CreatName,SpecifyTheStatus="To Do",SpecifyThePriority="high"){
    let NewObject ={
        id:list.length+1,
        name:CreatName,
        status:SpecifyTheStatus,
        priority:SpecifyThePriority,

    };
    list.push(NewObject);
}

function deleteTask(id){
    list.splice(id,1);
}

function showListOne() {
    let ListDone = ""
    let ListToDo = ""
    let ListProgress = ""


    list.forEach((name) => {
        if (name.status === "Done") {
            ListDone+= `${name.name} \n`;
        }
        if (name.status === "To Do") {
            ListToDo+= `${name.name} \n`;
        }
        if (name.status === "In progress") {
            ListProgress+= `${name.name} \n`;
        }
    });
    console.log(`Done:\n${ListDone}To Do:\n${ListToDo}"In progress:\n${ListProgress}`);
}


function showListTwo() {
    list.map((name) =>{
        console.log(`${name.status}:\n ${name.name} `)

    });
}

export function showListThree() {

    let ListToDo=list
        .filter(friend => friend.status === "To Do")
        .reduce((accumulator, friend) => accumulator + `${friend.name}\n`," To Do:\n");

    let ListDone=list
        .filter(friend => friend.status === "Done")
        .reduce((accumulator, friend) => accumulator + `${friend.name}\n`," Done:\n");

    let ListInProgress=list
        .filter(friend => friend.status === "In progress")
        .reduce((accumulator, friend) => accumulator + `${friend.name}\n`," In progress:\n");
    console.log(`${ListToDo}${ListInProgress}${ListDone}`)
}


addTask("Learn arrays");
deleteTask(1);
showListThree(list)




