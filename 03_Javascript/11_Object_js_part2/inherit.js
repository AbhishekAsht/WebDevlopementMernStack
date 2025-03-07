let user1 = {
    name: "Rohit",
    age: 20,
}



let user2 = {
    amount:20,
    money:50
}

user2.__proto__ = user1;

let arr = [10,20,30,40];
console.log(arr.__proto__== Array.prototype)
console.log(arr.__proto__.__proto__== Object.prototype)
console.log(arr.__proto__.__proto__.__proto__== null)
