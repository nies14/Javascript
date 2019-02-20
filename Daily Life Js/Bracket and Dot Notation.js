const person = {
    name: 'Zonayed Ahmed',
    age: 21,
    job: 'Student'
 }

 console.log(person.name);

 const anyObj = {
    Student: 'A property name to match with previous one'
 }

 console.log(anyObj[person.job]);

 for(aVal in person) {
    console.log(`aVal is here: ${aVal}`);
 }

 //valid
 for(aVal in person) {
    console.log(`Value: ${person[aVal]}`);
 }

 //undefined
 for(aVal in person) {
    console.log(`Value: ${person.aVal}`);
 }