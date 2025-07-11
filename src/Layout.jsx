import React from 'react'
import Navbar from './components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer/Footer'
import { ToastContainer } from 'react-toastify'

const Layout = () => {
  return (
    <div className='w-full h-[100vh]'>
      <ToastContainer/>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout