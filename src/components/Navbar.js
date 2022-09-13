import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to="/"  className='link'>Home</Link>
      <Link to="/deals" className='link'>Deals</Link>
      <Link to="/orders" className='link'>Orders</Link>
    </nav>
  );
}

export default Navbar