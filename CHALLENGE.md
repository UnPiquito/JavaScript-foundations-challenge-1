# JavaScript Basics

Answer following questions in this file.

## What is JavaScript?

JavaScript is a high-level programming language primarily used for adding interactivity and functionality to website, oriented to objects, it is commonly used in webs and its a very important part of the functuionality of the web

## About values

### What is a primitive value?

That are values that doesn't pertain to a object or have a y method

### Which are primitive values? Explain them with at least one example for primitive.

String:

let name: "Paco";

Number:

let age: "46";

Boolean:

let divorced = true; (3 times)

Symbol:

const symbol = Symbol("foo");

Biglnt:

const alsoHuge = BigInt(9007199254740991);

## About variables

### What is a variable in JS?

A variable in javascript its a way to store data in a named storage that you can also use it to print it or to use it in some method or operation

### How many ways can we define a variable in JS? Is there any not recommended way?

There are 3 ways:

const

let

var: That its not recommended

### Which are the most used var naming conventions in JS?

Snake Case: 

Snake case uses _ to separate the words

Camel Case: 

In that convention, the first word is lowercase and the first letter of the rest of words are in capitalcase

Pascal Case: 

Its like Camel Case but in that method you also write the first letter in capitalcase

Kebab Case: 

Like Snake Case but using _ instead -

## About operators

### Which are the main comparison operators in JS? Explain them with at least one example for primitive.

Equality (==) and inequality (!=):

(num1 == num2); true
(num1 != num2); false

Strict equality (===) and strict inequality (!==), that operator its more restrictive, the value needs to be the same, does not accept a similar one

(num1 === num2); true
(num1 !== num2); false

Greater than (>) and less than (<):

(num1 < num2); num2 more big than num1
(num1 > num2); num1 more big than num2

Greater than or equal To (>=) and less Than or equal To (<=):

(num1 <= num2); num2 more big or equal than num1
(num1 >= num2); num1 more big or equal than num2

### Which are the main logical operators in JS? Explain them with at least one example for primitive.

Logical AND (&&):

if (num1 && num2 == 4) If num1 and num2 are both 4, true

Logical OR (||):

if (num1 && num2 == 4) If num1 or num2 are 4, true

Logical NOT (!):

That operator turns a true variable into false

let call = true;

!call = false

