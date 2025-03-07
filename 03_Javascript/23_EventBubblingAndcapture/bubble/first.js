const grandParent = document.getElementById('grandParent');
const parent = document.getElementById('parent')
const child = document.getElementById('child')

// event bubbling and event capturing

child.addEventListener('click', (event)=>{
    console.log("child Clicked"); 
    // event.stopPropagation();
    // console.log(event.target);
},false)



parent.addEventListener('click', (event)=>{
    console.log("parent Clicked");
    event.stopPropagation();
    // console.log(event.target);
    // console.log(event.currentTarget);
},false)

grandParent.addEventListener('click', (event)=>{
    console.log("grandParent Clicked");
    // console.log(event.currentTarget);
},false)

// addEventListener(first_event, callback, capture);


// event delegation