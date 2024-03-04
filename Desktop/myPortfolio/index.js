let harmbug = document.querySelector(".harmbug");

let link = document.querySelectorAll(".navLink");

let menu = document.querySelector('.menus');

console.log(menu);

// menu.style.maxHeight = "0"

 harmbug.addEventListener('click', ()=>{
   

    harmbug.classList.toggle("active");
    if(menu.classList.toggle("active")){
      menu.style.maxHeight = "300px"
    }else{
      menu.style.maxHeight = "0"
    }
 })

//  document.addEventListener("DOMContentLoaded",()=>{menu.style.maxHeight='0px'})
   
  

 


document.querySelectorAll(".navLink").forEach(n => {
    n.addEventListener("click",()=>{
        harmbug.classList.remove("active");
      if(menu.classList.remove("active")){
        menu.style.maxHeight = "0"
      }
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


let sendMail = ()=>{
  let params = {
    name :  name,
    email : email,
    number : number,
    message : message
  }
  emailjs.send("service_j509uvu","template_j4nxkjj",params).then(alert("Email sent !!!"))
}