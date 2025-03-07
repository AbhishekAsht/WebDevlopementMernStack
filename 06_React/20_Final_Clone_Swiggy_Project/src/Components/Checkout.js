import { useSelector } from "react-redux"

export default function Checkout(){
     
    const items = useSelector(state=>state.cartslice.items);

    return(
        <div>
          {
            items.map(value=> <div className="text-5xl">{value.name}</div>)
          }
        </div>
    )
}