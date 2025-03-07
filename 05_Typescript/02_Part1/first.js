"use strict";
// interface Person{
//     name:string,
//     age:number,
//     gender:string,
//     aadhar?:number
// }
// const obj:Person = {
//     name:"Rohit",
//     age:20,
//     gender:"Male",  
// }
// // Latest example
// interface customer {
//     name:string,
//     age:number,
//     balance:number
// }
// const obj2: Readonly<customer> = {
//     name:"Rohit",
//     balance:210,
//     age:20
// }
// // Partial: All property becomes optional
// // Required: ALl property should be filled
// // Readonly: The property can only be read, write option is not available
// // array of Objects
// interface peopele {name:string,age:number};
// interface manager {salary:number,id:string}
// const arr: (peopele | manager)[] = [{name:"Rohit",age:20},{name:"Mohit",age:18}, {salary:20,id:"2321"}]
// // function in TS
// function greet(a:number):number{
//     console.log(a);
//     return a+5;
// }
// console.log(greet(10));
// function meet(msg:string,val:number):void{
//     console.log(msg,val);
// }
// meet("Anshika Verma", 4);
// // default parameter
// function neet(msg:string = "Jit"){
//     console.log(msg);
// }
// neet();
// neet("Bittu");
// // Optional Parameter
// function GATE(person?:string){
//     console.log(person||"Mohan");
// }
// GATE("Rohit");
// GATE();
// // arrow function
// const sum = (a:number,b:number):number=>{
//     return a+b;
// }
// console.log(sum(3,4));
// // callback function
// type chill = (amount:number)=>void;
// const sqaureroot = (val:number)=>{
//    return val*val;
// }
// function placeOrder(order:number,callback: chill):void{
//     const amount:number = order+10;
//     callback(amount);
// }
// placeOrder(10,(amount)=>{
//     console.log(amount);
// })
// // Rest Parameter
// function total(...arr:number[]){
//    let ans:number = 0 ;
//    arr.forEach((val:number)=>ans = ans+val);
//    console.log(ans);    
// }
// total(2,3,1,4,123,1,12,10);
// // extend keyword
// interface human{
//     name:string,
//     age:number
// };
// interface Teacher extends human{
//    salary:string,
//    id:number
// }
// interface BankEmployee extends human{
//     salary: string,
//     position: string
// }
// const obj8:Teacher = {
//     name :"Rohit",
//     age: 20,
//     salary:"chillar",
//     id:123
// }
