import { imageGridCards } from "../Utils/foodData"
import Foodcard from "./FoodCard"

export default function FoodOption(){

    return (
        <>
          <div className="w-[80%] container mx-auto flex flex-wrap mt-20 gap-3">
            {
                imageGridCards.map((foodData)=><Foodcard key={foodData.id} foodData={foodData}></Foodcard>)
            }
          </div>
        </>
    )
}