// Print 1 to 10

// console.log("Numbers 1 to 10:");

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// Print even numbers

console.log("Even numbers:");

for (let i =1;i<=50;i++){
    if(i%2==0){
        console.log(i);
    }
}

//sum
let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum = sum + i;
}

console.log("Sum from 1 to 10:", sum);


let table = 5;

for (let i = 1; i <= 10; i++) {
    console.log(table + " x " + i + " = " + (table * i));
}


// ==========================================
// NESTED FOR LOOP
// ==========================================

for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 3; j++) {

        console.log("i =", i, "j =", j);

    }

}


// ==========================================
// STAR PATTERN
// ==========================================

for (let i = 1; i <= 5; i++) {

    let stars = "";

    for (let j = 1; j <= i; j++) {
        stars += "* ";
    }

    console.log(stars);
}


// ==========================================
// FINAL MINI PROGRAM
// ==========================================

// Find numbers between 1 and 20
// which are divisible by 3

console.log("Numbers divisible by 3:");

for (let i = 1; i <= 20; i++) {

    if (i % 3 === 0) {
        console.log(i);
    }
}
