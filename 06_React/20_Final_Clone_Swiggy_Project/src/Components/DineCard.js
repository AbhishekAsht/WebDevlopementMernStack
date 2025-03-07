
export default function DineCard({RestData}){


    return (
        <div className="max-w-sm flex-none">
       <a target="_blank" href={RestData.cta.link}>
        <div className="relative">
          <img
            className="w-80 h-50 object-cover"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              RestData?.info?.mediaFiles[0]?.url
            }
            alt="Restaurant"
          />
          {/* Gradient overlay behind the text */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
          {/* Text with higher z-index */}
          <p className="absolute bottom-2 left-2 text-xl text-white z-10">
            {RestData.info.name}
          </p>
          <p className="absolute bottom-2 right-2 text-xl text-white z-10">
            {RestData?.info?.rating?.value}
          </p>
        </div>
        </a>
      </div>
      
    )

}