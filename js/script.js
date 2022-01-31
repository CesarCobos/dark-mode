
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}
localStorage.theme = 'light'
localStorage.theme = 'dark'
localStorage.removeItem('theme')




function toggle_dark_mode(){
    var element = document.getElementById("dark")

    element.classList.toggle("dark")

    console.log("Dark Mode Activaded")
}


let menu_hover = document.getElementById("menuButton");
menu_hover.addEventListener("mouseover", function(){
  if(menuButton.classList.contains("fa-chevron-up")){
    // menuButton.classList.remove("fa-chevron-up");
    menuButton.classList.add("fa-drumstick-bite");
  }
  setTimeout(function(){
    menuButton.classList.remove("fa-drumstick-bite");
  },1000);
});



function menuOpen(){
    var menuButton = document.getElementById("menuButton"); 
    if(menuButton.classList.contains("fa-chevron-up")){
      menuButton.classList.remove("fa-chevron-up");
      menuButton.classList.add("fa-times");
    }else{
      menuButton.classList.remove("fa-times");
      menuButton.classList.add("fa-chevron-up");
    }
}
    



var barNav = document.getElementById("nav");
window.onscroll = function(){
    if (document.documentElement.scrollTop >= 80){
        barNav.classList.add("scrolled"); 
        console.log("Scroll On - color change");
    }else{
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
    if (content.style.display === "flex") {
      content.style.display = "none";
    } else {
      content.style.display = "flex";
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




var typeText = document.getElementById("machine")
var textToBeTyped = "Civil Engineer"
var textToBeTypedArr = ["Civil Engineer", "Data Science", "Project Manager", "UX / UI","Mechanical Design", "FrontEnd Dev"]
var index = 0, isAdding = true, textToBeTypedIndex = 0

function playAnim() {
  setTimeout(function () {
    // set the text of typeText to a substring of the text to be typed using index.
    typeText.innerText = textToBeTypedArr[textToBeTypedIndex].slice(0, index)
    if (isAdding) {
      // adding text
      if (index > textToBeTypedArr[textToBeTypedIndex].length) {
        // no more text to add
        isAdding = false
        //break: wait 2s before playing again
        setTimeout(function () {
          playAnim()
        }, 2000)
        return
      } else {
        // increment index by 1
        index++
      }
    } else {
      // removing text
      if (index === 0) {
        // no more text to remove
        isAdding = true
        //switch to next text in text array
        textToBeTypedIndex = (textToBeTypedIndex + 1) % textToBeTypedArr.length
      } else {
        // decrement index by 1
        index--
      }
    }
    // call itself
    playAnim()
  }, isAdding ? 120 : 60)
}
// start animation
playAnim()