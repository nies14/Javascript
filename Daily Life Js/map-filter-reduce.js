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

/*region usage of filter*/
let numbers = [1,2,3,4,5,6,7,8,9,10];

let filterItem1 = numbers.filter(item=>{return item%2==0});
console.log(filterItem1);

//filter also accepts 3 arguments just like map
let filterItem2 = numbers.filter((item,index,fullArr)=>{console.log('Item: ' + item + ' and index: ' + index + '. Full Array: ' + fullArr)})

/*endregion usage of filter*/ 

/*region usage of reduce*/

let reduceItem1 = numbers.reduce((sum,item)=>{return sum+=item;},0);
console.log(reduceItem1);
var total = numbers.reduce(function(sum, item, index, fullArr) {
    console.log('Item: ' + item + ' and index: ' + index + '. Full Array: ' + fullArr + ' and sum: ' + sum);
    return sum += item
 }, 0);
 console.log(total);
/*endregion usage of reduce*/ 

//this in map and reduce

var sampleObj = {name:"Nies",age:"24"};

let mapItems4 = items.map((item,index,fullArr)=>console.log(this));         //'this' will refer to window object

mapItems4 = items.map(function(single, index, fullArr) {                    //this will not work for arrow function...coz arrow has lexical 'this' keyword
    console.log(this)
 }, sampleObj);
