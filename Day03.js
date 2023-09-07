// exercise 1
let inputNum = 6;
let limitNum = 11;

result = "";
for (let i = 1; i <= limitNum; i++) {
    let answer = inputNum * i;
    result += `${inputNum} X ${i} = ${answer}` + "\n";
}

console.log(result)


// exercise 2
let inputWord = "testing".toLowerCase();

let inputWordLength = inputWord.length;
let isPalindrome = "is a palindrome word.";

let a = inputWordLength - 1 // buat cari index dari belakang, makanya minus 1
for (let i = 0; i <= inputWordLength - 1; i++) {
    if (inputWord[i] != inputWord[a]) {
        isPalindrome = "is not a palindrome world";
    }
    a--
    }

console.log(`The word ${inputWord} ${isPalindrome}`);


// exercise 3
inputNum = 1000000000;
let formattedNum = inputNum.toLocaleString();

result = inputNum / 100000;
let formattedResult = result.toLocaleString();

console.log(`${formattedNum} cm is equal to ${formattedResult} km.`);


// exercise 4
inputNum = 2000000;

// method 1
formattedNum = inputNum.toLocaleString(undefined, {
    minimumFractionDigits: 2, // mengatur minimum angka di belakang
    maximumFractionDigits: 2 // mengatur maximum angka di belakang
});
result = `Rp. ${formattedNum}`;
console.log(result);

// method 2
formattedNum = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "IDR"
}).format(inputNum);

console.log(formattedNum);


// exercise 5
let inputString = "Hello World";
let searchString = "ello";

result = inputString.replace(searchString, "");
console.log(result);


// exercise 6
inputWord = "hello world my name is hanssiissdsa hsdad";

inputWordLength = inputWord.length;
result = ""
for (let i = 0; i < inputWordLength; i++) {
    if (i == 0) {
        result += inputWord[i].toUpperCase();
    } else if (inputWord[i] == " ") {
        result += inputWord[i]
        result += inputWord[i+1].toUpperCase();
        i++;
    } else {
        result += inputWord[i]
    }
}
console.log(result);

// method below is using array.
// let inputWordArray = inputWord.split("");
// console.log(inputWordArray);

// for (char in inputWordArray) {
//     char = parseInt(char)
//     if (char == 0) {
//         inputWordArray[char] = inputWordArray[char].toUpperCase();
//     } else if (inputWord[char] == " ") {
//         inputWordArray[char + 1] = inputWordArray[char + 1].toUpperCase();
//     }
// }
// inputWordArray = inputWordArray.join("")

// console.log(inputWordArray);


// exercise 7
inputWord = "Nice OnE";

inputWordLength = inputWord.length;
a = inputWordLength - 1;

result = ""

for (let i = 0; i < inputWordLength; i++) {
    result += inputWord[a];
    a--;
}

console.log(result);


// exercise 8
inputWord = "AbbBBeeEdDDffF";

inputWordLength = inputWord.length;
result = "";
for (let i = 0; i < inputWordLength; i++) {
    if (inputWord[i] === inputWord[i].toUpperCase()) {
        result += inputWord[i].toLowerCase();
    }
    else if (inputWord [i] === inputWord[i].toLowerCase()) {
        result += inputWord[i].toUpperCase()
    }
}

console.log(result);
// method bawah ini menggunakan array.
// inputWordArray = inputWord.split("");

// for (char in inputWordArray) {
//     if (inputWordArray[char] === inputWordArray[char].toUpperCase()) {
//         inputWordArray[char] = inputWordArray[char].toLowerCase();
//     } else if (inputWordArray[char] === inputWordArray[char].toLowerCase()) {
//         inputWordArray[char] = inputWordArray[char].toUpperCase();
//     }
// }

// result = inputWordArray.join("");
// console.log(result);


// exercise 9
let number1 = 4
let number2 = 6

let resultName = "";
result = 0;
if (number1 > number2) {
    result = number1;
    resultName = "Number 1, which is";
} else if (number1 < number2) {
    result = number2;
    resultName = "Number 2, which is";
} else {
    result = "both numbers are the same.";
    resultName = "None, ";
}

console.log(`Which is the bigger number? ${resultName} ${result}`);


// exercise 10
number1 = 142;
number2 = 212;
let number3 = 193;

let highestNum = 0;
let middleNum = 0;
let lowestNum = 0;
if (number1 > number2 && number1 > number3) {
    highestNum = number1;
    if (number2 > number3) {
        middleNum = number2;
        lowestNum = number3;
    } else {
        middleNum = number3;
        lowestNum = number2;
    }
} else if (number2 > number1 && number2 > number3) {
    highestNum = number2;
    if (number1 > number3) {
        middleNum = number1;
        lowestNum = number3;
    } else {
        middleNum = number3;
        lowestNum = number1;
    }
} else {
    highestNum = number3;
    if (number1 > number2) {
        middleNum = number1;
        lowestNum = number2;
    } else {
        middleNum = number2;
        lowestNum = number1;
    }
}


console.log(highestNum, middleNum, lowestNum)


// exercise 11
let input = "Test"

let inputType = typeof(input);

result = "";
if (inputType === "string") {
    result = "1";
} else if (inputType === "number") {
    result = "2";
} else {
    result = "3";
}

console.log(`Type number of input is ${result}.`);


// exercise 12
inputWord = "An apple a day keeps the doctor away"
inputLetter = "A"

let formattedInputLetter = inputLetter.toLowerCase();
result = inputWord.toLowerCase();
result = result.replaceAll(formattedInputLetter, "*");

console.log(result);