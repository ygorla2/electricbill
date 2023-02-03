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

var curiousZach = document.getElementById("curiousZach");
var asianKyle = document.getElementById("asianKyle");
var frankTheTank = document.getElementById("frankTheTank");
var savvasSavvides = document.getElementById("savvasSavvides");
var lightRamzy = document.getElementById("lightRamzy");

curiousZach.addEventListener("mouseover", function() 
{
    curiousZach.style.opacity = "0.5";
});
curiousZach.addEventListener("mouseout", function() 
{
    curiousZach.style.removeProperty('opacity');
});

curiousZach.addEventListener("click", function()
{
    let inputPassword = prompt("Please enter password:", "");

    if (inputPassword == "MyDarlingBoy")
    {
        location.href="https://www.pornhub.com";
    }
});

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
