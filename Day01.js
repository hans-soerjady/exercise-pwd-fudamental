// write a code to find area of rectangle
// INPUT
// rumus nya width * length
let width = 5;
let length = 10;

// PROCESS
let rectangleArea = width * length;

// OUTPUT
console.log("The area is", rectangleArea);


// write a code to find perimeter of rectangle
// INPUT
// rumus nya width + length * 2
width = 20;
length = 30;

// PROCESS
let rectanglePerimeter = (width + length) * 2;

// OUTPUT
console.log("The perimeter is", rectanglePerimeter);

// write a code to find diameter, circumference, and area of a circle
// INPUT
// rumus nya diameter = 2 * r, circumference = 2 * PI * r, area = PI * r * r
let r = 14;
let PI = Math.PI;

// PROCESS
let diameter = 2 * r;
let circumference = 2 * PI * r;
let area = PI * (r * r);

// OUTPUT
console.log("The diameter is", diameter);
console.log("The circumference is", circumference);
console.log("The area is", area);

// write a code to find angles of a triangle if two angles are given
// INPUT
// angle 1 + angle 2 + angle 3 = 180
let angle1 = 65;
let angle2 = 70;

// PROCESS
let angle3 = 180 - angle1 - angle2;

// OUTPUT
console.log("The angle is", angle3);


// write a code to get difference between dates in days
// INPUT
let date1 = new Date("2023/5/27");
let date2 = new Date("2023/6/24");
console.log(date1);
console.log(date2);

// PROCESS
let difference = Math.abs((date1 - date2) / 1000 / 60 / 60 / 24);

// OUTPUT
console.log("The difference between dates is", difference, "days");


// write a code to convert days to years, months, days (1 year = 365, 1 month = 30 days)
// INPUT
let totalDays = 450;

// PROCESS
let years = Math.floor(totalDays / 365);
let months = Math.floor((totalDays % 365) / 30);
let days = (totalDays % 365) % 30;

// OUTPUT
console.log(`There is ${years} years, ${months} months, and ${days} days in ${totalDays} days`);