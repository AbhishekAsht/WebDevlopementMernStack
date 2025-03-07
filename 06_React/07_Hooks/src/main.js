import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client"
import Colorful from "./Component/Colorful";

// Background color changer
// color = black
// re-render: Call the function again
// setColor("red")
//  useEffect


// setCount(3)

function Main(){
   
    const [count,setCount] = useState(0);

   return (
    <>
      <div className="counter">
      <h1>Counter is: {count}</h1>
      <button onClick={()=>{setCount(count+1)}} style={{backgroundColor:"blue"}}>Increment</button>
      </div>
      
      <Colorful name={count}></Colorful>
   </>
   ) 


}




ReactDOM.createRoot(document.getElementById('root')).render(<Main></Main>);