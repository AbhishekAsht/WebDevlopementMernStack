// let arr = [10,20,10,30,10]
// set : unique value
// const set1 = new Set([10,20,30,40,10,30]);
// console.log(typeof set1);

// const set1 = new Set();
// set1.add(4);
// set1.add(6);
// set1.add("Rohit");
// set1.add(30);

// // delete
// set1.delete(6);

// console.log(set1.size);

// ig:id

// const user_id = new Set(["rohit_negi9","Mohi_91","ravi.93","chavi_90","sumit._90"]);
// let new_user = "rohit_negi9";
// console.log(user_id.has(new_user));

// user_id.clear();
// console.log(user_id);


// let arr = [10,30,20,10,40,50,30];
// const set1 = new Set(arr);
// arr = [...set1];
// console.log(arr);

let set1 = new Set([10,20,30,40,50]);
let set2 = new Set([10,20,70,40]);

// let set3 = new Set([...set1,...set2]);
// console.log(set3);

// intersection
// filter: array
// const result =  new Set([...set1].filter((num)=>set2.has(num)));

// console.log(result)

//  Iterate over set
// for of: iterator
// for(let value of set1)
//     console.log(value);
// for each 
set1.forEach((value)=>console.log(value));


