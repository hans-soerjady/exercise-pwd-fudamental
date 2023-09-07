// 1st problem
let number = 12;
let numberType;

if (number % 2 === 0) {
    numberType = "Even";
} else {
    numberType = "Odd";
}

console.log(`The number ${number} is an ${numberType} number.`);

// 2nd problem
number = 5;

let factorialNum = 1;
// for (let i = 1; i <= number; i++) {
//     factorialNum = factorialNum * i
// }

// console.log(factorialNum)

let i = 1;
while (i <= number) {
    factorialNum = factorialNum * i;
    i++;
}
console.log(factorialNum);

// EXERCISE
// 1st exercise
number = 79;

// rumus c to f ((n C * 9/5) + 32 = n F)
let result = (number * 9/5) + 32;
console.log(result);


// 2nd exercise
number = 56;

if (number % 2 === 0) {
    numberType = "Even";
} else {
    numberType = "Odd";
}

console.log(`The number ${number} is an ${numberType} number.`);


// 3rd exercise
let isPrime = "prime number.";
number = 3;

for (let i = 2; i < number; i++) { // membagi variable number dengan angka2 sebelum variable number.
    if (number % i == 0){
        isPrime = "not a prime number.";
    }
}

if (number <= 0) {
    isPrime = "not a prime number."
}

console.log(`The number ${number} is a ${isPrime}`);


// 4th exercise
number = 6;

let totalNum = 0
for (let i = 1; i <= number; i++) {
    totalNum += i;
}

console.log(totalNum);

// 5th exercise
number = 6;

factorialNum = 1;
for (let i = 1; i <= number; i++) {
    factorialNum = factorialNum * i
}

console.log(factorialNum);

// 6th exercise
// INPUT
number = 7; //first 6 fibonacci numbers are 0, 1, 1, 2, 3, 5)

// PROCESS
let fibonacciNum;
let fibonacciNumList = "0, 1";
let number1 = 0;
let number2 = 1;

if (number === 1) {
    fibonacciNumList = "0"
    fibonacciNum = "0"
} else if (number === 2) {
    fibonacciNumList = "0, 1"
    fibonacciNum = "1"
} else {
    for (let i = 2; i < number; i++) {

        fibonacciNum = number1 + number2;
        // console.log(fibonacciNum);
        fibonacciNumList = fibonacciNumList + ", " + fibonacciNum.toString()

        number1 = number2;
        number2 = fibonacciNum;
    }
}

// OUTPUT
console.log(`The number ${number} in the fibonacci sequence is ${fibonacciNum}.`)

console.log(`The first ${number} fibonacci numbers are below.`)
console.log(fibonacciNumList)

// EXTRA EXERCISE
let size = 9
result = ""

for (let i = 1; i <= size; i++) // code untuk mengulang baris pertama, di copy ke bawah nya
{
    for (let i = 1; i <= size; i++) { // code untuk buat baris pertama (menyamping)
        if (i % 2 === 0) {
            result += "# "
        }
        else {
            result += "* "
        }
    }
    
    result += "\n"
}
    
console.log(result)

// EXTRA EXERCISE 2
size = 5;

result = "";
for (let i = 1; i <= size; i++) {

    if (i > 1) { // karena "0" mulai dari pengulangan kedua

        for (let a = 1; a < i; a++) { // tambahan 0 sesuai i
            result += "0"
        }
        
    }

    result += "1\n" // "1" di akhir dan supaya baris baru
}

console.log(result)