//create a promise

const aPromise = (flag)=>
{
    //promise takes 2 parameters...1st one is resolve & 2nd one is reject
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>{
            if(flag)
            {
                //we can call this way
                //resolve();

                //we can also pass data below way
                resolve('This is a success');
            }
            else
            {
                //we can call this way
                //reject();

                //we can also pass data below way
                reject('This is a failure');
            }
        },3000);
        
    })
}

//console.log(aPromise(true));

//Promise Handle
//if it is success then it will go into then block else catch block
/*aPromise(true).then(()=>{
    console.log('This is a Success');
}).catch(() => {
    console.log('This is a Failure');
 })*/

 /*aPromise(true).then((data)=>{
    console.log(data);
}).catch((data) => {
    console.log(data);
 });*/

 //multiple promise binding
 const aPromise2 = (flag)=>
{
    //promise takes 2 parameters...1st one is resolve & 2nd one is reject
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>{
            if(flag)
            {
                resolve('This is a success 2');
            }
            else
            {
                reject('This is a failure 2');
            }
        },3000);
        
    })
}

Promise.all([aPromise,aPromise2]).then((data)=>{
    console.log(data);
}).catch((data)=>{
    console.log(data);
});

//fetch API
fetch('https://jsonplaceholder.typicode.com/posts')
   .then((data) => {
      return data.json();
   }).then((posts) => {
      console.log(posts);
}).catch((err)=>
{
    console.log(err);
})