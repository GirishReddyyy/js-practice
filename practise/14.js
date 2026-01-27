//Array

let skills=['html','css','javascript']

//Accessing elements(destructuring)
let{skill1,skill2,skill3}=skills
console.log(skill2)

//Inserting 
//at Staring
skills.unshift("python")
console.log(skills)

//at End
skills.push("angular")
console.log(skills)

//in between
//splice(index,delete count, element)
skills.splice(1,0,'react')
console.log(skills)

//Delete
//at start
skills.shift()
console.log(skills)

//at End
skills.pop()
console.log(skills)

//in between
skills.splice(2,1)
console.log(skills)