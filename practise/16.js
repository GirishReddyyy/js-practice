//function declaration
function findSum(a,b){
    return a+b
}

//function expression
let findSum1=function(a,b){
    return a+b
}

//arrow function(simplify function expression)
let findSum2=(a,b) => a+b


let marks=[10,30,89,65,45]
//filter(selection)
//get marks<70

let res1=marks.filter(element=>element<70)
console.log(res1)


//map(modification)
//add 5 marks to all
let res2=marks.map(element=>element+5)
console.log(res2);

//reduce(aggregation)
//find sum of the marks
let res3=marks.reduce((acc,element)=>acc+element)
console.log(res3)

let res4=marks.reduce((acc,element)=> acc>element?element:acc)
let res5=marks[0];
for(let v of marks){
    if(v<res5) res5=v
}
console.log(res4)
console.log(res5)

//find element
//find 23
let res6=marks.find(element=>element===23)
console.log(res6)
let res7=marks.find(element=>element===res5)
console.log(res7)

let res8=marks.findIndex(element=>element===23)
console.log(res8)
let res9=marks.findIndex(element=>element===65)
console.log(res9)