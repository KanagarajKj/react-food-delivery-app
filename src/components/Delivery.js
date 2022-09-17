import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux';

const Delivery = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNum, setmobileNum] = useState('');
    const [pinCode, setpinCode] = useState('');
    const [address, setAddress] = useState('');

    const [pinNum, setPinNum] = useState('')

    const dispatch = useDispatch();

    let pin = Math.floor(Math.random() * 1000000)

     const { totalAmount, totalQuantity, buyMySelf } = useSelector(
       (state) => state.cart
     );

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!userName || !email || !mobileNum || !pinCode) {
      alert('Enter the Details');
    } else {
      setPinNum(pin)
      dispatch(buyMySelf);
    }

    setUserName('')
    setEmail('')
    setAddress('')
    setpinCode('')
    setmobileNum('')
  };
  return (
    <section className="delivery">
      <form className="form" onSubmit={handleSubmit}>
        <div className="login-title">
          <h2>Enter Your Details</h2>
        </div>
        <div className="form-control">
          <label htmlFor="username">UserName: </label>
          <input
            type="text"
            id="username"
            value={userName}
            placeholder="Enter Your Name"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="mobileNum">MobileNumber: </label>
          <input
            type="number"
            id="mobileNum"
            placeholder="Enter Your Mobile Number"
            value={mobileNum}
            onChange={(e) => setmobileNum(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="address">Address: </label>
          <input
            type="text"
            id="address"
            placeholder="Enter Your Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="PinCode">PinCode: </label>
          <input
            type="number"
            id="PinCode"
            placeholder="Enter PinCode"
            value={pinCode}
            onChange={(e) => setpinCode(e.target.value)}
          />
        </div>
        <div className="log-btn">
          <button type="submit" className="login-btn">
            SUBMIT
          </button>
        </div>
      </form>

      <div className="delivery-details">
        <div className="totals">
          <p>Enter all the details to generate OTP</p>
          <h2>Total Amount: Rs.{totalAmount}.00-/</h2>
          <h2>Total Quantity: {totalQuantity} No's</h2>
        </div>
        <div className="pinNum">
          <h3>Please Note Your OTP: {pinNum}</h3>
        </div>
        <div className="goDeals">
          <Link to="/orders" className="gotodeals">
            <span>
              <BsArrowLeft />
            </span>
            Go to Orders
          </Link>
        </div>
        <div>
          <Link to="/" className="new-order-btn"
            onClick={() => dispatch(buyMySelf)}>New Order
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Delivery