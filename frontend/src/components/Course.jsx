import React from 'react'
import Cards from './Cards'
import list from '../../public/list'
import { Link } from 'react-router-dom'


const Course = () => {
  return (
<>
<div className='max-w-screen-2xl container mx-auto md:mt-28  md:px-20 px-4 dark:bg-slate-900 dark:text-white'>
    <div className='mt-28 items-center justify-center text-center'>
      
            <h1 className='text-2xl font-semibold md:text-4xl'>
            Welcome to our Book Haven! Dive into a world of stories, knowledge, and adventures. Explore our collection and find your next great read.<br/><span className='text-pink-500 flex justify-center'>Happy browsing!</span> 
            </h1>
           <Link to="/"> <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-900 duration-300'>Back</button></Link>
           
     
       
    </div>
    <div className='mt-12 grid grid-cols-1 p-1 md:grid-cols-4'>
        {
            list.map((item) =>(<Cards key={item.id} item={item}/>))
        }
    </div>
</div>
</>  )
}

export default Course