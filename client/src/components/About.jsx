import React from 'react';
import { Carousel, Accordion } from "flowbite-react";

const About = () => {
    return (
        <div className='px-4 my-12 py-8  '>
            <div className='py-2'>
                <h2 className='text-5xl font-bold text-center '>About Us</h2>
            </div>

            {/* carousel */}
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel className='h-full w-full'>
<div className="relative h-full w-full">
  <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1505483531331-fc3cf89fd382?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
  <div className="absolute inset-0 flex items-center justify-center text-white">
    <p className="text-3xl font-bold">The right cloth in the right hands at the right time
can change the world.</p>
  </div>
</div>
<div className="relative h-full w-full">
  <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1501633159663-1836f82ceaf0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
  <div className="absolute inset-0 flex items-center justify-center text-white">
    <p className="text-3xl font-bold">The right cloth in the right hands at the right time
can change the world.</p>
  </div>
</div>
<div className="relative h-full w-full">
  <img className="object-cover w-full h-full" src="https://plus.unsplash.com/premium_photo-1684831694230-bbc35cf2fff9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
  <div className="absolute inset-0 flex items-center justify-center text-white">
    <p className="text-3xl font-bold">The right cloth in the right hands at the right time
can change the world.</p>
  </div>
</div>
</Carousel>
            </div>

            {/* accordion */}
            <div className='px-2 py-4 mb-20'>
            <Accordion collapseAll>
      <Accordion.Panel>
        <Accordion.Title className=' font-semibold text-base text-black'>What is Flowbite?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
            dropdowns, modals, navbars, and more.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to&nbsp;
            <a
              href="https://flowbite.com/docs/getting-started/introduction/"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              get started&nbsp;
            </a>
            and start developing websites even faster with components on top of Tailwind CSS.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className=' font-semibold text-base text-black'>Is there a Figma file available?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
            has a design equivalent in our Figma file.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out the
            <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
              Figma design system
            </a>
            based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className=' font-semibold text-base text-black'>What are the differences between Flowbite and Tailwind UI?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            The main difference is that the core components from Flowbite are open source under the MIT license, whereas
            Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
            components, whereas Tailwind UI offers sections of pages.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
            technical reason stopping you from using the best of two worlds.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
          <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
            <li>
              <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                Flowbite Pro
              </a>
            </li>
            <li>
              <a
                href="https://tailwindui.com/"
                rel="nofollow"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                Tailwind UI
              </a>
            </li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
            </div>
            

            {/* Text content */}
            <div className='px-2 py-4 mb-20'> {/* Added margin-bottom here */}
                <h3 className='font-semibold text-xl'>Who We Are</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique quod cumque...</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sed explicabo incidunt ullam. Accusantium dolorem, dignissimos odio quae, veritatis, ipsum recusandae est ratione enim dicta eos necessitatibus minus deleniti neque.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sed explicabo incidunt ullam. Accusantium dolorem, dignissimos odio quae, veritatis, ipsum recusandae est ratione enim dicta eos necessitatibus minus deleniti neque.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sed explicabo incidunt ullam. Accusantium dolorem, dignissimos odio quae, veritatis, ipsum recusandae est ratione enim dicta eos necessitatibus minus deleniti neque.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sed explicabo incidunt ullam. Accusantium dolorem, dignissimos odio quae, veritatis, ipsum recusandae est ratione enim dicta eos necessitatibus minus deleniti neque.</p>
                {/* Additional paragraphs */}
            </div>

            {/* Ensure the last div also has margin-bottom if needed */}
            <div className='px-2 py-4 mb-20'> {/* Ensure there is a margin-bottom */}
                <h3 className='font-semibold text-xl'>More About Us</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique quod cumque...</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique quod cumque...</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique quod cumque...</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique quod cumque...</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique quod cumque...</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique quod cumque...</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique quod cumque...</p>
                {/* Additional paragraphs */}
            </div>
        </div>
    );
}

export default About;