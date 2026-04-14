// Task 1

let cart=[
{name:"Shirt",price:500,qty:2},
{name:"Shoes",price:1500,qty:1},
{name:"Cap",price:300,qty:3}
]

let total=cart.reduce((sum,item)=>sum+item.price*item.qty,0)
console.log("Total:",total)

let costly=cart.filter(item=>item.price>1000)
console.log(costly)

let names=cart.map(item=>item.name.toUpperCase())
console.log(names)

// Task 2

let students=[
{name:"Arun",marks:85},
{name:"Bala",marks:45},
{name:"Charan",marks:60},
{name:"Divya",marks:30}
]

let failed=students.filter(s=>s.marks<50)
console.log(failed)

let distinction=students.some(s=>s.marks>80)
console.log(distinction)

let allPassed=students.every(s=>s.marks>35)
console.log(allPassed)

let firstFailed=students.find(s=>s.marks<50)
console.log(firstFailed)

// Task 3

let employees=[
{name:"A",salary:25000},
{name:"B",salary:40000},
{name:"C",salary:15000},
{name:"D",salary:50000}
]

let increased=employees.map(emp=>({...emp,salary:emp.salary*1.1}))
console.log(increased)

let highSalary=employees.filter(emp=>emp.salary>30000)
console.log(highSalary)

let totalSalary=employees.reduce((sum,emp)=>sum+emp.salary,0)
console.log(totalSalary)

let sorted=[...employees].sort((a,b)=>b.salary-a.salary)
console.log(sorted)

// Task 4

let products=["Laptop","Mobile","Tablet","Camera"]

console.log(products.includes("Mobile"))

let lower=products.map(p=>p.toLowerCase())
console.log(lower)

console.log(products.indexOf("Tablet"))

console.log(products.join("-"))

// Task 5

let dob=new Date("2004-05-10")
let today=new Date()

let age=today.getFullYear()-dob.getFullYear()
let monthDiff=today.getMonth()-dob.getMonth()

if(monthDiff<0||(monthDiff===0&&today.getDate()<dob.getDate())){
age--
}

console.log (`You are $ {age} years old`)

// Task 6

let users=[
{username:"admin",password:"1234"},
{username:"user",password:"abcd"}
]

let username="admin"
let password="1234"

let foundUser=users.find(u=>u.username===username&&u.password===password)

if(foundUser){
console.log("Login Success")
}else{
console.log("Invalid Credentials")
}


// Task 7: Even Number Analyzer

let numbers=[10,15,20,25,30]

let even=numbers.filter(n=>n%2===0)
console.log(even)

let anyOdd=numbers.some(n=>n%2!==0)
console.log(anyOdd)

let allEven=numbers.every(n=>n%2===0)
console.log(allEven)

let first=numbers.find(n=>n>20)
console.log(first)


// Bonus Challenge

let orders=[
{id:1,amount:500,status:"delivered"},
{id:2,amount:1500,status:"pending"},
{id:3,amount:2000,status:"delivered"}
]

let revenue=orders.filter(o=>o.status==="delivered").reduce((sum,o)=>sum+o.amount,0)
console.log(revenue)

let pending=orders.filter(o=>o.status==="pending")
console.log(pending)

let bigOrder=orders.some(o=>o.amount>1000)
console.log(bigOrder)

let sortedOrders=[...orders].sort((a,b)=>a.amount-b.amount)
console.log(sortedOrders)