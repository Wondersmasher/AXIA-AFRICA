// console.log("Hello, Mobile Team! This is Day 001 of the JavaScript Series.");
// alert("Welcome to Day 001 of the JavaScript Series!");

console.log("Hello World!");

// VALUES ARE PIECES OF DATA
// VARIABLES ARE MEANS USED TO STORE VALUES

// let x = 20; // x is the variable and 20 is the value

// let y = 10;
// const z = x + y; // 100 + 10

// console.log("z: ", z); // 110

// DECLARING VARIABLES

// var , let , const
// let changes
// const does not change

let x = 20; // x is the variable and 20 is the value

let y = 10;
x = 100; // x is reassigned
x = 100.34; // x is reassigned
const z = x + y; // 100 + 10

console.log("z: ", z); // 110

// DATA TYPES
// PRIMITIVE DATA TYPES

/* 
1. NUMBER = number, floats, decimals... 
2. STRING 
3. BOOLEAN
4. UNDEFINED
5. NULL
6. BIGINT
7. SYMBOL
*/

// NUMBER
const num = 20;

// STRING
const str1 = "this is a string";
const str2 = "this is another way of writing strings";
const tempLit = `this is another one ${num}`;

// BOOLEAN can either be true or false

const t = true;
const f = false;
const t2 = str1 === "test";

// UNDEFINED values taken by a variable but not yet assigned or defined

let undef;
console.log("undef", undef);

// NULL similar to undefined
let nu = null;

// BIGINT holds values that are larger for numbers
