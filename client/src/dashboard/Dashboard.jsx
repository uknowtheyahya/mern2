import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Barrr from '../Graph/Barrr';
import CompGraph from '../Graph/CompGraph';
import VerticalGraph from '../Graph/VerticalGraph';
import CircleGraph from '../Graph/CircleGraph';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Dashboard = () => {
  return (
    <div className='px-4 my-12'>
      <div className=' px-2 '>
        <h2 className=' text-center font-semibold text text-xl'>Admin Dashboard</h2>
      </div>
      
      <div className='flex flex-col lg:flex-row justify-between'>
        <div className='w-full md:w-[500px] h-60 mb-4 md:mb-0'>
        <VerticalGraph/>
        </div>
        <div className='w-full md:w-[500px] h-60'>
          <CircleGraph/>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row justify-between mt-4'>
        <div className='w-full md:w-[500px] h-72 mb-4 md:mb-0'>
          <Barrr />
        </div>
        <div className='w-full md:w-[500px] h-72'>
          <CompGraph />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
