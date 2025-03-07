// Create element through JS


// const header1 = document.createElement('h1');
// header1.innerText = "Hello Coder Army";
// header1.style.backgroundColor = "blue";
// header1.style.fontSize = "30px";
// header1.style.color = "white";


// const header2 = document.createElement('h2');
// header2.innerText = "Kaise ho aap sab log";
// header2.style.backgroundColor = "black";
// header2.style.fontSize = "25px";
// header2.style.color = "white";



// const root = document.getElementById('root');
// root.append(header1);
// root.append(header2);

// React: Object
// ReactDOM: Object
// const React = {
//     createElement: function(tag,styles,children){
//         const element = document.createElement(tag);
         
//         if(typeof children === 'object'){
//            for(let val of children)
//             element.append(val);
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
//     render: function(element,root){
//         root.append(element);
//     }
// }


// const header1 = React.createElement('h1',{fontSize:"30px", backgroundColor:"blue", color:"white"},"Hello Coder Army");
// const header2 = React.createElement('h2',{fontSize:"25px", backgroundColor:"black", color:"white"},"Kaise ho aap sab log");

// const li1 = React.createElement('li',{},"HTML");
// const li2 = React.createElement('li',{},"CSS");
// const li3 = React.createElement('li',{},"JS");

// const Ul = React.createElement('ul',{fontSize:"30px", backgroundColor:"blue", color:"white"}, [li1,li2,li3] )


// // unordered list
// // HTML 
// // CSS
// // JS




// ReactDOM.render(header1,document.getElementById('root'));
// ReactDOM.render(header2,document.getElementById('root'));
// ReactDOM.render(Ul,document.getElementById('root'));







