/* region how to pass function as an argument*/
function CallMyName(name,callback)
{
    let myAge=20;
    callback(myAge);
    console.log(name);  
}

function hello(myAge)
{
    console.log("my age is "+myAge);

}

CallMyName("Tanvir",hello);
/* endregion how to pass function as an argument*/

/* region how to return function from another function*/

function welcomeMsg(name)
{
    console.log("Hello "+name+"!");
    return function(menu)
    {
        console.log("Today's menu is "+menu);
    }
}

welcomeMsg("Tanvir")("Coffee");

/* endregion how to return function from another function*/


/* region how to store a function in a variable*/

let aFunc = function(name) {
  console.log('I am Simply a function and my name is ' + name);
}
let anotherlet = aFunc;
anotherlet('Tanvir');

/* endregion how to store a function in a variable*/

/*region usage of map*/

let items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let anotherItems = [];
for(let i = 0; i < items.length; i++) {
    anotherItems.push(items[i] * 2);
}
console.log(anotherItems);

let mapItems1 = items.map(function(item)
{
  return item*2;
});
console.log(mapItems1)

let mapItems2 = items.map(item=>item*2);
console.log(mapItems2)

//map accepts 3 arguments
let mapItems3 = items.map((item,index,fullArr)=> console.log('Item: ' + item + ' and index: ' + index + '. Full Array: ' + fullArr));


/*endregion usage of map*/ 