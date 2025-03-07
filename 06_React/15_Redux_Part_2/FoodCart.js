import { useState } from "react";
import { addItems, removeItems } from "./slice2";
import {useDispatch} from "react-redux"

// Add: inCart= False
//  Remove: inCart = True



export default function FoodCart({value}){
     
     const [inCart, setInCart] = useState(false);
      const dispatch = useDispatch();

        function handleClick(){
            if(inCart){
                dispatch(removeItems())
                setInCart(false);
            }
            else
            {
                dispatch(addItems());
                setInCart(true);
            }
        }


        return (
            <>
              <h1>{value.food}</h1>
              <h2>{value.Price}</h2>
              <button onClick={handleClick}>{inCart?"Remove":"Add"}</button>
            </>
        )


}

