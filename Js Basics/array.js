//var array = new array('Tanvir','Hassan','Nies'); /* Not available in Es5 or less */

let array = ['Tanvir','Hassan','Nies'];

console.log(array[0])

console.log(array.length);

console.log(array['length']);

array.push('Novera'); //push in the last
console.log(array);

array.pop(); //remove from last
console.log(array);

array.shift(); //remove from first
console.log(array);

array.unshift('Md');
console.log(array);

console.log(array.indexOf('Md'));

array.splice(1,2) //remove item from index 1 to index 2
console.log(array);

let spliceArr = array.splice(0)
array.splice(0)  //remove start from index 0 till the end

array.push('Novera'); 
array.push('Nies'); 


/* Referenec issue */

console.log(array)
let copyArr = array;

copyArr.push("lol");    //it will also effect the array beacuse they are referencing the same memory
console.log(array);   
console.log(copyArr === array) //check the reference...if both pointing the same memory then returns true
