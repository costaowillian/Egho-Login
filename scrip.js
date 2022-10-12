var email = document.getElementById("email");
var senha = document.getElementById("senha");

email.addEventListener("focus" , ()=>{
    email.style.background = "#458C73"
    email.style.color = "#000"
});

email.addEventListener("blur" , ()=>{
    email.style.background = "#fff"
});

senha.addEventListener("focus" , ()=>{
    senha.style.background = "#458C73"
    senha.style.color = "#000"
});

senha.addEventListener("blur" , ()=>{
    senha.style.background = "#fff"
});