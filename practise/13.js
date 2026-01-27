// function test(a){
//     console.log(a)
// }

// test(function(){
//     return 123;
// })

//callback function - a function send as arg to another function
function test1(a){
    console.log(a())
}

//here,anonymous function is a callback function
test1(function(){
    return 123;
})//




 