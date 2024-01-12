'use client'

import React from 'react'

import Link from 'next/link';

import { useState, useEffect } from 'react';
import StarRating from '@/components/StarRating';

const Page = () => {

    const [postObject, setPostObject] = useState({});
    const [newPost, setNewPost] = useState([]);
    const [isSuccess, setIsSuccess] = useState(false)
    const [isError, setIsError] = useState(false)
    const [rating, setRating] = useState(0)




  const handleInputChange = (event) => {
    setPostObject({
      ...postObject,
      [event.target.name]: event.target.value,
    });
  };

  const handleRatingChange = (newRating) => {
    setPostObject(prev => ({ ...prev, rating: newRating }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!postObject.username || !postObject.title || !postObject.review) {
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 7000);
      return;
    }


    

    setNewPost(postObject);
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
    }, 7000);

    setPostObject({
      title: '',
      username: '',
      review: '',
      img: '',
      description: '',
      rating: 0,
  
    });


  };

//   useEffect(() => {
//     setPostObject(prev => ({...prev, rating}));
//   }, [rating])

  useEffect(() => {
    if (Object.keys(newPost).length > 0) {
      const localPosts = localStorage.getItem('posts');
      const updatedPosts = localPosts
        ? [...JSON.parse(localPosts), newPost]
        : [newPost];
      localStorage.setItem('posts', JSON.stringify(updatedPosts));
    }
  }, [newPost]);




    return (
        <div className='relative min-h-screen bg-gradient-to-tl from-sky-500 to-gray-300 min-w-screen p-4'>

            <div className='flex items-center  flex-col p-5 pt-20'>
            <div>
                <h1
                    className='text-2xl font-bold text-black-500'>Submit A Review!</h1>
            </div>

            {isError && (<p className='text-red-500'>Please fill in all fields!</p>)}
            
            {isSuccess && (
              
              <div className='absolute border bg-gray-300 p-4 m-4' style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 1000,
            }}>
                <p className='flex items-center justify-center text-black p-6 mx-auto'>You have succesfully Submitted the form.</p>
                <div className='flex items-center justify-center flex-row'>
                
                    <Link href='/' className='flex bg-blue-400 p-1 text-white rounded-md bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80flex-center ml-4'>View Reviews</Link>                    
                    
                    </div>

                </div>

            )}
            
            <form className='mt-6 flex  flex-col gap-6 w-1/2'
                onSubmit={handleSubmit}

            >
                <p>Username: 
                <input placeholder=' Username' name="username"
                    className='p-0.5 mr-1 rounded-sm'
                    onChange={handleInputChange}
                    value={postObject.username} /></p>

                <p className=''>Movie Title: 
                <input placeholder=' Movie Title' name="title"
                    className='p-0.5 rounded-sm'
                    onChange={handleInputChange}
                    value={postObject.title}
                /></p>

                <div className='flex flex-col'>
                <p >Movie Description:</p>
                <textarea placeholder=' Write a Description!' name="description"
                    className='rounded-sm p-2'
                    onChange={handleInputChange}
                    value={postObject.description}
                    maxLength ={200}
                />
                <p className='text-sm text-gray-600'>
                    {200 - (postObject.description ? postObject.description.length : 0)} characters remaining.
                </p>


                </div>

                <p>Movie Image: 
                <input placeholder=' Insert an Image Link' name="img"
                    className='ml-1 rounded-sm'
                    onChange={handleInputChange}
                    value={postObject.img}
                /></p>

                <p>How would you rate this Movie?</p>
                <StarRating
                name="rating"
                onChange={handleInputChange}
                rating={postObject.rating}
                setRating = {handleRatingChange}
                size={28}
               
             />

               
                <div className='flex flex-col'>
                <p>Give the movie a review:</p>
                <textarea placeholder=' Write a Review!' name="review"
                    className='rounded-sm p-2'
                    onChange={handleInputChange}
                    value={postObject.review}
                    maxLength={500}
                  
                />
                <p className='text-sm text-gray-600'>
                    {500 - (postObject.review ? postObject.review.length : 0)} characters remaining.
                </p>
 
                </div>

                <button type='submit' className='bg-blue-500 mx-auto flex text-white p-4 rounded-md bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80'
                // disabled={isError}
                >Submit Review</button>
            </form>
            </div>
            
        </div>

    )}

export default Page