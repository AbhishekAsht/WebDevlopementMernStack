import React, { useState } from "react";
import ReactDOM from "react-dom/client"
import Add from "./Add";



function App(){ 
     
    const [language, setLanguage] = useState(["TS","JS","Java"])

    function handleClick(){
        setLanguage(["C++",...language]);
    }


    const VDom = <h1>Hello Coder Army</h1>

    const RDom = document.createElement('h1');
    RDom.innerText = "Hello Coder Army";


    console.log(VDom);
    console.dir(RDom);



    

    return(
        <>
        <div style={{display:"flex", justifyContent:"center", gap:"20px" , marginTop:"50px"}}>
            {
                language.map((value,index)=> <Add key={value} value={value}></Add>)
            }
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <button onClick={handleClick}>Add language</button>
        </>
    )

}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);


