// Definiendo una funciona para activar el modo oscuro
function toggle_dark_mode(){ //este nombre también va ligado al botón con el evento onClick
    // identificando el id "dark" en el HTML y asignandolo a la variable "element"
    var element = document.getElementById("dark")
    //Aquí se hace el cambio de la clase por "dark"
    element.classList.toggle("dark")
    //solo un mensaje para la consola
    console.log("Dark Mode Activaded")
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
