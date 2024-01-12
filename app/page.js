"use client";
import MediaCard from '@/components/MediaCard';

import { useState, useEffect } from 'react';





export default function Home() {

  


  const [newPosts, setNewPosts] = useState([])



  useEffect(() => {
    const existingPost = JSON.parse(localStorage.getItem('posts'))
    console.log(existingPost)

    if (!existingPost) {
      console.error("The array is empty!")
      return
    }

    setNewPosts(() => {
      const updatedPosts = [...existingPost];
      console.log(updatedPosts)

      return updatedPosts;

    })

  }, [])
  


  return (
    <>
    
      <div className='bg-gradient-to-tl from-black to-gray-900 fon'>

      <div>
        <h1 className='text-4xl pt-5 text-white text-center'>Movies Reviews For You!</h1>
   
      </div>

      <div className='p-4 h-full w-full'> {/* added this to change the position fo the cards */}

        {newPosts && newPosts.map((newPost) => {

          return ( <MediaCard
            username={newPost.username}
            title={newPost.title}
            description={newPost.description}
            img={newPost.img}
            review={newPost.review}
            rating={newPost.rating}>
          </MediaCard> )
        })}

  

      </div>

      </div>
    </>
    
  )
}




 