function print(callback)
{
    setTimeout(() => {
        
        console.log("Print Is here");
        callback();
    }, 1000);
}

function hello()
{
    console.log('hi after Print');
}

print(hello);

//another way

function print2(text,callback)
{
    console.log(text);
    callback();
}

print2('math',()=>{
    console.log('done');
});