import React, { useState, useMemo, useCallback, useEffect } from "react";
import ReactDOM from "react-dom/client"
import Second from "./second";
import GlobalContext from "./Global";
import Fifth from "./fifth";



function App(){

  const [count,setCount] = useState(10);
  console.log(GlobalContext);

  return (
    <>
   <Fifth></Fifth>
    <GlobalContext.Provider value={{count,setCount}}>
    <h1>Hello Coder Army {count}</h1>
    <Second />
    </GlobalContext.Provider>
    </>
  )
}


// First create a Create Context
// Provid data ko uske andar: Descendent
// Consume the context





ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);


