// -----------------SLIDE 1 EXERCISE 1-----------------
let array1 = [100, 50, 90];

function myNumFunction(array) {

    function highestNum() {
        let highestNum = array[0];
        for (number in array) {
            if (array[number] > highestNum) {
                highestNum = array[number];
            }
        }
        return highestNum;
    }

    function lowestNum() {
        let lowestNum = array[0];

        for (number in array) {
            if (array[number] < lowestNum) {
                lowestNum = array[number];
            }
        }
        return lowestNum;
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

    let result = `The highest number in the array is: ${highestNum()}
The lowest number in the array is:  ${lowestNum()}
The average number of the array is: ${avgNum()}`
    return result;
}

console.log(myNumFunction(array1));


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
    let number = 0

    for (index in arrayA) {
        number = arrayA[index] + arrayB[index]
        resultArray.splice(resultArray.length, 0, number)
    }
    
    return resultArray
}

console.log(arrayAddition(array1, array2))

// -----------------SLIDE 1 EXERCISE 5-----------------
array1 = ["Hello", "world"]

function addToArray(input) {

    for (object of array1) {
        if (input == object) {
            return "It is already in the array";
        }
    }

    array1.splice(array1.length, 0, input)
    return array1
}

console.log(addToArray("my"))
console.log(addToArray("world"))
console.log(addToArray("name"))
console.log(array1)