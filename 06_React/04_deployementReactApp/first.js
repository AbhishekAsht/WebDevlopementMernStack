import React from "react";
import ReactDOM from "react-dom/client"

const element1 = <h1>Hello Coder Army</h1>
// JSX: JS Expression (Output laake de: Result produce)
// JSX: Statement (unko aap nahi likh sakte)

// props = {
//     name:"Rohit Negi",
//     age:"23"
// }

// Result produce hona chaiye: string , number, array
function Greet(props) {
    console.log(props);
    return <h2>Ram Ram Bhaiya ji {props.name} {props.age}</h2>
};

const element2 = <Greet name="Rohit Negi" age="23"/>

const element3 = <h1 id="first" className="Second"></h1>

// <Greet/>: Function call
// <div> <h1> <ul>
const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(element2);
