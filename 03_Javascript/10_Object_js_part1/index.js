// how to create object
// const obj = {
//    0:20,
//    1:50,
//    2:70, 
//    name:"rohit", 
//    account_balance:420,
//    gender: "Male",
//    age: 30,
//    "account number": 231230,
//    undefined: 30,
//    null:"mohan",
// }

// console.log(obj["undefined"]);
// console.log(obj["null"]);


// console.log(obj.gender);
// console.log(obj["account_balance"]);
// console.log(obj["account number"]);
// console.log(obj['0']);
// console.log(obj[1]);
// console.log(obj[2]);
// console.log(obj);



// const arr = [20,50,70];
// console.log(arr);

//  second method to create
// const person = new Object();
// console.log(person);

// // property add
// person.name = "Rohit";
// person.age = 80;
// person.gender = "Male";
// console.log(person);
// // delete
// delete person.age;
// console.log(person);
// // Modify or update
// person.name = "Mohit";
// console.log(person);


// third method 

// class People{
//     constructor(na, ag, gen){
//         this.name = na;
//         this.age = ag;
//         this.gender = gen;
//     }
// }



// let per1 = new People("Rohit", 20, "Male");
// let per2 = new People("Mohit", 30, "Female")
// let per3 = new People("Aman", 21, "Male")
// console.log(per1, per2);


let obj = {
    name: "rohit",
    age:30,
    account_balance:420,
    gender:"male"
};

//  keys , values
const arr = Object.values(obj);
// console.log(arr);

// keys; value
const arr2 = Object.entries(obj);
// console.log(arr2);

// assign use case
const obj1 = {a:1,b:2};
const obj2 = {c:3,d:4};
const obj4= {e:5,f:6};


const obj3 = Object.assign({},obj1,obj2,obj4);

// console.log(obj1.a);
const obj5 = {...obj1,...obj2,...obj4};
console.log(obj5);








