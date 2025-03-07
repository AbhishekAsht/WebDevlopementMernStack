import GlobalContext from "./Global"
import { useContext } from "react"

export default function Third(){
    
        // const data = useContext(GlobalContext);
        // console.log(GlobalContext);

        const {count,setCount} = useContext(GlobalContext);

    return (
        <>
         <h2>I am printing {count}</h2>
         <button onClick={()=>setCount(count+5)}>Increment</button>
        </>

    )
}