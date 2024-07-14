import React from 'react';
import BannerCard from '../home/BannerCard';

const Banner = () => {
  return (
    <div
      className='px-4 lg:px-24'
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1563291074-2bf8677ac0e5?q=80&w=1907&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-32'>
          {/* left */}
          <div className='md:w-1/2 space-y-8 h-full'>
            <h2 className='text-5xl font-bold leading-snug text-black'>
              Dress To Impress{' '}
              <span className='text-red-700'>Shop With Ease</span>
            </h2>
            <p className='md:w-5/5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              dolorem nemo ducimus reprehenderit quas, exercitationem fuga
              consequuntur, repellendus cumque odio debitis quis voluptas
              tempore nobis dolorum, sequi perferendis. Cumque, alias!
            </p>
            <div>
              <input
                type='search'
                name='search'
                id='search'
                placeholder='search a cloth'
                className='p py-2 px-2 rounded-s-sm outline-none'
              />
              <button className='b bg-red-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-300'>
                Search
              </button>
            </div>
          </div>
          {/* right */}
          <div>
            <BannerCard></BannerCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
