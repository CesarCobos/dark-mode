// Definiendo una funciona para activar el modo oscuro
function toggle_dark_mode(){ //este nombre también va ligado al botón con el evento onClick
    // identificando el id "dark" en el HTML y asignandolo a la variable "element"
    var element = document.getElementById("dark")
    //Aquí se hace el cambio de la clase por "dark"
    element.classList.toggle("dark")
    //solo un mensaje para la consola
    console.log("Dark Mode Activaded")
}