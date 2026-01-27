//ravi made promise to kiran that he will call him in 10 mins
console.log("Ravi: Hey Kiran, I will call you in 5 seconds.");
console.log("waiting...")
let futureAvailablility=true;

//create promise(Kiran)

let promiseObj=new Promise((fullfilled,rejected)=>{
    setTimeout(()=>{
        if(futureAvailablility===true){
            fullfilled("Hello friend... how are you?");
        }else{
            rejected("Sorry i am busy now");
        }
    },5000);
})   


//consume promise(Ravi)

//old syntax
promiseObj
.then((message)=>console.log("fullfilled:",message)) //when promise is fullfilled
.catch((error)=> console.log("rejected",error)) //when promise is rejected



//new syntax
//moren way to consume promise (asyn & await)

// async function consumePromise(){
//     let res= await promiseObj()
// }
