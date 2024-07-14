import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

import { Table } from "flowbite-react";
const ManageBooks = () => {
  const handleDelete=(id)=>{
    console.log(id);
    fetch(`http://localhost:5000/book/${id}`,{
      method:"DELETE"
    }).then(res=> res.json()).then(data=>{
      
      alert("book is deleted sucessfully")
    // setAllBooks(data)
  })

  }
  const [allBooks,setAllBooks]=useState([])
  useEffect(()=>{
    fetch("http://localhost:5000/all-books").then(res=> res.json()).then(data=>setAllBooks(data))
  },[])
  return (
    <div className=' px-4 my-12'>
       <h2 className=' mb-8 text-3xl font-bold'>Manage your Clothes</h2>
       {/* table for book data */}
       <Table className='w-[1100px]'>
        <Table.Head>
          <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>Dress name</Table.HeadCell>
          <Table.HeadCell>Author name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Prices</Table.HeadCell>
          <Table.HeadCell>Edit or manage</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        {
          allBooks.map((book,index)=><Table.Body className="divide-y" key={book._id}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {index +1}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {book.bookTitle}
            </Table.Cell>
            <Table.Cell>{book.authorName}</Table.Cell>
            <Table.Cell>{book.category}</Table.Cell>
            <Table.Cell>$10.00</Table.Cell>
            <Table.Cell>
              <Link to={`/admin/dashboard/edit-books/${book._id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 px-4">
                Edit
              </Link>
              <button onClick={()=>handleDelete(book._id)} className=' bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-blue-600'>Delete</button>
            </Table.Cell>
          </Table.Row>
          </Table.Body>
            )
        }
        
      </Table>
    </div>
  )
}

export default ManageBooks