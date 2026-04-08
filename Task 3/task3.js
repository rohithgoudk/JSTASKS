// 1. User Input
let name = prompt("NAME:");
let age = prompt("AGE:");
let salary = prompt("SALARY:");
let loanAmount = prompt("LOANAMOUNT:");


// 2. Eligibility Check
if (age >= 21 && age <= 60 && salary >= 25000) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}


// 3. EMI Calculation
let emi = loanAmount;
emi /= 12;   // Assignment operator

console.log("EMI:", emi);


// 4. Loan Category
let category;

if (loanAmount > 500000) {
    category = "High Loan";
} else if (loanAmount > 200000) {
    category = "Medium Loan";
} else {
    category = "Low Loan";
}

console.log("Loan Category:", category);


// 5. Risk Level (Ternary)
let risk = (salary > 50000) ? "Low Risk" : "High Risk";
console.log("Risk Level:", risk);


// 6. Customer Type (Switch)
let customerType;

switch (true) {
    case (emi > 40000):
        customerType = "Premium Customer";
        break;
    case (emi > 20000):
        customerType = "Standard Customer";
        break;
    default:
        customerType = "Basic Customer";
}

console.log("Customer Type:", customerType);

// 7. Type Conversion Check
console.log("Type Conversion Check");

console.log("Age before conversion:", typeof age);
age = Number(age);
console.log("Age after conversion:", typeof age);

console.log("Salary before conversion:", typeof salary);
salary = Number(salary);
console.log("Salary after conversion:", typeof salary);

console.log("Loan before conversion:", typeof loanAmount);
loanAmount = Number(loanAmount);
console.log("Loan after conversion:", typeof loanAmount);
