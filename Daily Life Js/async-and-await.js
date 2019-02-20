//async function
/*
async function asyncCode() {
    // Asynchronous Codes
}
*/

//arrow async function
/* 
const asyncCode6 = async() => {
   // Asynchronous Codes
}
 */

const aPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
       if(true) {
          resolve('I am here!');
       } else {
          reject('No! It is an error!');
       }
    }, 1000)
 });

 const promiseHandle = async() => {
    try {
        const data = await aPromise;
        console.log(data);
     } 
     //catch block if promise is rejected
     catch(err) {
        console.log(err);
     }
 }

 promiseHandle();

 /*
 //way to handle multiple promise by await
 const handleMultiplePromise = async() => {
    const data = await Promise.all([promise1, promise2]);
    console.log(data);
 }
 */