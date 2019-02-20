let countryCapitals = {
   Bangladesh: "Dhaka", 
   India: "Delhi", 
   Nepal: "Kathmandu", 
   Afganistan: "Kabul", 
   Thailand: "Bangkok"
}

//
for(let key in countryCapitals)
{
    console.log(key+": ");
    console.log(countryCapitals[key]+"\n");
}

let countries = Object.keys(countryCapitals);
let capitals = Object.values(countryCapitals);

//console.log(capitals)

capitals.map(function(capital){
    console.log(capital)
});

capitals.map(capital=>console.log(capital));   //es6 syntax

Object.values(countryCapitals).map(capital=>console.log(capital));    //can also be done this way