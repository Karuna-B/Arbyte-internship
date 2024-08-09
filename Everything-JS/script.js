// For loop
console.log("For loop:");
for (let i = 0; i <4 ; i++) {
    console.log("Iteration: " + i);
}

// For...in loop (for objects)
let person = { name: "Karuna", age: 21, city: "Tokyo" };
console.log("Person details:");
for (let key in person) {
    console.log(key + ": " + person[key]);
}

// While loop
let j = 0;
console.log("While loop:");
while (j < 5) {
    console.log("Iteration: " + j);
    j++;
}

// Do-while loop
let k = 0;
console.log("Do-while loop:");
do {
    console.log("Iteration: " + k);
    k++;
} while (k < 4);

// Nested loops
console.log("Nested loops:");
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 3; j++) {
        console.log("i = " + i + ", j = " + j);
    }
}