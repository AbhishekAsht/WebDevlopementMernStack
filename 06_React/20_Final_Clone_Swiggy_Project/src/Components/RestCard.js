import { Link } from "react-router"

export default function RestCard({restInfo}){
   
    
    return (
        <Link to={"/city/delhi/"+restInfo?.info?.id}>
        <div className="max-w-[280px] mb-2 transform transition duration-200 hover:scale-95">
        <img className="w-70 h-45 object-cover rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restInfo?.info?.cloudinaryImageId}></img>
        <div className="w-[95%] mx-auto mt-3">
        <div className="font-bold text-xl ">{restInfo?.info?.name}</div>
        <div className="flex items-center gap-2">
        <svg
        className="w-6 h-6 fill-green-600"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        >
       <path d="M9.049 2.927c.3-.645 1.605-.645 1.905 0l1.525 3.78 4.173.605c.738.107 1.035 1.012.5 1.534l-3.016 2.942.712 4.15c.127.74-.651 1.299-1.305.95l-3.726-1.962-3.726 1.962c-.654.35-1.432-.21-1.305-.95l.712-4.15-3.016-2.942c-.535-.522-.238-1.427.5-1.534l4.173-.605L9.049 2.927z" />
       </svg>
        <span className="text-lg">{restInfo?.info?.avgRating}</span>
        <span className="text-lg font-semibold">{restInfo?.info?.sla?.slaString}</span>
        </div>

        <div className="text-gray-600 text-xl mt-1 h-7 overflow-hidden">{restInfo?.info?.cuisines.join(" ")}</div>
        </div>
        </div>
        </Link>
    )
}