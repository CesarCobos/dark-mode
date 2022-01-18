// Definiendo una funciona para activar el modo oscuro
function toggle_dark_mode(){ //este nombre también va ligado al botón con el evento onClick
// identificando el id "dark" en el HTML y asignandolo a la variable "element"
    var element = document.getElementById("dark")
//Aquí se hace el cambio de la clase por "dark"
    element.classList.toggle("dark")
//solo un mensaje para la consola
    console.log("Dark Mode Activaded")
//reemplazando la clase para el boton de Dark Mode
//Cambia el icono segun el estado en el que se encuentra
    // var buttonIcon = document.getElementById("buttonIcon"); 
    // if(buttonIcon.className === "fas fa-toggle-on"){
    //     buttonIcon.className = "fas fa-toggle-off";
    // }else{
    //     buttonIcon.className = "fas fa-toggle-on";
    // }
//cambiando iconos segun el estado del Dark mode
//Esto puede servir para cambiar estilos de iconos en la barra de redes
    var social = document.getElementById("social"); 
    if(social.className === "fab fa-facebook"){
        social.className = "fab fa-twitter";
    }else{
        social.className = "fab fa-facebook";
    }
    
}

function menuOpen(){
    var menuButton = document.getElementById("menuButton"); 
    if(menuButton.className === "fas fa-chevron-up"){
        menuButton.className = "fas fa-chevron-down";
    }else{
        menuButton.className = "fas fa-chevron-up";
    }
}
    


//Navbar onscrol change color
//Vinculando Js con el elemento en HTML
var barNav = document.getElementById("nav");
window.onscroll = function(){ //Definiendo funcion
//condicion, si la pantalla hace scroll por 180 entonces
//Se agrega la clase "scrolled" al id "nav"
    if (document.documentElement.scrollTop >= 180){
        barNav.classList.add("scrolled"); 
        console.log("Scroll On - color change");
    }else{
//pero si es menor a 180, entonces se va a eliminar la clase "scrolled" del id "nav"
        barNav.classList.remove("scrolled")
        console.log("Scroll Off - color change");
    }
}


var coll = document.getElementsByClassName("collapse");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

var colli = document.getElementsByClassName("collapse");
var i;

for (i = 0; i < colli.length; i++) {
  colli[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}