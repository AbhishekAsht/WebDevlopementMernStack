const {sum,sub} = require("./second")
// require("./third")
// require("/fourth")
// require("./fifth")


sum(3,4);
sub(7,8);
console.log("Hello I am first");




// CJS: Common JS module
//  I need second.js code in my first.js file



// (function (){
//     console.log("Hello ji I am second");

//     function sum(a,b){
//     console.log(a+b);
//     }

//    sum(4,3);
// })();