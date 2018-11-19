let rahim = {
    fullName: 'Rahim Miya',
    age: 21,
    address: 'Dhaka',
    job: 'Job Holder'
 }
 console.log(rahim);

let myObj = new Object();       //object can be decleared this way too
console.log(myObj);

console.log(rahim.fullName);
console.log(rahim['fullName']);    //object's property can be accessed this way too

rahim.zipCode = 3517        //adding a new property to an existing object

rahim.welcomeMsg = function()       //adding a new function to an existing object
{
    console.log('Hello There');
}

console.log(rahim);

/* array inside object */
let objArr = {
    normal: 'Normal Item',
    name: ['Rahim', 'Karim', 'Rafiq', 'Shafiq'],
    age: [10, 20, 30, 40, 50]
 }

 console.log(objArr);

 console.log(objArr.name[2]);       // object array's property can be accessed this way

 /* object inside array */
 var arrObj = ['Zonayed', {name: 'Rafiq', age: 21, job: 'Student'}, 'Bangladesh']
 console.log(arrObj[1].name);    