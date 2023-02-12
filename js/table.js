var oct = 21.79;
var nov = 33.55;
var dec = 42.27;
var jan = 36.85;
var feb = 38.99;
var mar = "TBD";
var apr = "TBD";
var may = "TBD";
var jun = "TBD";

var totals = 0;
function totalCalculation(month)
{
    if (typeof month == "number")
    {
        totals += month;
    }
    
    return totals;
}

totalCalculation(oct);
totalCalculation(nov);
totalCalculation(dec);
totalCalculation(jan);
totalCalculation(feb);
totalCalculation(mar);
totalCalculation(apr);
totalCalculation(may);
totalCalculation(jun);

totals = totals.toFixed(2);

var total = totals;

var rReceived = 173.45;
var rNet = (total - rReceived);
rNet = rNet.toFixed(2);

var zReceived = 134.46;
var zNet = (total - zReceived);
zNet = zNet.toFixed(2);

var hReceived = 134.46;
var hNet = (total - hReceived);
hNet = hNet.toFixed(2);

function docWrite(variable)
{
    document.write(variable);
}
