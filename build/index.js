"use strict";
let input = document.getElementById("inpt");
let btn = document.getElementById('add');
let display = document.querySelector(".display");
let check = document.getElementById("check");
let edit = document.getElementById('edit');
let list = document.getElementById('list');
let storage = [];
btn.addEventListener("click", () => {
    if (input.value.length > 0) {
        let newTask = {
            name: input.value,
            checked: false,
            id: storage.length
        };
        storage.push(newTask);
        input.value = '';
        displayFunc();
    }
});
let displayFunc = () => {
    let html = '';
    for (let i = 0; i < storage.length; i++) {
        if (storage[i].checked == true) {
            html +=
                `<li id="list">
        <input type="checkbox" id='check${i}' checked onchange="strike(${i})"> <strike> ${storage[i].name} </strike> <button onclick="editTask()" id='edit'>Edit</button> <button onclick="deleteTask()">Delete</button>
        </li>`;
        }
        else {
            html +=
                `<li id="list">
        <input type="checkbox" id='check${i}' onchange="strike(${i})"> ${storage[i].name} <button onclick="editTask()" id='edit'>Edit</button> <button onclick="deleteTask()">Delete</button>
        </li>`;
        }
    }
    display.innerHTML = html;
};
const strike = (index) => {
    let toCheck = document.getElementById(`check${index}`);
    toCheck.checked ? storage[index].checked = true : storage[index].checked = false;
    displayFunc();
};
let editTask = (id) => {
    let newTask = {
        name: input.value,
        checked: storage[id].checked,
        id
    };
    if (input.value.length > 0) {
        storage.splice(id, 1, newTask);
        displayFunc();
        input.value = "";
    }
};
let deleteTask = ((id) => {
    storage.splice(id, 1);
    displayFunc();
});
