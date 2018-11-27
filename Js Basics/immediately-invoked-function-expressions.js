//immediately-invoked-function-expressions

(function hello()
{
    console.log("Hello immediately-invoked-function");
})();

var sum = (function()
{
    return 10+10;
})();
console.log(sum);

//this immediately-invoked-function can be used as a private function()

var controller = (function() {
    var a = {
            name: 'Tanvir Hassan',
            uid: 1062
            };
    return a;
 })();

 var interface = (function() {
    return 'Hello ' + controller.name;   
 })();

 console.log(interface);

