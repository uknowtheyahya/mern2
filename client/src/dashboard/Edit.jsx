import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import React, { useState, useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Edit = () => {
  const { id } = useParams();
  const { title, authorName, imageURL, category, description } = useLoaderData();
  const categories = [
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
  ];

  const [selectedCategory, setSelectedCategory] = useState(category || categories[0]);

  useEffect(() => {
    setSelectedCategory(category); // Ensure the initial category is set correctly
  }, [category]);

  const handleChangeSelectedValue = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const updatedObj = {
      title: form.title.value,
      authorName: form.authorName.value,
      imageURL: form.imageURL.value,
      category: form.category.value,
      description: form.description.value,
    };

    fetch(`http://localhost:5000/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedObj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Data is updated successfully!!!");
      })
      .catch((error) => {
        console.error("Error updating data:", error);
        alert("Failed to update the data.");
      });
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update the data</h2>
      <form onSubmit={handleUpdate} className="flex lg:w-[1100px] flex-col gap-4">
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="title" value="Title" />
            </div>
            <TextInput id="title" type="text" defaultValue={title} name='title' placeholder="Title" required />
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput id="authorName" type="text" defaultValue={authorName} name='authorName' placeholder="Author Name" required />
          </div>
        </div>
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Image URL" />
            </div>
            <TextInput id="imageURL" defaultValue={imageURL} type="text" name='imageURL' placeholder="Image URL" required />
          </div>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Category" />
            </div>
            <select name="category" id="inputState" className='w-full rounded' value={selectedCategory} onChange={handleChangeSelectedValue}>
              {categories.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>
        <div className=''>
          <div className="mb-2 block">
            <Label htmlFor="description" value="Description" />
          </div>
          <Textarea id="description" defaultValue={description} name='description' placeholder="Write your description..." className='w-full' required rows={6} />
        </div>
        <Button type="submit">Update</Button>
      </form>
    </div>
  );
};

export default Edit;
