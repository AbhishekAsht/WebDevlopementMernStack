// // globalobject: object
// // Chrome Browser: window
// // Nodejs: global
// // globalThis

// console.log("Hello World");
// console.log(Math.random());
// // setInterval();
// // new Object();
// //  new String("Rohit");

// // let obj = {
// //     name:"Rohit",
// //     age:12
// // };
// // obj.name

// console.log(globalThis.Math.random());
"use strict"


// a = 10;
// console.log(a);

let obj = {
    name:10
}

Object.freeze(obj);
obj.name = 30;
console.log(obj);


