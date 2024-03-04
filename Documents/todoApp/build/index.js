"use strict";
let input = document.getElementById("inpt");
let btn = document.getElementById('add');
let display = document.querySelector(".display");
let check = document.getElementById("check");
let edit = document.getElementById('edit');
let storage = [];
btn.addEventListener("click", () => {
    if (input.value.length > 0) {
        storage.push(input.value);
        input.value = '';
        console.log(storage);
        displayFunc(storage);
    }
});
let displayFunc = (elem) => {
    let html = '';
    for (let i = 0; i < elem.length; i++) {
        html +=
            `
       <li id="list">
       
       <input type="checkbox" id='check'> ${elem[i]} <button onclick="editTask()" id='edit'>Edit</button> <button onclick="deleteTask()">Delete</button>
       
       </li>
        `;
    }
    display.innerHTML = html;
};
let editTask = ((id) => {
    if (input.value.length > 0) {
        storage.splice(id, 1, input.value);
        displayFunc(storage);
        input.value = "";
        //console.log(storage);
    }
});
let deleteTask = ((id) => {
    storage.splice(id, 1);
    displayFunc(storage);
    // console.log(storage);
});
let checked = ((id) => {
    for (let i in storage) {
        console.log(storage[i]);
    }
});
