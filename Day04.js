// -----------------EXTRA EXERCISE-----------------
let buah = ["Apple", "Orange", "Banana"]
let harga = [5000, 6500, 4500]
let stok = [5, 6, 10]

let length = buah.length;

let result = "";
for (let i = 0; i < length; i++) {
    if (i == length - 1) {
        result+= `${i+1}. Buah ${buah[i]} dengan harga ${harga[i]}, stok: ${stok[i]}` 
    } else {
        result += `${i+1}. Buah ${buah[i]} dengan harga ${harga[i]}, stok: ${stok[i]} \n` 
    }
}

console.log(result)



// -----------exercise example 1-----------
function triangle1(size) {
    if (size < 1) {
        return "Error, the size cant be lower than 1."; // bug catching jika size kurang dari 1
    }

    let triangle1Result = "";

    for (let i = 1; i <= size; i++) {

        if (i > 1) { // ada if karena mulai dari baris kedua
    
            for (let a = 1; a < i; a++) { // for loop buat nambah angka di depan2
                triangle1Result += + a + " "
            }
        }

        triangle1Result = triangle1Result + i.toString() // buat nambah angka di belakang
        triangle1Result += "\n" // buat bikin line baru
    }
    return triangle1Result
}

let x = triangle1(5)
// console.log(x)

// -----------exercise example 2-----------
let inputArray = [1, 3, 4, 17, 45, 22, 91, 77, 23, 91];

let highestNum = 0;
for (let number of inputArray) {
    if (number > highestNum) {
        highestNum = number;
    } else if (number == highestNum) {
        highestNum = `There are more than 1 highest number, which is ${number}.`
    }
}

// console.log(highestNum);

// -----------exercise 1-----------
function triangle2(size) {
    let totalNum = 0
    let triangle2Array = [];
    let triangle2Result = "";

    for (let i = 1; i <= size; i++) { // looping untuk menentukan jumlah total angka yang ada
        totalNum += i
    }

    for (let i = 1; i <= totalNum; i++) { // looping untuk membuat array yang berisikan angka2
        if (i >= 10) {
            triangle2Array.push(i.toString())
        } else {
            triangle2Array.push("0" + i)
        }
    }

    for (let i = 0; i < size; i++) { // looping untuk memanggil angka2 yang dari array
        let b = 0;
        for (let a = 0; a <= i; a++) {
            triangle2Result += " "+ triangle2Array.shift()
        }
        triangle2Result += "\n"
    }
    return triangle2Result
}

// console.log(triangle2(5))

// -----------exercise 2-----------
function fizzBuzz(number) {
    let result = "";
    for (let i = 1; i <= number; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            result += "FizzBuzz, "
        } else if (i % 3 == 0) {
            result += "Fizz, "
        } else if (i % 5 == 0) {
            result += "Buzz, "
        } else {
            result += i + ", "
        }
    }
    return result;
}

// console.log(fizzBuzz(51))

// ---------------EXERCISE 3---------------
// formula weight in kg / (height in meter) ** 2
function calculateBMI(weight, height) {
    let bmiNum = weight / ((height) ** 2)
    bmiNum = bmiNum.toLocaleString(undefined, {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1
    });
    var bmiResult = "";
    
    if (bmiNum > 39.9) {
        bmiResult = "Obesity"
    } else if(bmiNum >= 30.0) {
        bmiResult = "Very overweight"
    } else if(bmiNum >= 25.0) {
        bmiResult = "Overweight"
    } else if(bmiNum >= 18.5) {
        bmiResult = "Ideal"
    } else {
        bmiResult = "Less weight"
    }

    console.log(bmiNum);
    console.log(bmiResult);
    return bmiResult;
}

console.log(calculateBMI(111, 1.67));

// Exercise 4
Array1 = [1,2,3,4,5,6,7,8,9,10,13,16,17,28,31];

function removeOdd(inputArray) {
    for (number in inputArray) {
        if (inputArray[number] % 2 != 0){
            inputArray.splice(number, 1);
        }
    }
    return inputArray;
}

x = removeOdd(Array1);
console.log(x);

// exercise 5
let stringTest1 = "Testing Hello World myn name is Hans";
function splitString(inputString) {
    let newArray = inputString.split(" ");
    return newArray;
}

console.log(splitString(stringTest1))