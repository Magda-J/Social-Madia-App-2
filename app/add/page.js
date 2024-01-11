'use client'

import React from 'react'

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

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!postObject.username || !postObject.title || !postObject.review) {
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 3000);
      return;
    }

    setNewPost(postObject);
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
    }, 3000);

    setPostObject({
      title: '',
      username: '',
      review: '',
      img: '',
      description: '',
    });
  };

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

            {isError && (<p className='text-red-500'>Please fill in all fields</p>)}
            
            {isSuccess && (
              
              <div className='absolute bg-gray-300 p-4 m-4' style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 1000,
            }}>
                <p className='flex items-center justify-center text-black p-6 mx-auto'>You have succesfully Submitted the form.</p>
                <div className='flex items-center justify-evenly flex-row'>
                    <button className=''>Ok</button>
                    <button href="">View Review</button></div>

                </div>

            )}
            
            <form className='mt-6 flex  flex-col gap-6 w-1/2'
                onSubmit={handleSubmit}

            >
                <p>Username: 
                <input placeholder=' Username' name="username"
                    className='ml-1 rounded-sm'
                    onChange={handleInputChange}
                    value={postObject.username} /></p>

                <p>Movie Title:
                <input placeholder=' Movie Title' name="title"
                    className='ml-1 rounded-sm'
                    onChange={handleInputChange}
                    value={postObject.title}
                /></p>

                <div className='flex flex-col'>
                <p>Movie Description:</p>
                <textarea placeholder=' Write a Description!' name="description"
                    className='rounded-sm'
                    onChange={handleInputChange}
                    value={postObject.description}
                />
                </div>

                <p>Movie Image: 
                <input placeholder=' Insert an Image Link' name="img"
                    className='ml-1 rounded-sm'
                    onChange={handleInputChange}
                    value={postObject.img}
                /></p>

                <p>How would you rate this Movie?</p>
                <StarRating 
                value={postObject.rating}
               
                rating={rating} setRating={setRating} />

               
                <div className='flex flex-col'>
                <p>Give the movie a review:</p>
                <textarea placeholder=' Write a Review!' name="review"
                    className='rounded-sm'
                    onChange={handleInputChange}
                    value={postObject.review}
                />
                </div>

                <button type='submit' className='bg-blue-500 w-1/4 mx-auto flex  text-white p-2 rounded-md'
                // disabled={isError}
                >Submit Review</button>
            </form>
            </div>
            
        </div>

    )}

export default Page