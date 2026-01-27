console.log("Dad, I'll get first rank")
console.log("waiting for results...")

let res=true;

let promiseObj= new Promise((fullfilled,rejected)=>{
    setTimeout(()=>{
        if(res===true){
            fullfilled("I got first rank")
        }else{
            rejected("I didnt get first rank")
        }
    },5000)
})

//consume promise

promiseObj
.then((msg)=>console.log("fullfilled:",msg))
.catch((err)=>console.log("rejected:",err))