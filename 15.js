let marks=[90,70,40,89,56]

//filter(selection)
//get all marks less than 50
let res1=marks.filter(function(elements){
    return elements<50
})
let res2=marks.filter(function(elements){
    return elements>70
})
console.log(res1)
console.log(res2)

//waf that can extract marks greater than 70 and pack them into an array and return them

function marksGreaterThan70(marks){
    return marks.filter(function(nums){
        return nums>70
    })

    //too many operations
    // let result = [];
    // for(let i in marks){
    //     if(marks[i]>70){
    //         result.push(marks[i])
    //     }
    // }
    // return result
}
console.log(marksGreaterThan70(marks))

let res3=marks.filter(function(elements){
    return elements>70
})

console.log("arrow functions:")
let res4=marks.filter((elements)=>elements>70)
console.log(res4)

let res5=marks.filter(elements=>elements>70)
console.log(res5)

//find all marks b/w 30 and 90
console.log("marks b/w 30 and 90")
let res6=marks.filter(function(elements){
    return elements>30 && elements<90
})
console.log(res6)


//Map (tranformations and modifications)
let salaries=[100,200,300]

//add 50 to each salary [150,250,350]

//normal function
// for(let v of salaries){
//     v+=50;
// }

let res7=salaries.map(function(elements){
    return elements+50
})
let res8=salaries.filter(function(elements){
    return elements+50
})
let res9=salaries.map(function(elements){
    return elements>150
})
console.log('salaries', salaries)
console.log('updated salaries', res7)
console.log('updated salaries', res9)