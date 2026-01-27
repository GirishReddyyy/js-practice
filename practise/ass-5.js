const marks = [78, 92, 35, 88, 40, 67];

    // 1. filter() marks ≥ 40 (pass marks)
    let res1=marks.filter(element=>element>=40)
    console.log(res1)

    // 2. map() to add 5 grace marks to each student
    let res2=marks.map(element=>element+5)
    console.log(res2)

    // 3. reduce() to find highest mark
    let res3=marks.reduce((acc,el)=>el>acc?el:acc)
    console.log(res3)

    // 4. find() first mark below 40
    let res4=marks.find(element=>element<40)
    console.log(res4)

    // 5. findIndex() of mark 92
    let res5=marks.findIndex(element=>element===92)
    console.log(res5)