import {useSelector} from "react-redux"

export default function Header(){
    
   const count =  useSelector((state)=>state.slice2.count)

    return (
        <div style={{display:"flex", justifyContent:"center", gap:"30px"}}>
        <h1>Swiggy</h1>
        <h2>Cart: ({count})</h2>
        </div>
    )
}