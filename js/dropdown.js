var navBar = document.getElementById("nav-bar");

const navHeight = navBar.clientHeight;

console.log(navHeight);

var navHString = navHeight.toString() + "px";

console.log(navHString);

function showMenu() {
    const dropdownContent = document.querySelector('.dropdown-content');
    var dropdownContentEl = document.getElementById("dropdown-content");
    var menuIcon = document.getElementById("menu-icon");

    if (dropdownContent.classList.contains('show-menu')) {
        dropdownContent.classList.remove('show-menu');
        menuIcon.src = "images/MenuIcon.png";
    }
    else {
        dropdownContent.classList.add('show-menu');
        dropdownContentEl.style.marginTop = navHString; 
        menuIcon.src = "images/MenuIconX.png";
    }
}
