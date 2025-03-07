// const header = document.createElement('h1');
// header.innerText = "Hello Coder Army";

// document.getElementById('root').append(header);
// console.dir(document.getElementById('root'));

// const header = React.createElement('h1',{},"Hello Coder Army");

// const React = {
//     createElement: function(heading,styles,children){
//         const element  = document.createElement(heading);
//         if(typeof children === 'object'){
//             for(let val of children)
//                 element.appendChild(val);
//         }
//         else
//         element.innerText = children;

//         for(let key in styles){
//             element.style[key] = styles[key];
//         }
//         return element;
//     }
// }

// const ReactDOM = {
//     render: function(root,element){
//         root.append(element);
//     }
// }


// const element  = React.createElement("h1",{fontSize:"30px",color:"blue",backgroundColor:"pink"},"Hello Coder Army");
// const element2 = React.createElement("h2",{fontSize:"20px",color:"blue",backgroundColor:"green"},"I am best");

// const li1 = React.createElement("li",{},"chai");
// const li2 = React.createElement("li",{},"biscuit");
// const li3 = React.createElement("li",{},"samosa");


// const element3 = React.createElement('ul',{fontSize:"30px",color:"blue",backgroundColor:"pink"},[li1,li2,li3]);


// ReactDOM.render(document.getElementById('root'),element);
// ReactDOM.render(document.getElementById('root'),element2);
// ReactDOM.render(document.getElementById('root'),element3);

// // document.getElementById('root').append(element);
// // document.getElementById('root').append(element2);



const element  = React.createElement("h1",{id:"money", class:"Rohit" , style:{fontSize:"20px",backgroundColor:"blue",color:"red"}},"Hello Coder Army");

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(element);