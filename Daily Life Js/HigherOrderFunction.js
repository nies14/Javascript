/* region how to pass function as an argument*/
function CallMyName(name,callback)
{
    var myAge=20;
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

/* endregion how to  function from another function*/


/* region how to store a function in a variable*/

var aFunc = function(name) {
  console.log('I am Simply a function and my name is ' + name);
}
var anothervar = aFunc;
anothervar('Tanvir');

/* endregion how to store a function in a variable*/

/*region usage of map*/

var items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var anotherItems = [];
for(var i = 0; i < items.length; i++) {
    anotherItems.push(items[i] * 2);
}
console.log(anotherItems);

var mapItems1 = items.map(function(item)
{
  return item*2;
});
console.log(mapItems1)

var mapItems2 = items.map(item=>item*2);
console.log(mapItems2)

/*endregion usage of map*/ 