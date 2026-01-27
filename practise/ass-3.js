const temperatures = [32, 35, 28, 40, 38, 30, 42];
    // 1. filter() temperatures above 35
    let res1=temperatures.filter(element=>element>35)
    console.log(res1)

    // 2. map() to convert all temperatures from Celsius → Fahrenheit  (9/5)+32
    let res2=temperatures.map(element=> element*(9/5)+32)
    console.log(res2)

    // 3. reduce() to calculate average temperature
    let res3=temperatures.reduce((acc,el)=>acc+el,0)
    console.log(res3/temperatures.length)

    // 4. find() first temperature above 40
    let res4=temperatures.find(element=>element>40)
    console.log(res4)

    // 5. findIndex() of temperature 28
    let res5=temperatures.findIndex(element=>element===28)
    console.log(res5)