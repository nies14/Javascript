var request = new XMLHttpRequest(); // instance of 'XMLHttpRequest' object
request.open('GET', 'url', true); // open request
request.send(); //send request
// handle request
request.onreadystatechange = function handleRequest(){
  console.log(request);
}

var request = new XMLHttpRequest(); 
request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true); 
request.send(); 
 
request.onreadystatechange = function handleRequest(){
  //console.log(request.responseText);
  //console.log(JSON.parse(request.responseText)); //will give some error
  if(request.readyState === 4 && request.status === 200)
  {
    console.log(JSON.parse(request.responseText));
  }
  
}
