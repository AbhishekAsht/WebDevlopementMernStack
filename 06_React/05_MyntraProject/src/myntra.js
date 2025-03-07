import React from "react";
import ReactDOM from "react-dom/client"
import Card from "./component/Card";
import Footer from "./component/Footer";
import Header from "./component/Header";
import arr from "./utils/dummy"
import {greet as goa, meet as roa} from "./utils/dummy"


function App(){
  return(<>
    <Header/>
    <div className="middle" style={{display:"flex", gap:"10px" , flexWrap:"wrap"}}>
        {
          arr.map((value,index)=> <Card key={index} cloth={value.cloth} offer={value.Offer}/>)   
        }
       
    </div>
    <Footer/>
    </>
  )
}




const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App/>);
