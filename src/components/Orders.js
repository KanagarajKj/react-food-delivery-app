import React from 'react';
import { useSelector } from 'react-redux';
import { removeOrders, increase, decrease } from '../cartFeatures/cartSlice';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { BsPlus, BsDash } from 'react-icons/bs';

const Orders = () => {
  const cartProducts = useSelector((state) => state.cart.addCart);
  const { totalAmount, totalQuantity, orderQty } = useSelector(
    (state) => state.cart
  );

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

              <div className="product-quantity-btn">
                <button
                  className="quantity-btn"
                  onClick={() => dispatch(increase(id))}
                >
                  <BsPlus />
                </button>
                <p>{quantity}</p>
                <button
                  className="quantity-btn"
                  onClick={() => {
                    if (quantity === 0) {
                      return (dispatch(removeOrders(id))
                      )
                    } else {
                      return dispatch(decrease(id));
                    }
                  }}
                >
                  <BsDash />
                </button>
              </div>
              <Link className="more-info" to={'/deals'}>
                Back...
              </Link>
              <button
                className="remove-btn"
                onClick={() => dispatch(removeOrders(id))}
              >
                Remove
              </button>
            </article>
          );
        })}
      </div>
      <div className="totals">
        <div>
          <h2>Total Amount: ₹ {totalAmount}.00-/</h2>
        </div>
        <div>
          <h2>Total Quantity: {totalQuantity} No's</h2>
        </div>
        <div className="purchase">
          <Link to='/' className="buy-btn">Buy Myself</Link>
          <Link to='/' className="buy-btn">Home On Delivery</Link>
        </div>
      </div>
    </section>
  );
};

export default Orders;
