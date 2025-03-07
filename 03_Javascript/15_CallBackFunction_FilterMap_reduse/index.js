// let user= {
//     name:"rohit",
//     age:30
// }


// Object.defineProperty(user, 'name',{
//     writable:false,
// });

// user.name = "mohit";
// // Hacking se bachne ke liye humeine ye sab kiya hai

// console.log(Object.getOwnPropertyDescriptor(user, "name"))


//  for of loop
// const arr = [10,20,11,18,13];
// for(let value of arr)
// {
//     console.log(value);
// }

// let str = "Rohit is Good Boy";
// for(let value of str)
// {
//     console.log(value);
// }

// don't use for of loop in object
// const obj = {
//     name:"Chavvi",
//     age:22,
//     gender:"female"
// };

// console.log(obj);

// for(let value of obj){
//     console.log(value);
// }

// for(let value of Object.keys(obj))
//     console.log(value, obj[value]);


// forEach

// let arr = [10,20,30,40,50];
//  single argument: number
//  second index
//  third: array ko bhi pass

// arr.forEach(CallBackFunction)

// const greet = function (num){
//     console.log(num);
// }

// arr.forEach(function (num){
//     console.log(num);
// });

// arr.forEach((num,index,a) => {
//     a[index] = num*2;
// });

// console.log(arr);


// filter
// let arr = [10,22,33,41,50];
// const result = arr.filter((num)=> num%2==0);

// console.log(result);

// const students = [
//     {name:"Rohan", age:22, marks:70},
//     {name:"Mohan", age:24, marks:80},
//     {name:"Darshan", age:28, marks:30},
//     {name:"Mohit", age:32, marks:40},
//     {name:"Shadik", age:12, marks:90},
// ]

// const result = students.filter((value)=> value.marks >50);
// const result = students.filter(({marks})=> marks >50);

// console.log(result);

// map

const arr = [1,2,4,5]
// const re = arr.forEach((num)=>{
//     return num;
// }) wrong, no return

console.log(re)
// const result = arr.map((num,index)=> num*index);

// console.log(result);

// const arr = [1,2,3,4,5,6];

// const result = arr.filter((num)=> num%2==0).map((num)=> num*num).map((num)=>num/2);
// console.log(result);

//  Reduce , iske discussion karenge....


