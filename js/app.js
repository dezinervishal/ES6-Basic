//console.log('Hello');

// Let and Const

// Let = let is similar to var but let has scope. let is only accessible in the block level it is defined.

// First Example

// if (true) {
//     let a = 40;
//     console.log("here is the result for block of code", a); //40
// }
// console.log(a); // undefined


// 562486193

// Second Example

// let a = 50;
// let b = 100;
// if (true) {
//  let a = 60;
//  var c = 10;
//  console.log("A/C result is ",a/c); // 6
//  console.log("B/C result is ",b/c); // 10
// }
// console.log("var value is ",c); // 10
// console.log("value of let is ",a); // 50


// Const = Const is used to assign a constant value to the variable. And the value cannot be changed. Its fixed.

// const a = 50;
// // a = 60; // shows error. You cannot change the value of const.
// const b = "Constant variable";
// // b = "Assigning new value"; // shows error.

// console.log(a);
// console.log(b);

// const LANGUAGES = ['Js', 'Ruby', 'Python', 'Go'];
// // LANGUAGES = "Javascript"; // shows error. 
// LANGUAGES.push('Java'); // Works fine.
// LANGUAGES.pop();
// console.table(LANGUAGES); // ['Js', 'Ruby', 'Python', 'Go', 'Java']


// Old Function 
function oldOne() {
	console.log("Hello World!");
}

oldOne();


// New Function
var newOne = () =>{
	console.log("Hello ES6 World! ");
}

newOne();

// Example with parameter
var newOnewithParameter = (a, b) =>{
	console.log(a+b); // value which assign in parameter
}

newOnewithParameter(50, 60);

// Default Parameters when pass one parameter
let defParam = (a, b = 10) => {
	return a + b;
}
defParam(30);
console.log("Value of default Parameter", defParam(30))

// Default Parameters when pass two parameters
let defParm = (a, b = 10) => {
	return a + b;
}
console.log("Value of two Parameter", defParm(30, 50))


// Default Parameters when pass two parameters
let notWorking = (a = 10, b) => {
	return a + b;
}
notWorking(30);
console.log("Value of Parameter", notWorking(30))


// For of loop

let arr = [2,3,4,1];
for (let value of arr) {
	console.log(value);
}


// Another Example

// let string = "Javascript";
// for(let char of string ){
// 	console.log(char)
// }



// Spread attributes


let SumElements = (arr) =>{
	console.log(arr); // [10, 20, 40, 60, 90]

	let sum = 0;
	for (let element of arr){
		sum += element;
	}
	console.log(sum); // 220
}

SumElements([10, 20, 40, 60, 90, 100]);

// SumElements(arry); 

let sumElement = (...arry) => {
	console.log(arry);

	let sums = 0;
	for(let elements of arry){
		sums += elements;
	}
	console.log(sums);
}

sumElement(10, 20, 40, 60, 90); // Note we are not passing array here. Instead we are passing the elements as arguments. 


let ary = [10, 20, 60];
Math.max(...ary);
console.log(ary);


// Maps

var NewMap = new Map();
NewMap.set('Name', 'John');
NewMap.set('id', '248582');
NewMap.set('interest', ['js', 'ruby', 'python']);

NewMap.get('name');
NewMap.get('id');
NewMap.get('interest');




