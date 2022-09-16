import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const SharedLayout = () => {
  return (
    <div>
        <Navbar/>
        <section>
            <Outlet/>
        </section>
        <Footer/>
    </div>
  )
}

export default SharedLayout