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
    const [isViewingOpinion, setIsViewingOpinion] = useState(false)

    
    const [likeCount, setLikeCount] = useState(0)

    const toggleViewOpinion = () => {
      setIsViewingOpinion(!isViewingOpinion)
    }
  
    // let totalLikes = likeCount - dislikeCount;
  
    const increaseLikes = () => {
      setLikeCount(likeCount + 1)
    }
  
    const decreaseLikes = () => {
      if (likeCount > 0) {
        setLikeCount(likeCount - 1)
      }
    }

    return (
      <div className="">



<div className="flex flex-col max-w-md pb-5 mx-auto">
  <div className="aspect-square max-w-md  mx-auto overflow-hidden">
  <img
      src={img}
      alt={description}
     className="w-full object-cover"
    />
</div>

  
    <div className="mt-3 flex justify-center text-sm">
      <div>
      <p className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
          {username}
        </p>
        <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
          {title}
        </h3>
  
        <button onClick={toggleViewOpinion} className="mt-1.5 max-w-[45ch] p-4 rounded-lg bg-gray-200 text-xs text-gray-500">
          Read Review
        </button>
      </div>
  
      <p className="text-gray-900">{rating}</p>

    </div>
    
    <div className="flex flex-row gap-4 justify-center text-center"> 

        <button className="p-4 rounded-lg bg-gray-200 " onClick={increaseLikes}>Like!</button>
        <h2 className="text-center mt-6 text-2xl">{likeCount}</h2>
        <button className="p-4 rounded-lg bg-gray-200 " onClick={decreaseLikes}>UnLike!</button>
        </div>

      <div>    {
            isViewingOpinion && <div>{review}</div>
        }</div></div>



      </div>
    )
}
export default MediaCard