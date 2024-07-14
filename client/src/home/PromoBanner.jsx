import React from 'react'
import { Link } from 'react-router-dom'


const PromoBanner = () => {
  return (
    <div className=' mt-16 py-12 bg-red-100 px-4 lg:px-24 '>
        <div className='flex flex-col md:flex-row justify-between items-center gap-12 '>
            <div className=' md:w-1/2'>
                <h2 className=' text-4xl font-bold mb-6 leading-snug'>2024 National Cloths Awards For <span className=' text-red-600'>Threads n Thriv</span>  Shortlist</h2>
                <Link to="/shop" className=' mt-12 block'><button className=' bg-red-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Get Promo</button></Link>
            </div>
           
            <div>
            <img src='https://images.unsplash.com/photo-1596609548164-aee7658cb54f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" className=' w-96' />
        </div>
        </div>
        
    </div>
  )
}

export default PromoBanner