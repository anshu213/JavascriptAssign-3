//Q1: Q1. Write a JavaScript program to construct the following pattern, using a nested for loop.
// * 
// * * 
// * * *  
// * * * *
// * * * * *

let n = 7;
for (i = 1; i <= n; i++){
    let pattern = "";
    for ( j = 1; j <= i; j++){
         pattern += "*"
    }
    console.log(pattern);
}


//Q2: Q2. Iterate through all numbers from 1 to 45. Print the following:

//    For multiples of 3 print “Fizz”
//    For multiples of 5 print “Buzz”
//    For multiples of 3 and 5 print “FizzBuzz”

for (num = 1; num <= 45; num++){
    if (num % 3 === 0 && num % 5 === 0){
        console.log("FizzBuzz");
    } else if (num % 3 === 0){
        console.log("Fizz");
    } else if (num % 5 === 0){
        console.log("Buzz");
    } else {
        console.log(num);
    }
}


//Q3:  Calculate the sum of all the numbers in the following array
//var numbersArray = [1,13,22,123,49]

var numbersArray = [1, 13, 22, 123, 49];
var sum = 0;
for (let i = 0; i < numbersArray.length; i++) {
    sum += numbersArray[i]; 
}
console.log(sum);

//Q4: .Get the sum of two arrays…actually the sum of all their elements.
// P.S. Each array includes only integer numbers. Output is a number too.

// let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; 
// let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // 

//  Example output: 
//  276 + 351 = 627...............................//................................

let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];

let sum1 = 0;
let sum2 = 0;

//sum for arr_1
for(let i = 0; i < arr_1.length; i++){
    sum1 += arr_1[i];
}
//sum for arr_2
for(let i = 0; i < arr_2.length; i++){
    sum2 += arr_2[i];
}
let totalsum = sum1 + sum2;
console.log(`${sum1} + ${sum2} = ${totalsum}`);


//Q5: Using a for loop output the elements in reverse order...........................

// let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
// Example output: 
// true 3.5  be  false cannot  true 9 what 43 OR each item   on a new line.............................

let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];

// Loop from the last index to the first index
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]); // Print each element on a new line
}





