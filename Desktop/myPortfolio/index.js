let harmbug = document.querySelector(".harmbug");

let menu = document.querySelectorAll('.menu')

//console.log(menu);

 harmbug.addEventListener('click', ()=>{
   

    harmbug.classList.toggle("active");
    menu.classList.toggle("active");
 })

document.querySelectorAll(".menuLink").forEach(n => {
    n.addEventListener("click",()=>{
        harmbug.classList.remove("active");
        menu.classList.remove("active");
    })
})