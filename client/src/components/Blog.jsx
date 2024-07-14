import React, { useEffect, useState } from 'react'
import { Carousel } from "flowbite-react";
import { Rating } from "flowbite-react";

import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import FavBookImg from '../assets/favoritebook.jpg';

const Blog = () => {
  const [books,setBooks]=useState([])
  useEffect(()=>{
    fetch("http://localhost:5000/all-books").then(res =>res.json()).then(data => setBooks(data.slice(0,8)))
},[])
  return (
    <div className=' px-4 my-12 pt-8 '>
      <div className=' py-2'>

<h2 className='text-5xl font-bold text-center '>Blog</h2>
</div>
 <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 ">
    <Carousel>
      <img src="https://images.unsplash.com/photo-1505483531331-fc3cf89fd382?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="..." />
      <img src="https://images.unsplash.com/photo-1501633159663-1836f82ceaf0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="..." />
 
    </Carousel>
  </div>

{/* rating */}
<div className=' px-0 my-8 flex justify-between '>
<div className=' w-[800px] '>
<Rating className="mb-2">
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star filled={false} />
        <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p>
      </Rating>
      <p className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
      <Rating.Advanced percentFilled={70} className="mb-2">
        5 star
      </Rating.Advanced>
      <Rating.Advanced percentFilled={17} className="mb-2">
        4 star
      </Rating.Advanced>
      <Rating.Advanced percentFilled={8} className="mb-2">
        3 star
      </Rating.Advanced>
      <Rating.Advanced percentFilled={4} className="mb-2">
        2 star
      </Rating.Advanced>
      <Rating.Advanced percentFilled={1}>1 star</Rating.Advanced>
</div>
<div>
<div className=' w-[800px]'>
<Rating className="mb-2">
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star filled={false} />
        <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 out of 5</p>
      </Rating>
      <p className="mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
      <Rating.Advanced percentFilled={70} className="mb-2">
        5 star
      </Rating.Advanced>
      <Rating.Advanced percentFilled={17} className="mb-2">
        4 star
      </Rating.Advanced>
      <Rating.Advanced percentFilled={8} className="mb-2">
        3 star
      </Rating.Advanced>
      <Rating.Advanced percentFilled={4} className="mb-2">
        2 star
      </Rating.Advanced>
      <Rating.Advanced percentFilled={1}>1 star</Rating.Advanced>
</div>
</div>
{/* timeline */}

</div>

<div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12 '>
      <div className='md:w-1/2 '>
        <img src='https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" className=' rounded md:w-10/12 ' />
        
      </div>
      <div className=' md:w-1/2 space-y-6'>
        <h2 className=' text-5xl font-bold my-5 md:w-3/4 leading-snug'>Trendiest Fashion <span className=' text-red-700'>Blogs to Follow in 2024! </span></h2>
        <p className=' mb-10 text-lg  md:w-5/6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat in cumque velit distinctio sit illo facilis autem itaque, consequuntur sapiente atque dicta ea fuga quae id, aut error similique ab.</p>
        {/* stats */}
        <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
          <div>
            <h2 className=' text-3xl font-bold'>
              <CountUp end={800} duration={4} separator="," />+
            </h2>
            <p className=' text-base'>Book Listing</p>
          </div>
          <div>
            <h2 className=' text-3xl font-bold'>
              <CountUp end={500} duration={4} separator="," />+
            </h2>
            <p className=' text-base'>Register Users</p>
          </div>
          <div>
            <h2 className=' text-3xl font-bold'>
              <CountUp end={1200} duration={4} separator="," />+
            </h2>
            <p className=' text-base'>PDF Downloads</p>
          </div>
        </div>
        <Link to="/shop" className=' mt-12 block'><button className=' bg-red-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explore More</button></Link>
      </div>
    </div>
      
    </div>
   
  )
}

export default Blog

