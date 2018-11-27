//closures example

function closures()
{
    var a = 10;
    return function()
    {
        console.log(a+10);
    }
}

closures()();       //it can be done this way

//or

var res=closures();         //it can be done this way too
var res = res();