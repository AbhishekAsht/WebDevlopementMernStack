// for in loop : Isko array ke sath nahi lete
//  arr is an object
// 0: 10,
// 1:20,
// 2:40,
// 3:12,
// 4:30,
// name:"rohit",
// age:20,

const arr = [10,20,40,12,30];
arr.name = "Rohit";
arr.age = 20;
// for(let index=0; index<arr.length;index++)
//     console.log(index , arr[index]);
for(let key in arr){
    console.log(key);
}


//  defineProperty
// defineProperties
