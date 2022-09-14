import React from 'react';
import { useSelector } from 'react-redux';
import { removeCart } from '../cartFeatures/cartSlice';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Orders = () => {
  const cartProducts = useSelector((state) => state.cart.addCart);
  const { totalAmount, totalQuantity } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  return (
    <section className="orders">
      <div>
        {cartProducts.map((product) => {
          const { id, image, title, price, quantity } = product;
          return (
            <article key={id} className="card-one">
              <div className="img-cta">
                <img src={image} alt={title} />
              </div>
              <div className="info">
                <h4>{title}</h4>
                <h3>Price ₹ {price}-/</h3>
              </div>

              <div className="total-num-orders">Quantity:{quantity}</div>
              <Link className="more-info" to={'/deals'}>
                Back...
              </Link>
              <button onClick={() => dispatch(removeCart(id))}>Remove</button>
            </article>
          );
        })}
      </div>
      <div className="totals">
        <h4>Total Amount: ₹{totalAmount}</h4>
        <span>
          <span>Total Quantity: {totalQuantity}</span> <span>No's</span>{' '}
        </span>
      </div>
    </section>
  );
};

export default Orders;
