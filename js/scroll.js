var electricBill = document.getElementById("electric-bill");
var theTank = document.getElementById("the-tank");
var theStephen = document.getElementById("the-stephen");
var theCurious = document.getElementById("the-curious");
var theLightskin = document.getElementById("the-lightskin");
var theAsian = document.getElementById("the-asian");

function getPos(el) {
    // yay readability
    for (var lx=0, ly=0;
         el != null;
         lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
    return ly;
}

var electricPos = getPos(electricBill);
var tankPos = getPos(theTank);
var stephenPos = getPos(theStephen);
var curiousPos = getPos(theCurious);
var lightskinPos = getPos(theLightskin);
var asianPos = getPos(theAsian);

console.log(electricPos);
console.log(tankPos);
console.log(stephenPos);
console.log(curiousPos);
console.log(lightskinPos);
console.log(asianPos);

function scrollElectric() {
    window.scrollTo({
        top: electricPos,
        behavior: "smooth"
    })
}

function scrollTank() {
    window.scrollTo({
        top: tankPos,
        behavior: "smooth"
    })
}

function scrollStephen() {
    window.scrollTo({
        top: stephenPos,
        behavior: "smooth"
    })
}

function scrollCurious() {
    window.scrollTo({
        top: curiousPos,
        behavior: "smooth"
    })
}

function scrollLightskin() {
    window.scrollTo({
        top: lightskinPos,
        behavior: "smooth"
    })
}

function scrollAsian() {
    window.scrollTo({
        top: asianPos,
        behavior: "smooth"
    })
}