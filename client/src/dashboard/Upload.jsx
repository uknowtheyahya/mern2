import React, { useState } from 'react'
import { Label, Textarea } from "flowbite-react";
import { Button, Checkbox, TextInput } from "flowbite-react";

const Upload = () => {
  const Categories=[
    "T-shirts",
    "Shirts",
    "Pants",
    "UnderGarments",
    "Sweaters",
    "Polyester shirts",
    "Nylon jackets",
    "Jeans",
    "Denim skirts",
    "Fleece jackets",
    
  ]
  const [selectedBookCategory,setSelectedCategory]=useState(Categories[0])
  const handleChangeSelectedValue=(event)=>{
    console.log(event.target.value);
    setSelectedCategory(event.target.value)

  }
  const handleBookSubmit=(event)=>{
    event.preventDefault();
    const form = event.target;
    const bookTitle= form.bookTitle.value
    const authorName= form.authorName.value
    const imageURL= form.imageURL.value
    const category= form.category.value
    const bookDescription= form.bookDescription.value
   
    const bookObj={
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription, 
      
    }
    console.log(bookObj);
    // send data to db 
    fetch("http://localhost:5000/upload-book",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(bookObj)
    }).then(res =>res.json()).then(data =>{console.log(data)
    alert("uploaded successfully!!!")
    form.reset()
  })

  }
  return (
    <div className=' px-4 my-12'>
      <h2 className=' mb-8 text-3xl font-bold'>Upload Data</h2>
      <form onSubmit={handleBookSubmit} className="flex lg:w-[1100px] flex-col gap-4" >
        {/* row 1 */}
     <div className='flex gap-8'>
     <div className=' lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Title" />
        </div>
        <TextInput id="bookTitle" type="text" name='bookTitle' placeholder="Name" required />
      </div>
      {/* auth name */}
      <div className=' lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput id="authorName" type="text" name='authorName' placeholder="Author Name" required />
      </div>

     </div>
     {/* row 2 */}
     <div className='flex gap-8'>
     <div className=' lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Dress Image URL" />
        </div>
        <TextInput id="imageURL" type="text" name='imageURL' placeholder="Dress Image URL" required />
      </div>
      {/* category */}
      <div className=' lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="inputState" value="Category " />
        </div>
       <select name="category" id="inputState" className=' w-full rounded' value={selectedBookCategory}
       onChange={handleChangeSelectedValue}>
        {
          Categories.map((option)=><option key={option} value={option}>{option}</option>)
        }
       </select>
      </div>

     </div>
     {/* book row 3 description */}
     <div className=''>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Description" />
        </div>
        
        <Textarea id="bookDescription" type="text" name='bookDescription' placeholder="Write your description..."
        className='w-full' required rows={6} />
      </div>
      {/* book pdf link */}
      
      <Button type="submit">Submit</Button>
    </form>
        
        </div>
        
        
  )
}

export default Upload