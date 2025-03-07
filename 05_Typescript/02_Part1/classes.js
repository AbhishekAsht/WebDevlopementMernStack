"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`hi ${this.name}`);
    }
}
// Blueprint of an object
const obj1 = new Person("Rohit", 20);
const obj2 = new Person("Nitin", 11);
console.log(obj1);
console.log(obj2);
console.log(obj1.name);
obj1.greet();
// public private protected
class Customer {
    constructor(name, age, balance) {
        this.name = name;
        this.age = age;
        this.balance = balance;
    }
    meet() {
        this.age = this.age + 10;
        return this.age;
    }
}
const P1 = new Customer("Deepak", 20, 420);
console.log(P1.name);
console.log(P1.meet());
// console.log(P1.balance);
class Employee extends Customer {
    constructor(salary, name, age, balance) {
        super(name, age, balance);
        this.salary = salary;
    }
    greet() {
        console.log(this.balance);
    }
    meet() {
        console.log("Hello Coder armu");
        return 10;
    }
}
const E1 = new Employee(420, "Rohit", 20, 320);
console.log(E1.meet());
console.log(E1.salary);
// Generic: Template
function value(a) {
    return a;
}
console.log(value(10));
console.log(value("Rohit"));
console.log(value([10, 11, 12, 13, 14]));
console.log(value(true));
