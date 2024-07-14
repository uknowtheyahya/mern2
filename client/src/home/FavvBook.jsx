import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import FavBookImg from '../assets/favoritebook.jpg';

const FavvBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12 '>
      <div className='md:w-1/2 '>
        <img src='https://images.unsplash.com/photo-1596356453261-0d265ae2520a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" className=' rounded md:w-10/12 ' />
        
      </div>
      <div className=' md:w-1/2 space-y-6'>
        <h2 className=' text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find Your Favorite <span className=' text-red-700'>Cloth Here!</span></h2>
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
  )
}

export default FavvBook;
