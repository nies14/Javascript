let countryCapitals = {
   Bangladesh: "Dhaka", 
   India: "Delhi", 
   Nepal: "Kathmandu", 
   Afganistan: "Kabul", 
   Thailand: "Bangkok"
}

//
for(key in countryCapitals)
{
    console.log(key+": ");
    console.log(countryCapitals[key]+"\n");
}