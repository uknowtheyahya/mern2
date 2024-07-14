import React from 'react'
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '18-24',
    uv: 9.47,
    pv: 2400,
    fill: '#8884d8',
  },
  {
    name: '25-29',
    uv: 9.69,
    pv: 4567,
    fill: '#83a6ed',
  },
  {
    name: '30-34',
    uv: 14.69,
    pv: 1398,
    fill: '#8dd1e1',
  },
  {
    name: '35-39',
    uv: 11.22,
    pv: 9800,
    fill: '#82ca9d',
  },
  {
    name: '40-49',
    uv: 13.63,
    pv: 3908,
    fill: '#a4de6c',
  },
  {
    name: '50+',
    uv: 17.63,
    pv: 4800,
    fill: '#d0ed57',
  },
  {
    name: 'unknow',
    uv: 9.67,
    pv: 4800,
    fill: '#ffc658',
  },
];

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};

const CircleGraph = () => {
  return (
    <div className='w-[450px] h-60'>
         <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={20} data={data}>
          <RadialBar
            minAngle={15}
            label={{ position: 'insideStart', fill: '#fff' }}
            background
            clockWise
            dataKey="uv"
          />
          <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default CircleGraph