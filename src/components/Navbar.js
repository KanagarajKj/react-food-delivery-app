import React from 'react'
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { totalQuantity } = useSelector((state) => state.cart);
  return (
    <nav className="navbar">
      <div className="nav-icon">
        <img
          src="https://t4.ftcdn.net/jpg/02/54/70/31/240_F_254703157_y8jORvJPP8l4iDEt2ZxKPpV1JoG4NUMB.jpg"
          alt="Icon"
        />
      </div>
      <div className="nav-right">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/deals" className="link">
          Deals
        </Link>
        <div className="order-link">
          <Link to="/orders" className="link">
            Orders
          </Link>
          <div className="total-quantity">
            <p>{totalQuantity}</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar