DOM: Document object Model

The DOM (Document Object Model) is a way to represent a web page so that programs (like JavaScript) can interact with it.

* A browser takes your HTML document and turns it into the DOM.

With the object model, JavaScript gets all the power it needs to create dynamic HTML:

1: JavaScript can change all the HTML elements in the page
2: JavaScript can change all the HTML attributes in the page
3: JavaScript can change all the CSS styles in the page
4: JavaScript can remove existing HTML elements and attributes
5: JavaScript can add new HTML elements and attributes
6: JavaScript can react to all existing HTML events in the page
7: JavaScript can create new HTML events in the page




*******************************************************************



1: Accessing Element:


a: Accessing by ID:
   Method: document.getElementById(id)
   Description: Retrieves a single element with the specified id attribute.

b: Accessing by Class Name:
   Method: document.getElementsByClassName(className)
   Description: Returns a live HTMLCollection of all elements with the 
   specified class name.

c: Accessing by CSS Selectors:
   i: Single Element:
      Method: document.querySelector(selector)
      Description: Returns the first element matching the specified CSS 
      selector.
    
    ii: Multiple Elements:
        Method: document.querySelectorAll(selector)
        Description: Returns a static NodeList of all elements matching the 
        specified CSS selector.
    
d: Accessing by Tag Name
   Method: document.getElementsByTagName(tagName)
   Description: Returns a live HTMLCollection of all elements with the 
   specified tag name (e.g., div, p, a).

e: Accessing Using Relationships
   i: Parent Node:
   Method: element.parentNode or element.parentElement
   Description: Access the immediate parent of an element.

   ii: Child Nodes:
   Method: element.childNodes (includes text nodes) or element.children 
   (only element nodes)
   Description: Access all child nodes of an element.

   iii: First and Last Child:
   Methods: element.firstChild, element.lastChild, 
   element.firstElementChild, element.lastElementChild

   iV: Sibling Nodes:
   Methods: element.nextSibling, element.previousSibling
   Element Siblings: element.nextElementSibling, 
   element.previousElementSibling




1.innerHTML 
2.textContent
3.innerText 

