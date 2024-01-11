"use client";
import { CheckCircle2, X, ArrowBigDown, Heart } from "lucide-react"
import { useState } from "react";



const MediaCard = ({
    username,
    title,
    review,
    img,
    description,
    rating
}) => {
    // const [isViewingOpinion, setIsViewingOpinion] = useState(false)

    
    const [likeCount, setLikeCount] = useState(0)
    const [isLiked, setIsLiked] = useState(false)

    const toggleViewOpinion = () => {
      setIsViewingOpinion(!isViewingOpinion)
    }
  
    // let totalLikes = likeCount - dislikeCount;
  
    const increaseLikes = () => {
    
      if(!isLiked) {
        setLikeCount(likeCount + 1)
        setIsLiked(true)
      } else {
        setLikeCount(likeCount - 1)
        setIsLiked(false)
      }

    }
  
    // const decreaseLikes = () => {
    //   if (likeCount > 0) {
    //     setLikeCount(likeCount - 1)
    //   }
    // }


  
    return (
      <div className="">



<div className="flex flex-col max-w-md pb-5 mx-auto">
  <div className="min-w-fit  mx-auto overflow-hidden">
  <img
      src={img}
      alt={description}
     className="rounded-lg shadow-2xl object-cover"
    />
</div>

  
    <div className="mt-3 flex  text-sm">
      <div className="border border-gray-200 w-full p-2 flex justify-between flex-row">

        <div className="flex flex-col">
        <p className="text-gray-500 text-xs group-hover:underline group-hover:underline-offset-4">
          @{username}
        </p>

        <h3 className="text-gray-900 text-xl group-hover:underline group-hover:underline-offset-4">
          {title}
        </h3>
  
        <p className="mt-1 max-w-[45ch] text-lg text-gray-500">
          {review}
        </p>

        <p className="text-gray-900">{rating}</p>
      </div>

      

      <div className="flex-col flex ">
        <div>
        <Heart className={`text-lg hover:scale-125 duration-200 ${isLiked ? 'fill-red-600'  : 'hover:fill-red-600 hover:text-red-700'}`}
       
        onClick={increaseLikes}
        size={45}/></div>

        <div className="flex justify-center items-center">
        <p className="pt-0.5 text-">{likeCount}</p>
        </div>
        
      </div>

  
      
        </div> 
    

    </div>
    
    {/* <div className="flex flex-row gap-4 justify-center text-center"> 

        <button className="p-4 rounded-lg bg-gray-200 " onClick={increaseLikes}>Like!</button>
        <h2 className="text-center mt-6 text-2xl">{likeCount}</h2>
        <button className="p-4 rounded-lg bg-gray-200 " onClick={decreaseLikes}>UnLike!</button>
        </div> */}

      {/* <div>    {
            isViewingOpinion && <div>{review}</div>
        }</div>
         */}
        </div>



      </div>
    )
}
export default MediaCard