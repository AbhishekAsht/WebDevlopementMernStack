import React from "react";
import ReactDOM from "react-dom/client"


// Header
// Body
// Footer

function Card(props){
    return (
        <div style={{border:"2px solid black", padding:"2px"}}>
            <img src="https://printify.com/wp-content/uploads/2022/07/Custom-T-Shirts-Womens-T-Shirts.jpg" height="200px" width="200px" />
            <div style={{textAlign:"center"}}>
                <h2>{props.cloth}</h2>
                <h1>{props.offer}</h1>
                <h2>Shop Now</h2>
            </div>
        </div>
    )
}

const arr = [{cloth:"Tshirt", Offer:"20-40%Off"},{cloth:"Pant", Offer:"30-50%Off"},{cloth:"Skirt", Offer:"10-20%Off"},{cloth:"Kurta", Offer:"30-60%Off"},{cloth:"Patloon", Offer:"11-40%Off"},{cloth:"Shoes", Offer:"40-60%Off"},{cloth:"Shirt", Offer:"10-20%Off"}]



function App(){
  return(
    // Header
    // Body
    <div style={{display:"flex", gap:"10px" , flexWrap:"wrap"}}>
        {/* <Card cloth="T-shirt" offer="20-80%off" />
        <Card cloth="Jeans" offer="30-80%off"/>
        <Card cloth="pant" offer="50-60%off"/>
        <Card cloth="Kurta" offer="30-80%off"/>
        <Card cloth="Pajama" offer="10-80%off" />
        <Card cloth="T-shirt" offer="20-80%off"/>
        <Card cloth="T-shirt" offer="20-80%off"/>
        <Card cloth="T-shirt" offer="20-80%off"/> */}

        {
          arr.map((value,index)=> <Card key={index} cloth={value.cloth} offer={value.Offer}/>)   
        }
       
    </div>
    // footer
  )
}

// [<Card/>,<Card/>,<Card/>,<Card/>,<Card/>,<Card/>]


const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App/>);
