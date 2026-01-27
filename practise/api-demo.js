//make api requests

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(res=>res.json())
// .then(res=> console.log("fullfilled:",res)) //when promise is fullfilled
// .catch(err=> console.log("rejected",err)) //when promise is rejected

//modern syntax

async function getData(){
    //make api req and get res
    let res= await fetch('https://jsonplaceholder.typicode.com/posts')

    //extract data from res
    let data= await res.json()
    console.log("data:",data)
}

getData()