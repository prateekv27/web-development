console.log("Hello World!");

console.log("I am learning JavaScript");


// ==========================================
// LECTURE 2: VARIABLES
// ==========================================

let name = "Prateek";
let age = 19;
let height = 6;

console.log(name);
console.log(age);
console.log(height);


// Changing a variable
let marks = 90;

console.log("Old marks:", marks);

marks = 95;

console.log("New marks:", marks);


// ==========================================
// LECTURE 3: var, let and const
// ==========================================

// let can be changed
let score = 50;

score = 70;

console.log("Score:", score);


// const CANNOT be changed
const pi = 3.14159;

console.log("Pi:", pi);

// This would give an error:
// pi = 3.14;


// var (older way of declaring variables)
var city = "Delhi";

city = "Noida";

console.log("City:", city);


// ==========================================
// LECTURE 4: PRIMITIVE DATA TYPES
// ==========================================

// 1. Number
let num = 42;

console.log(num);
console.log(typeof num);


// 2. String
let username = "Prateek";

console.log(username);
console.log(typeof username);


// 3. Boolean
let isStudent = true;

console.log(isStudent);
console.log(typeof isStudent);


// 4. Undefined
let something;

console.log(something);
console.log(typeof something);


// 5. Null
let emptyValue = null;

console.log(emptyValue);
console.log(typeof emptyValue);


// 6. BigInt
let bigNumber = 123456789012345678901234567890n;

console.log(bigNumber);
console.log(typeof bigNumber);


// 7. Symbol
let id = Symbol("id");

console.log(id);
console.log(typeof id);


// ==========================================
// OBJECTS
// ==========================================

let student = {
    name: "Prateek",
    age: 19,
    branch: "CSE",
    cgpa: 9.0
};

console.log(student);

console.log(student.name);
console.log(student.age);
console.log(student.branch);


// Changing object values

student.cgpa = 9.2;

console.log("Updated CGPA:", student.cgpa);


// Adding a new property

student.semester = 3;

console.log(student);


// ==========================================
// LECTURE 5: PRACTICE SET
// ==========================================

// Question 1
let studentName = "Prateek";
let studentAge = 19;

console.log(
    "My name is",
    studentName,
    "and my age is",
    studentAge
);


// Question 2
let product = {
    name: "Laptop",
    price: 50000,
    available: true
};

console.log(product);


// Question 3
let number1 = 10;
let number2 = 20;

console.log("Sum:", number1 + number2);


// ==========================================
// LECTURE 6: OPERATORS
// ==========================================


// Arithmetic operators

let a = 20;
let b = 10;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);
console.log("Power:", a ** b);


// Increment

let x = 5;

x++;

console.log("After increment:", x);


// Decrement

x--;

console.log("After decrement:", x);


// Assignment operators

let value = 10;

value += 5;

console.log("value += 5:", value);

value -= 3;

console.log("value -= 3:", value);

value *= 2;

console.log("value *= 2:", value);

value /= 4;

console.log("value /= 4:", value);


// ==========================================
// COMPARISON OPERATORS
// ==========================================

let p = 10;
let q = 20;

console.log(p == q);
console.log(p != q);

console.log(p > q);
console.log(p < q);

console.log(p >= q);
console.log(p <= q);


// Strict equality

console.log(10 === 10);
console.log(10 === "10");


// ==========================================
// LOGICAL OPERATORS
// ==========================================

let userAge = 20;

console.log(userAge > 18 && userAge < 30);

console.log(userAge < 18 || userAge > 60);

console.log(!(userAge > 18));


// ==========================================
// LECTURE 7: CONDITIONAL EXPRESSIONS
// ==========================================


// if

let myAge = 19;

if (myAge >= 18) {
    console.log("You are an adult");
}


// if-else

let marksObtained = 75;

if (marksObtained >= 40) {
    console.log("PASS");
}
else {
    console.log("FAIL");
}


// if-else-if

let marks2 = 85;

if (marks2 >= 90) {
    console.log("Grade A+");
}
else if (marks2 >= 80) {
    console.log("Grade A");
}
else if (marks2 >= 70) {
    console.log("Grade B");
}
else if (marks2 >= 60) {
    console.log("Grade C");
}
else {
    console.log("Fail");
}


// ==========================================
// TERNARY OPERATOR
// ==========================================

let votingAge = 19;

let result = votingAge >= 18 ? "Eligible" : "Not eligible";

console.log(result);


// ==========================================
// LECTURE 8: PRACTICE SET
// ==========================================


// Question 1: Check age

let ageCheck = 19;

if (ageCheck >= 18) {
    console.log("Eligible to vote");
}
else {
    console.log("Not eligible to vote");
}


// Question 2: Even or odd

let evenOdd = 17;

if (evenOdd % 2 === 0) {
    console.log("Even");
}
else {
    console.log("Odd");
}


// Question 3: Largest of two numbers

let first = 50;
let second = 30;

if (first > second) {
    console.log("First number is greater");
}
else {
    console.log("Second number is greater");
}


// Question 4: Check positive/negative

let number = -10;

if (number > 0) {
    console.log("Positive");
}
else if (number < 0) {
    console.log("Negative");
}
else {
    console.log("Zero");
}

