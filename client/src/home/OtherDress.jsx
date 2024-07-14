import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards'
import { Card } from "flowbite-react";

const OtherDress = () => {
    const [books,setBooks]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/all-books").then(res =>res.json()).then(data => setBooks(data.slice(4,8)))
    },[])
    const displayedBooks = books.slice(0, 4);
  return (
    <div className='mt-28 px-4 lg:px-24'>
    <h2 className='text-5xl font-bold text-center'>Other Clothes</h2>
    <div className='grid grid-cols-4 gap-8 my-12'>
      {displayedBooks.map((book, index) => (
        <Card key={index}>
          <img src={book.imageURL} className='' alt="" />
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>{book.bookTitle}</p>
          </h5>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
          {/* <button className='bg-blue-700 font-semibold text-white py-2'>Buy Now</button> */}
        </Card>
      ))}
    </div>
  </div>
  )
}

export default OtherDress