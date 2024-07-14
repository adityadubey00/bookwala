import React from 'react'
import Video from"../assets/video.mp4";
const Banner = () => {
  return (
  <>
  <div className='max-w-screen-2xl container overflow-x-hidden mx-auto md:px-20 px-4 flex flex-col md:flex-row'>
   <div className='w-[100vw] md:w-1/2 mt-12 md:mt-9 pt-12 '>
   <div className=' space-y-12'>
    <h1 className='text-3xl font-bold'>"A room without books is like a<br/> <span className='text-pink-500'>body without a soul.</span>" – Marcus Tullius Cicero

    </h1>
    <p className='text-xl '>
Books are more than just words on a page; they are gateways to other worlds, experiences, and perspectives. Each book is an opportunity to explore, learn, and grow. Let your imagination soar and your knowledge expand with every page you turn.
</p>
    
    <label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
   </div>
   <button className="btn btn-secondary mt-6">Secondary</button>
   </div>
    <div className='w-full md:w-1/2 mt-20 p-5  shadow-pink-500 '>
    <div className="container-fluid p-0 rounded-2xl"> <video id="bannerVideo" autoPlay muted loop> <source src={Video} type="video/mp4" /> </video> </div>
    </div>
  </div>
  </>
  )
}

export default Banner