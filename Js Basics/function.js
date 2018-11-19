/* function can be decleared both of the below ways*/
function funcName() 
{
    //this is called function Statements
}

let funcName1 = function() 
{
    //this is called function expression
}

function SumFunc()              //arguments can be passed this way too
{
     let sum=0;
    for(let i=0;i<arguments.length;i++)
    {
        sum +=arguments[i];
    }
    return sum;
}

console.log(SumFunc(1,2,3));

function callMyName(name, callback)         //callback function
{
    var myAge = 20;
    callback(myAge);
    console.log('Is it interesting? Yes it is Mr.' + name);
}    
function hello(age) {
    console.log('I am passed through argument and my age is: ' + age);
} 
callMyName('Tanvir', hello);

//pass by value

console.log('Example of pass by value');
function changeValue(a) {
    console.log('Value of a inside function before changing: ' + a);
    a = 10;
    console.log('Value of a inside function after changing: ' + a);
    return a;
} 
var a = 100;
console.log('Value of a before changing function is applied: ' + a);
changeValue(a);
console.log('Value of a after changing function is applied: ' + a);     //a's value will not be changed

//pass by reference
console.log('Example of pass by reference');
function changeValuereference(a) 
{
    console.log('Value of a inside function before changing: ' + a.one);
    a.one = 'two';
    console.log('Value of a inside function after changing: ' + a.one);
    return a;
} 
var a = {one:'one'}
console.log('Value of a before changing function is applied: ' + a.one);
changeValuereference(a);
console.log('Value of a after changing function is applied: ' + a.one);