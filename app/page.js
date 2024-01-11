"use client";
import MediaCard from '@/components/MediaCard';

import { useState, useEffect } from 'react';

import Link from 'next/link';

import Page from './add/page';



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
    
      <div className='bg-gradient-to-tl from-sky-500 to-gray-300 fon'>

      <div>
        <h1 className='text-4xl font-bold text-center'>InstaMovie</h1>
        <Link href='/add'>Watch movies</Link>
      </div>

      <div className='p-4 w-full h-full justify-center flex-col'>

        {newPosts && newPosts.map((newPost) => {

          return <MediaCard
            username={newPost.username}
            title={newPost.title}
            descripttion={newPost.description}
            img={newPost.img}
            review={newPost.review}>


          </MediaCard>
        })}

        {/* <button onClick={increaseLikes}>Like!</button>
        <button onClick={decreaseLikes}>UnLike!</button>
        <h2>{likeCount}</h2> */}

      </div>

      </div>
    </>
    
  )
}




// {movies && movies.map((movie) => {
//   return <MediaCard title={movie.title}
//       img={movie.img}
//       watched={movie.watched}
//       opinion={movie.opinion}
//   />


// // 1st thing I changed
// useEffect(() => {
//   // get movies from local storage
//   const movies = JSON.parse(localStorage.getItem('movies'));
//   // if there are no movies, do nothing and return
//   if (!movies) return;
//   // if there are movies, set them in state
//   setMovies(movies);
// }, [])