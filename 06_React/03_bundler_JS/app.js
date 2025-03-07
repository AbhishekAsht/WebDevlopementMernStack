import React from "react";
import ReactDOM from "react-dom/client"

// const element = React.createElement("h1",{id:"first", className:"Rahul", style:{backgroundColor:"blue", fontSize:"30px", color:"pink"}},"Hello Coder Army");
// const element2 = React.createElement("h2",{id:"second", className:"Rahul", style:{backgroundColor:"black", fontSize:"30px", color:"pink"}},"Maja aaya muje");
// console.log(element);
//                   React                        Render
// React.createElement() => react element(JSObject) => HTML Element

// React.createElement('h1',{},"Hello Coder Army");
// const newElement = <h1>Hello Coder Army</h1>
//     babel:                   React                      Render
// JSX => React.createElement() => react element(JSObject) => HTML Element

// JSX: JS ke expression
const names = "Rohit";
const obj = {
    age:23,
    salary:60
}

const obj2 = {
    backgroundColor:"black",
    color:"pink",
    fontSize:"30px"
}

// React ELement
const newElement = (
    <>
         <h1 id="first" className="second" >Hello Coder Army {names}</h1>
         <h2 style={{backgroundColor:"black",color:"white"}}>Maja aaya muje {obj.age}</h2>
    </>
)


// React Component
// function Based Component

function greet(){
    return <h1>Aur bhai kaisa hai</h1>
};

const meet = ()=>{
    return <h2>Mera sab achaa hai</h2>
}


const newElement2 = greet();
const newElement3 = meet();

const newElement4 = <>{greet()} {meet()}</>

const Reactroot = ReactDOM.createRoot(document.getElementById('root'));

Reactroot.render(newElement4);

// JSX: Javascript XML: HTML code direct js ke andar likh sakte ho






// version: 19.0.0

// function sum(a,b,c){
//     return a+b+c;
// }

// function subtract(a,b){
//     return a-b;
// }

// sum(2,3,0);





