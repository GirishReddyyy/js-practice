// array-operations-advanced

// ASSIGNMENT 1:
// -------------
// You are building a shopping cart summary for an e-commerce website.

// Test Data : 
const cart = [
    { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
    { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
    { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
    { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

// Use filter() to get only inStock products
let res1 = cart.filter(element => element.inStock)
console.log("In Stock products: ", res1)

// Use map() to create a new array with:  { name, totalPrice }
let res2 = cart.map(el => ({
    name: el.name,
    totalPrice: el.price * el.quantity
}))
console.log("Names and the total price: ", res2)

// Use reduce() to calculate grand total cart value
let res3 = cart.reduce((acc, el) => acc + (el.price * el.quantity), 0)
console.log("Grand total: ", res3)

// Use find() to get details of "Mouse"
let res4 = cart.find(element => element.name === "Mouse")
console.log(res4)

// Use findIndex() to find the position of "Keyboard"
let res5 = cart.findIndex(element => element.name === "Keyboard")
console.log("Keyboard index: ", res5)


// ASSIGNMENT 2:
// -------------
// Student Performance Dashboard

// You are working on a college result analysis system.

// Test Data:
const students = [
    { id: 1, name: "Ravi", marks: 78 },
    { id: 2, name: "Anjali", marks: 92 },
    { id: 3, name: "Kiran", marks: 35 },
    { id: 4, name: "Sneha", marks: 88 },
    { id: 5, name: "Arjun", marks: 40 }
];

// filter() students who passed (marks ≥ 40)
let pass = students.filter(element => element.marks >= 40)
console.log("Passed Students: ", pass)

// map() to add a grade field
//         ≥90 → A
//         ≥75 → B
//         ≥60 → C
//         else → D
//let res2=students.map()
let m1 = students.map(s => {
    if (s.marks >= 90) {
        s.grade = "A";
    } else if (s.marks >= 75) {
        s.grade = "B";
    } else if (s.marks >= 60) {
        s.grade = "C";
    } else {
        s.grade = "D";
    }
    return s;
});
console.log(m1);

// reduce() to calculate average marks
let res6 = students.reduce((acc, el) => acc + el.marks, 0)
console.log("Average: ", res6 / students.length)

// find() the student who scored 92
let res7 = students.find(element => element.marks === 92)
console.log("Student with 92 marks: ", res7)

// findIndex() of student "Kiran"
let res8 = students.findIndex(element => element.name === "Kiran")
console.log("Kiran's index: ", res8)

// ASSIGNMENT 3:
// -------------
// Employee Payroll Processor

// You are building a salary processing module in a company HR app.

// Test data:
const employees = [
    { id: 201, name: "Amit", salary: 45000, department: "IT" },
    { id: 202, name: "Neha", salary: 60000, department: "HR" },
    { id: 203, name: "Rahul", salary: 75000, department: "IT" },
    { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

// Tasks:
//     1. filter() employees from IT department
let fil = employees.filter(e => e.department === "IT");
console.log(fil);

//     2. map() to add:

//             netSalary = salary + 10% bonus
let m2 = employees.map(e => {
    e.netSalary = e.salary + e.salary * 0.10;
    return e;
});
console.log(m2);

//     3. reduce() to calculate total salary payout
let total2 = employees.reduce((acc, e) => acc + e.salary, 0);
console.log(total2);

//     4. find() employee with salary 30000
let f1 = employees.find(e => e.salary === 30000);
console.log(f1);

//     5. findIndex() of employee "Neha"
let f2 = employees.findIndex(e => e.name === "Neha");
console.log(f2);


// ASSIGNMENT 4: 
// ------------
// Movie Streaming Platform

// You are working on a movie recommendation system.

// Test data:
const movies = [
    { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
    { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
    { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
    { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


// Tasks:
// using filter() to get Sci-Fi movies
let fil4 = movies.filter(m => m.genre === "Sci-Fi");
console.log(fil4);

// using map() to return title and rating
let m4 = movies.map(m => m.title + " (" + m.rating + ")");
console.log(m4);

// using reduce() to calculate average rating
let total4 = movies.reduce((acc, m) => acc + m.rating, 0);
console.log(total4 / movies.length);

// using find() to get movie Joker
let f41 = movies.find(m => m.title === "Joker");
console.log(f41);

// using findIndex() to get index of Avengers
let f42 = movies.findIndex(m => m.title === "Avengers");
console.log(f42);


// ASSIGNMENT 5: 
// -------------
// Bank Transaction Analyzer

// You are building a bank statement summary.

// Test data:
const transactions = [
    { id: 1, type: "credit", amount: 5000 },
    { id: 2, type: "debit", amount: 2000 },
    { id: 3, type: "credit", amount: 10000 },
    { id: 4, type: "debit", amount: 3000 }
];

// using filter() to get credit transactions
let fil5 = transactions.filter(t => t.type === "credit");
console.log(fil5);

// using map() to extract amounts
let m5 = transactions.map(t => t.amount);
console.log(m5);

// using reduce() to calculate final balance
let total5 = transactions.reduce((acc, t) => {
    if (t.type === "credit") {
        return acc + t.amount;
    } else {
        return acc - t.amount;
    }
}, 0);
console.log(total5);

// using find() to get first debit transaction
let f51 = transactions.find(t => t.type === "debit");
console.log(f51);

// using findIndex() to get index of amount 10000
let f52 = transactions.findIndex(t => t.amount === 10000);
console.log(f52);