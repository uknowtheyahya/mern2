import { Sidebar } from 'flowbite-react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import SidebarAdmin from './SidebarAdmin'

const DashboardLayout = () => {
  return (
    <div className='flex gap-4 flex-col md:flex-row'>
      <SidebarAdmin/>
      
        <Outlet/>
    </div>
  )
}

export default DashboardLayout