import React, { useEffect, useState } from 'react'
import { Card } from "flowbite-react";

const Shop = () => {
  const [books,setBooks]=useState([])
  useEffect(()=>{
    fetch("http://localhost:5000/all-books").then(res=> res.json()).then(data => setBooks(data))
  })
  return (
    <div className=' mt-28 px-4 lg:px-24'>
      <h2 className=' text-5xl font-bold text-center'>All Designs Are Here</h2>
      <div className=' grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1  gap-8 my-12'>
        {
          books.map(book =><Card>
            <img src={book.imageURL} className=' ' alt="" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p >
              {book.bookTitle}
            </p>
            </h5>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
            <button className=' bg-red-700 font-semibold text-white py-2'>Buy Now</button>
          </Card>)
        }
      </div>
    </div>
  )
}

export default Shop