import React from 'react'

const Newsletter = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center space-y-2 my-32'>
      <h1 className='md:text-4xl text-2xl font-semibold'>Never Miss a Blog!</h1>
      <p className='md:text-lg text-gray-500/70 pb-8'>Subscribe to the latest blog, new tech, and exclusive news.</p>
        <form className='flex items-center justify-between w-full max-w-2xl md:h-13 h-12 '>
            <input
            type='text'
            placeholder='Enter your email id'
            className='h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500 border border-gray-300 rounded-md '
            required
            />
            <button
            type='submit'
            className='md:px-12 px-8 h-full  bg-primary/80  text-white rounded-md hover:bg-primary transition-all cursor-pointer rounded-1-none '
            >
            Subscribe
            </button>
            </form>
    </div>
  )
}

export default Newsletter
