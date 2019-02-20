//dom select by id
document.querySelector('#box1');
document.getElementById('box1')
//dom select by class
document.querySelector('.box1');
document.getElementsByClassName('box1')
//dom select by node list
document.querySelectorAll('.box');
//node list to array
var boxArray = Array.prototype.slice.call(boxNodeList);
//select a tag
document.querySelector('div'); //it will select first div of a dom
//select multiple tag
document.querySelectorAll('h4, p, ul');
//select by attribute
document.querySelector('[data-atr="box1"]');
//select by Pseudo-class
document.querySelector('li:first-child');
