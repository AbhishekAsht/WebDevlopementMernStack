// <li>TS</li>

// Created an element
// function attach(content){
// const element = document.createElement('li');
// element.innerHTML = content;

// const element2 = document.createElement('li');
// element2.innerHTML = content+"V2.0";

// const parent = document.getElementById("root");
// // parent.appendChild(element);
// // parent.append(element,element2);
// };

// attach("TS");
// attach("React");
// attach("Node");


// *****************TextNode*******************

// const element = document.createTextNode("Hello Coder Army");

// const parent = document.getElementById("root");
// parent.append(element);


// *****************Attribute Node*******************

// const element = document.createAttribute("id");
// element.value = "first";


// access to first list
// const curr_list = document.querySelector('li');
// curr_list.setAttributeNode(element);


// access to second list

// const parent = document.getElementById("root");
// parent.children[1].setAttributeNode(element);



// access attribute of a element

// const element  = document.getElementById("root");
// // console.log(element.getAttribute("style"));
// element.setAttribute("custom", "20");
// element.setAttribute("class", "Roahn");
// element.removeAttribute("custom");




// ***********Add nodes to the DOM************


// const parent = document.getElementById("root");
// array

// const element = document.createElement('li');
// element.innerHTML = "TS";
// data


// parent.prepend(element);
// parent.append(element);

// const child2 = parent.children[1];
// // parent.insertBefore(element,child2);

// parent.replaceChild(element,child2);



// const parent = document.getElementById("root");
// // parent.innerHTML += "<li>TS</li>";

// const element = document.createElement("div");
// element.innerHTML = "Hello Coder Army";

// // parent.insertAdjacentElement("beforebegin", element);
// parent.insertAdjacentElement("afterend", element);



// Delete node or element

const element = document.querySelector('li');
element.remove();







