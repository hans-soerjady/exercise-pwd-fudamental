// -----------------EXTRA EXERCISE 1-----------------
let dataTokoBaju = [
    ["Jaket", 2, 3000],
    ["Topi", 11, 5600],
    ["Baju", 9, 6600]
];

let dataTokoMobil = [
    ["Brio", 13, 30000],
    ["Pajero", 21, 75000],
    ["Xenia", 8, 78000]
];

function printData(namaToko) {
    let result = ""
    namaToko.forEach((value, index) => {
        result += `${value[0]} stoknya ${value[1]} dengan harga ${value[2]}.`
        if (value[1] < 10) {
            result += " Stock akan habis.";
        } else {
            result += " Stock cukup."
        }
        if (index < namaToko.length - 1) {
            result += "\n"
        }
    })
    return result;
}

console.log(printData(dataTokoBaju))
console.log(printData(dataTokoMobil))


// -----------------EXTRA EXERCISE 2-----------------
// membuat fungsi yang menduplikasi cara kerja forEach
let arrayEx2 = ["Asia", "Afrika", "Eropa"]

function cloneForEach(callback, array) {
    result = ""
    for (let index = 0; index < array.length; index++) {
        callback(array[index], index);
    }
}

cloneForEach(function (value, index) { // normal function expression
    console.log(value)
    console.log(index)
}, arrayEx2);

cloneForEach((value, index) => { // arrow function expression
    console.log(`${index + 1}. ${value} ___`)
}, arrayEx2);


// -----------------SLIDE 1 EXERCISE 1-----------------
let array1 = [3, 2, 6, 8, 1, 12];

function myNumFunction1(array) { // without sort

    let lowestNum = array[0];
    let highestNum = array[0];
    for (number in array) {
        if (array[number] > highestNum) {
            highestNum = array[number];
        } else if (array[number] < lowestNum) {
            lowestNum = array[number];
        }
    }

    function avgNum() {
        let avgNum = 0;
        let totalNum = 0;
        for (number in array) {
            totalNum += array[number]
        }
        avgNum = totalNum / (parseInt(number) + 1)
        return avgNum
    }

    let result = `The highest number in the array is: ${highestNum}
The lowest number in the array is:  ${lowestNum}
The average number of the array is: ${avgNum()}`
    return result;
}


function myNumFunction2(array) { // using sort
    array.sort(function (a, b) { return b - a })
    let highestNum = array[0]
    let lowestNum = array[array.length - 1]

    function avgNum() {
        let avgNum = 0;
        let totalNum = 0;
        for (number in array) {
            totalNum += array[number]
        }
        avgNum = totalNum / (parseInt(number) + 1)
        return avgNum
    }

    let result = `The highest number in the array is: ${highestNum}
The lowest number in the array is:  ${lowestNum}
The average number of the array is: ${avgNum()}`
    return result
}

console.log(myNumFunction1(array1));

console.log(myNumFunction2(array1));


// -----------------SLIDE 1 EXERCISE 2-----------------
array1 = ["Hello", "world", "my", "name", "is", "TEsting", "TESTING"];

function combineWords(array) {
    let result = "";
    for (word of array) {

        if (word === array[array.length - 1]) {
            result += "and " + word;
        } else if (word === array[array.length - 2]) {
            result += word + " ";
        } else {
            result += word + ", ";
        }

    }
    return result;
}

console.log(combineWords(array1));


// -----------------SLIDE 1 EXERCISE 3-----------------
let inputWord = "Hello world my name is Hans";

function splitWord(text) {
    let resultArray = [];
    let word = "";

    for (letter of inputWord) {
        if (letter != " ") {
            word += letter;
        } else if (letter == " ") {
            resultArray.splice(resultArray.length, 0, word);
            word = "";
        }
    }

    resultArray.splice(resultArray.length, 0, word);
    return resultArray;
}

console.log(splitWord(inputWord));


// -----------------SLIDE 1 EXERCISE 4-----------------
array1 = [3, 2, 1];
let array2 = [6, 5, 4]; // result should be [8, 10, 12]

function arrayAddition(arrayA, arrayB) {
    let resultArray = [];
    let number = 0;

    for (index in arrayA) {
        number = arrayA[index] + arrayB[index];
        resultArray.splice(resultArray.length, 0, number);
    }

    return resultArray;
}

console.log(arrayAddition(array1, array2));

// -----------------SLIDE 1 EXERCISE 5-----------------
array1 = ["Hello", "world"];

function addToArray(input) {

    for (object of array1) {
        if (input == object) {
            return "It is already in the array";
        }
    }

    array1.splice(array1.length, 0, input);
    return array1;
}

console.log(addToArray("my"));
console.log(addToArray("world"));
console.log(addToArray("name"));
console.log(array1);


// -----------------SLIDE 2 EXERCISE 1-----------------
array1 = [12, 3, 6, 8, 7, 9, 10, 13];

function removeOdd(array) {
    let resultArray = [];
    for (let number of array) {
        if (number % 2 == 0) {
            resultArray.splice(array.length, 0, number);
        }
    }
    return resultArray;
}

console.log(removeOdd(array1));


// -----------------SLIDE 2 EXERCISE 2-----------------
function addToArray2(maxsize, ...integers) {
    let resultArray = [];

    let i = 0;
    integers.forEach((value, index) => {
        if (i < maxsize) {
            resultArray.splice(integers.length, 0, value)
            i++;
        }
    })
    return resultArray;
}
console.log(addToArray2(3, 14, 12, 7, 5, 3, 6, 8, 11, 12))


// -----------------SLIDE 2 EXERCISE 3-----------------
array1 = ["Hello", "world", "my"];
array2 = ["is", "Hans", "!"];

function combineArrays(arrayA, arrayB) {
    resultArray = [];
    for (word of arrayA) {
        resultArray.push(word);
    }

    for (word of arrayB) {
        resultArray.push(word);
    }
    return resultArray;
}

console.log(combineArrays(array1, array2));


// -----------------SLIDE 2 EXERCISE 4-----------------
array1 = ["Hello", "world", "my", "my", "world", "world", "world", "test", "Hans"];

function findDuplicate(array) {
    let duplicates = [];
    for (let i = 0; i < array.length; i++) {
        for (let a = i + 1; a < array.length; a++) {
            if (array[i] == array[a]) {
                duplicates.splice(duplicates.length, 0, array[a]);
                break;
            }
        }
    }
    return duplicates;
}
console.log(findDuplicate(array1));


// -----------------SLIDE 2 EXERCISE 5-----------------
array1 = ["A", "B", "C", "D"];
array2 = ["A", "B", "E", "D"];

function findDifference(arrayA, arrayB) {
    let differences = [];
    for (let index = 0; index < arrayA.length; index++) {
        if (arrayA[index] != arrayB[index]) {
            differences.splice(differences.length, 0, arrayA[index], arrayB[index]);
        }
    }
    return `The difference between the two array is ${differences}`;
}
console.log(findDifference(array1, array2));


// -----------------SLIDE 3 EXERCISE 1-----------------
// let arr = [1, "string", null, false, undefined, 2, "yes", undefined];




// -----------------SLIDE 3 EXERCISE 2-----------------
let arrayNum = [12, 5, 2, 7, 8, 11, 3, 4]

const secondSmallest = (array) => {
    let smallest = array[0]
    let secondSmallest = array[0];
    console.log(secondSmallest)

    for (let index = 0; index < array.length; index++) {
        if (array[index] < smallest) {
            smallest = array[index]
            console.log(smallest)
        }
    }

    for (let index = 0; index < array.length; index++) {
        if (smallest < array[index] && array[index] < secondSmallest) {
            secondSmallest = array[index]
        }

    }
    console.log(secondSmallest)
    console.log(smallest)
    return secondSmallest
}

console.log(secondSmallest(arrayNum))


// -----------------SLIDE 3 EXERCISE 3-----------------
array1 = ["A", "B", 4, 7, 8, 11, true, false, 25, undefined, "C"]

const sumNumbers = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof(array[i]) === "number") {
            sum += array[i];
        }
    }
    return sum;
}

console.log(sumNumbers(array1))


// -----------------SLIDE 3 EXERCISE 4-----------------
array1 = [10, 20, 40, 10, 50, 30, 10, 60, 10];


const sumDuplicate = (array) => {
    let result = 0;
    let highestDuplicate = 0;
    let duplicateNum = 0;
    let counter = 1;

    for (let index = 0; index < array.length; index++) {
        counter = 1
        for (let a = 0; a < array.length; a++) {
            if (array[index] == array[a] && index != a) {
                counter += 1
            }

            if (counter > highestDuplicate) {
                highestDuplicate = counter
                duplicateNum = array[index]
            }
        }
    }
    result = duplicateNum * highestDuplicate
    return result
}

console.log(sumDuplicate(array1))



// -----------------SLIDE 3 EXERCISE 5-----------------

const gameRPS = (input) => {
    let result = "";
    let compMove = Math.floor(Math.random() * (4 - 1) + 1);
    console.log(compMove)

    if (compMove === 1) {
        compMove = "rock"
    } else if (compMove === 2) {
        compMove = "paper"
    } else {
        compMove = "scissors"
    }
    console.log(compMove);
    
    let playerMove = input.toLowerCase();
    console.log(playerMove)

    result = `You chose ${playerMove}, and the computer chose ${compMove}.`

    if (playerMove ===  compMove) {result = "It's a draw"} 
    else if (playerMove === "rock" && compMove === "paper") {result += " You lost."} 
    else if (playerMove === "rock" && compMove === "scissors") {result += " You won."}
    else if (playerMove === "paper" && compMove === "scissors") {result += " You lost."}
    else if (playerMove === "paper" && compMove === "rock") {result += " You won."}
    else if (playerMove === "scissors" && compMove === "paper") {result += " You won."}
    else if (playerMove === "scissors" && compMove === "rock") {result += " You lost."}

    
    return result;
}

console.log(gameRPS("rock"))