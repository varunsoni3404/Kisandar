import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import MainSection from '../pages/MainSection'
function Layout() {
  return (
    <div className=' flex flex-col h-screen w-full'>
      <Header></Header>
      
      <Outlet></Outlet>
    </div>
  )
}

export default Layout