"use client";
import { CheckCircle2, X, ArrowBigDown, Heart, Star } from "lucide-react"
import { useState } from "react";
import './components.css'



const MediaCard = ({
  username,
  title,
  review,
  img,
  description,
  rating
}) => {



  console.log('Rating received:', rating);
  // const [isViewingOpinion, setIsViewingOpinion] = useState(false)

  const [showMovieDescription, setShowMovieDescription] = useState(false)



  const [isFullReviewVisible, setIsFullReviewVisible] = useState(false)

  const [likeCount, setLikeCount] = useState(0)
  const [isLiked, setIsLiked] = useState(false)

  const toggleFullReview = (e) => {
    setIsFullReviewVisible(!isFullReviewVisible)
    if (isFullReviewVisible) {
      e.target.animationDuration = '500ms'
    }
  }

  const handleMouseEnter = () => {
    setShowMovieDescription(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setShowMovieDescription(false);
    }, 2000)

  };

  // let totalLikes = likeCount - dislikeCount;

  const increaseLikes = (e) => {



    if (!isLiked) {

      setTimeout(() => {
        setLikeCount(likeCount + 1)

      }, 100)
      setIsLiked(true)

    } else {
      setTimeout(() => {
        setLikeCount(likeCount - 1)

      }, 100)
      setIsLiked(false)
    }
  }

  const getStarColor = (rating) => {
    switch (rating) {
      case 1: return 'star-red';
      case 2: return 'star-red';
      case 3: return 'star-yellow';
      case 4: return 'star-orange';
      case 5: return 'star-orange';
      default: return 'star-default';
    }
  }



  return (
    <div className="">



      <div className="flex flex-col max-w-md pb-5 mx-auto">
        <div className="min-w-fit  mx-auto overflow-hidden">
          <img
            src={img}
            alt={description}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="rounded-lg cursor-pointer selection:shadow-2xl object-cover"
          />

          {showMovieDescription && (
            <div className="bg-gradient-to-tl from-black to-gray-900 border border-gray-200 bg-opacity-70 text-gray-100 w-full text-center p-2">
              {description}
            </div>
          )}
        </div>


        <div className="mt-3 flex  text-sm">
          <div className="border-2 border-gray-100  w-full p-4 flex justify-between flex-row">

            <div className="flex flex-col">
              <p className="text-gray-300 text-xs group-hover:underline group-hover:underline-offset-4">
                @{username}
              </p>

              <h3 className="text-white pt-2 pb-2 text-xl font-semibold group-hover:underline group-hover:underline-offset-4">
                {title}
              </h3>

              <div className="flex items-center">
                <p className="text-gray-100 items-center font-semibold pr-1">{rating}</p>
                <Star className={getStarColor(rating)} />
              </div>

              <p className="mt-1 max-w-[45ch] text-lg text-gray-100">

                {isFullReviewVisible ? review : review.substring(0, 200) + '...'}
                <p onClick={toggleFullReview} className="text-blue-500 text-sm pt-2">
                  {!isFullReviewVisible ? 'Read More' : 'Read Less'}
                </p>

              </p>


            </div>



            <div className="flex-col flex ">
              <div>
                <Heart className={`text-lg heart-icon  pt-2 hover:scale-125 duration-300 ${isLiked ? 'fill-red-600' : 'text-gray-100 hover:fill-red-600 hover:text-red-700'}`}

                  onClick={increaseLikes}
                  size={38} /></div>

              <div className="flex justify-center items-center">
                <p className="pt-0.5 text-gray-100">{likeCount}</p>
              </div>

            </div>



          </div>


        </div>

      </div>



    </div>
  )
}
export default MediaCard