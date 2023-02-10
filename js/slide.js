const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }

    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

var curiousZach1 = document.getElementById("curiousZach1");
var curiousZach2 = document.getElementById("curiousZach2");
var curiousZach3 = document.getElementById("curiousZach3");
var asianKyle1 = document.getElementById("asianKyle1");
var asianKyle2 = document.getElementById("asianKyle2");
var asianKyle3 = document.getElementById("asianKyle3");
var frankTheTank1 = document.getElementById("frankTheTank1");
var frankTheTank2 = document.getElementById("frankTheTank2");
var frankTheTank3 = document.getElementById("frankTheTank3");
var savvasSavvides1 = document.getElementById("savvasSavvides1");
var savvasSavvides2 = document.getElementById("savvasSavvides2");
var savvasSavvides3 = document.getElementById("savvasSavvides3");
var lightRamzy1 = document.getElementById("lightRamzy1");
var lightRamzy2 = document.getElementById("lightRamzy2");
var lightRamzy3 = document.getElementById("lightRamzy3");

/*curiousZach.addEventListener("mouseover", function() 
{
    curiousZach.style.opacity = "0.5";
});
curiousZach.addEventListener("mouseout", function() 
{
    curiousZach.style.removeProperty('opacity');
});*/

curiousZach1.addEventListener("click", function()
{
    let inputPassword = prompt("Please enter password:", "");

    if (inputPassword == "MyDarlingBoy")
    {
        location.href="https://www.google.com";
    }
});
curiousZach2.addEventListener("click", function()
{
    let inputPassword = prompt("Please enter password:", "");

    if (inputPassword == "MyDarlingBoy")
    {
        location.href="https://www.google.com";
    }
});
curiousZach3.addEventListener("click", function()
{
    let inputPassword = prompt("Please enter password:", "");

    if (inputPassword == "MyDarlingBoy")
    {
        location.href="https://www.google.com";
    }
});

asianKyle1.addEventListener("click", function()
{
    let inputPassword = prompt("Please enter password:", "");

    if (inputPassword == "SpoonsKnivesForks")
    {
        location.href="https://www.google.com";
    }
});

asianKyle2.addEventListener("click", function()
{
    let inputPassword = prompt("Please enter password:", "");

    if (inputPassword == "SpoonsKnivesForks")
    {
        location.href="https://www.google.com";
    }
});

asianKyle3.addEventListener("click", function()
{
    let inputPassword = prompt("Please enter password:", "");

    if (inputPassword == "SpoonsKnivesForks")
    {
        location.href="https://www.google.com";
    }
});

frankTheTank1.addEventListener("click", function()
{
    let inputPassword = prompt("Please enter password:", "");

    if (inputPassword == "MyDarlingBoy")
    {
        location.href="https://www.google.com";
    }
});

frankTheTank2.addEventListener("click", function()
{
    let inputPassword = prompt("Please enter password:", "");

    if (inputPassword == "MyDarlingBoy")
    {
        location.href="https://www.google.com";
    }
});

frankTheTank3.addEventListener("click", function()
{
    let inputPassword = prompt("Please enter password:", "");

    if (inputPassword == "MyDarlingBoy")
    {
        location.href="https://www.google.com";
    }
});

savvasSavvides1.addEventListener("click", function()
{
    let inputPassword = prompt("Please enter password:", "");

    if (inputPassword == "MyDarlingBoy")
    {
        location.href="https://www.google.com";
    }
});
savvasSavvides2.addEventListener("click", function()
{
    let inputPassword = prompt("Please enter password:", "");

    if (inputPassword == "MyDarlingBoy")
    {
        location.href="https://www.google.com";
    }
});
savvasSavvides3.addEventListener("click", function()
{
    let inputPassword = prompt("Please enter password:", "");

    if (inputPassword == "MyDarlingBoy")
    {
        location.href="https://www.google.com";
    }
});

lightRamzy1.addEventListener("click", function()
{
    let inputPassword = prompt("Please enter password:", "");

    if (inputPassword == "MyDarlingBoy")
    {
        location.href="https://www.google.com";
    }
});

lightRamzy2.addEventListener("click", function()
{
    let inputPassword = prompt("Please enter password:", "");

    if (inputPassword == "MyDarlingBoy")
    {
        location.href="https://www.google.com";
    }
});

lightRamzy3.addEventListener("click", function()
{
    let inputPassword = prompt("Please enter password:", "");

    if (inputPassword == "MyDarlingBoy")
    {
        location.href="https://www.google.com";
    }
});

/*
asianKyle.addEventListener("mouseover", function() 
{
    asianKyle.style.opacity = "0.5";
});
asianKyle.addEventListener("mouseout", function() 
{
    asianKyle.style.removeProperty('opacity');
});

frankTheTank.addEventListener("mouseover", function() 
{
    frankTheTank.style.opacity = "0.5";
});
frankTheTank.addEventListener("mouseout", function() 
{
    frankTheTank.style.removeProperty('opacity');
});

lightRamzy.addEventListener("mouseover", function() 
{
    lightRamzy.style.opacity = "0.5";
});
lightRamzy.addEventListener("mouseout", function() 
{
    lightRamzy.style.removeProperty('opacity');
});

savvasSavvides.addEventListener("mouseover", function() 
{
    savvasSavvides.style.opacity = "0.5";
});
savvasSavvides.addEventListener("mouseout", function() 
{
    savvasSavvides.style.removeProperty('opacity');
});
*/