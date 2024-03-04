

let input = document.getElementById("inpt") as HTMLInputElement;

let btn = document.getElementById('add') as HTMLButtonElement;

let display = document.querySelector(".display") as HTMLOListElement;

let check = document.getElementById("check") as HTMLInputElement;

let edit = document.getElementById('edit') as HTMLButtonElement;

let storage: string[] = [];

btn.addEventListener("click",()=>{
    if(input.value.length > 0){
        storage.push(input.value);
        input.value = '';
        console.log(storage);
        
        displayFunc(storage)
        
    }
    
 })

   

    let displayFunc = (elem: string[])=>{

        let html: string = ''
        
        for(let i = 0; i < elem.length; i++){
        
        html  += 
        
        `
       <li id="list">
       
       <input type="checkbox" id='check'> ${elem[i]} <button onclick="editTask()" id='edit'>Edit</button> <button onclick="deleteTask()">Delete</button>
       
       </li>
        `

        
        
    }

            display.innerHTML = html;
 }

let editTask = ((id: number)=>{
    if(input.value.length > 0){
        storage.splice(id,1,input.value);
        displayFunc(storage);

        input.value= "";
        //console.log(storage);
    }

})

let deleteTask = ((id: number)=>{
        storage.splice(id,1);
        displayFunc(storage);
       // console.log(storage);
})

let checked = ((id: number)=>{
   for(let i in storage){
    
    if(Number(i) === id){
        storage[i].strike = "line-through"
    }
    
    
        
    
   }
})


    
  