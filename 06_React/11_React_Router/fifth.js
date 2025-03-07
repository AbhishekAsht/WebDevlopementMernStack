import GlobalContext from "./Global"
import { useContext } from "react"

export default function Fifth(){
    
    const data = useContext(GlobalContext);

    return(
        <>Mein hu Don {data}</>
    )
}