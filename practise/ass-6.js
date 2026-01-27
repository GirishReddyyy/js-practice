const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

// Use filter() to get only inStock products
let res1=cart.filter(element=>element.inStock)
console.log(res1)

// Use map() to create a new array with:  { name, totalPrice }
let res2=cart.map(el=>({
    name:el.name,
    totalPrice:el.price*el.quantity
}))
console.log(res2)

// Use reduce() to calculate grand total cart value
let res3=cart.reduce((acc,el)=>acc+(el.price*el.quantity),0)
console.log(res3)

// Use find() to get details of "Mouse"
let res4=cart.find(element=>element.name==="Mouse")
console.log(res4)

// Use findIndex() to find the position of "Keyboard"
let res5=cart.findIndex(element=>element.name==="Keyboard")
console.log(res5)