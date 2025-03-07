import { useState } from "react";
import FoodCart from "./FoodCart";

const foodItems = [
    {id:1, food:'Pizza', Price:"200"},
    {id:2, food:'Pasta', Price:"300"},
    {id:3, food:'Momos', Price:"200"},
    {id:4, food:'Kebab', Price:"2000"},
    {id:5, food:'Chicken', Price:"1200"},
    {id:6, food:'Panner', Price:"2800"},
    {id:7, food:'Burger', Price:"2100"},
    {id:8, food:'Poha', Price:"4200"},
    {id:9, food:'Rice', Price:"100"},
    {id:10, food:'Daal', Price:"300"},
];



export default function Card(){
    
   

    return(
        <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap", gap:"20px"}}>
            {foodItems.map((value)=>{
                return (
                    <div key={value.id}>
                        <FoodCart value={value}></FoodCart>
                    </div>
                )
            })}
        </div>
    )

}

