let harmbug = document.querySelector(".harmbug");

let link = document.querySelectorAll(".navLink");

let menu = document.querySelector('.nav');

console.log(menu);

 harmbug.addEventListener('click', ()=>{
   

    harmbug.classList.toggle("active");
    menu.classList.toggle("active");
 });

document.querySelectorAll(".menuLink").forEach(n => {
    n.addEventListener("click",()=>{
        harmbug.classList.remove("active");
        menu.classList.remove("active");
    });
});


let store = [];

let  name = document.getElementById("uname");
let email = document.getElementById("umail");
let number = document.getElementById("num");
let message = document.getElementById("mssg");
let button = document.getElementById("btn");




let contact=(e)=>{
 
     e.preventDefault();
     let usersDetails = {
        name: name.value,
        mail : email.value,
        number : number.value,
        message : message.value,
        };

        
        
            if(email.value && message.value ){
              store.push(usersDetails)
              console.log(store);
                  if(store.length > 0){
                     store.forEach((name)=>{
                      console.log(name.mail);
                      localStorage.setItem("user",JSON.stringify(store));
                      
                    
                   alert("message sent successfully")
                   return
                        
                  
            
                      
                    })
                  }

                     

            } else{
                alert("kindly fill the boxes")
                }
                
                document.querySelector('form').reset();   
     
}



document.addEventListener("DOMContentLoaded",()=>{
   
  btn.addEventListener('click',contact);
 
});
