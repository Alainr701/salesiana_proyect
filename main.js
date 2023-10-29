const username = document.getElementById('username')
const password = document.getElementById('password')
const codigo=document.getElementById('codigo')
const button = document.getElementById('button')
function mostrarContraseña(){
     var tipo = document.getElementById("password");
     if(tipo.type == "password"){
         tipo.type = "text";
     }else{
         tipo.type = "password";
     }
}
function mostrarCodigo(){
     var tipo = document.getElementById("codigo");
     if(tipo.type == "password"){
         tipo.type = "text";
     }else{
         tipo.type = "password";
     }
}
button.addEventListener('click', (e) =>{
     e.preventDefault()
     const data = {
         username: username.value,
         password: password.value,
         codigo: codigo.value,
         
     }
     console.log(data)
 
    if (username.value == "" || password.value == "" || codigo.value == "") {
     alert("ERROR");
     } else {
       if(password.value==codigo.value){
       window.location.href="http://192.168.56.1:5500/Personal/index.html";
       }else{
         alert("ERROR");
       }
 
     }
 
 })

