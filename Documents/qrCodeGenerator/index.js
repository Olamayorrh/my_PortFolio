let image= document.getElementById('image');
let qrlogo= document.getElementById('qrlogo');
let inpt= document.getElementById('inpt');

let QrGenerator = ()=>{
    
    if(inpt.value.length > 0){
        qrlogo.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+inpt.value;
        // image.classList.add('show-img');
     }else{
        inpt.classList.add("error");
         setTimeout(()=>{
             inpt.classList.remove('error')
         },1000);
     }
}
