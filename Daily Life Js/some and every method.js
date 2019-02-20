let arrSome = [1,2,3,4,5];

arrSome.some(function(item)
{
    return item===3;                //if 3 exist in the arrSomeay then it returns true....else false
});

//some accepts 3 arguments
arrSome.some((currentElement, index, thearrSomeay) => {
    console.log(currentElement);
    console.log(index);
    console.log(thearrSomeay);      //print the whole arrSomeay
 });

 arrSome.some(element=>{
     console.log(element)
     return element ===1; //if it finds one then it will be break like a loop
 })

 let arrEvery = [1,1,1,2,3];
 arrEvery.every(function(anItem) {
    return anItem === 1;        //if all items is 1 then returns true....else false
 })

 arrEvery.every(element=>
 {
    console.log(element);
    return element===1          //break when item is not 1
 });