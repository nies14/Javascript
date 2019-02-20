var request = new XMLHttpRequest(); // ইন্সট্যান্স অবজেক্ট তৈরী
request.open('GET', 'url', true); // রিকোয়েস্ট ওপেন করা
request.send(); // রিকোয়েস্ট পাঠানো
// রিকোয়েস্ট হ্যান্ডেল
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