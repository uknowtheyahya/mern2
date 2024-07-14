import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import  './App.css'
import MyFooter from './components/MyFooter'
import Home from './home/Home'


const App = () => {
  return (
    <div>
      
      <Navbar/>
      
      <div className=' min-h-screen'>
     <Outlet/>
     
      </div>
      
     <MyFooter/>
     
      </div>
  )
}

export default App