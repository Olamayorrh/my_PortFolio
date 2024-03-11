

let input = document.getElementById("inpt") as HTMLInputElement;

let btn = document.getElementById('add') as HTMLButtonElement;

let display = document.querySelector(".display") as HTMLOListElement;

let check = document.getElementById("check") as HTMLInputElement;

let edit = document.getElementById('edit') as HTMLButtonElement;

let list = document.getElementById('list') as HTMLElement;

let storage: Task[] = [];

interface Task{
    name: string;
    checked: boolean;
    id?: number;
}

btn.addEventListener("click",()=>{
    if(input.value.length > 0){
        let newTask : Task = {
            name: input.value,
            checked: false,
            id: storage.length
        }
        storage.push(newTask);
        input.value = '';
        
        displayFunc()  
    }    
})  

let displayFunc = ()=>{

    let html: string = ''
    
    for(let i = 0; i < storage.length; i++){
    if (storage[i].checked == true){
        html  += 
        `<li id="list">
        <input type="checkbox" id='check${i}' checked onchange="strike(${i})"> <strike> ${storage[i].name} </strike> <button onclick="editTask()" id='edit'>Edit</button> <button onclick="deleteTask()">Delete</button>
        </li>`
    } else{
        html  += 
        `<li id="list">
        <input type="checkbox" id='check${i}' onchange="strike(${i})"> ${storage[i].name} <button onclick="editTask()" id='edit'>Edit</button> <button onclick="deleteTask()">Delete</button>
        </li>`
    }
}
        display.innerHTML = html;
}


const strike = (index: number): void => {
    let toCheck = document.getElementById(`check${index}`) as HTMLInputElement;
    toCheck.checked? storage[index].checked = true : storage[index].checked = false;
    displayFunc();
}

let editTask = (id: number)=>{
    let newTask: Task = {
        name: input.value,
        checked: storage[id].checked,
        id
    }
    if(input.value.length > 0){
        storage.splice(id,1,newTask);
        displayFunc();
        input.value= "";
    }
}

let deleteTask = ((id: number)=>{
        storage.splice(id,1);
        displayFunc();
});