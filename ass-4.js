const courses = ["javascript", "react", "node", "mongodb", "express"];

    // 1. filter() courses with name length > 5
    let res1=courses.filter(element=>element.length>5)
    console.log(res1)

    // 2. map() to convert course names to uppercase
    let res2=courses.map(element=>element.toUpperCase())
    console.log(res2)

    // 3. reduce() to generate a single string:
    //           "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
    let res3=res2.reduce((acc,el)=>acc+" | "+el)
    console.log(res3)

    // 4. find() the course "react"
    let res4=courses.find(element=>element==="react")
    console.log(res4)

    // 5. findIndex() of "node"
    let res5=courses.findIndex(element=>element==="react")
    console.log(res5)