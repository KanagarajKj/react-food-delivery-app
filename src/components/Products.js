import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux';
import { increase, decrease, addItem } from '../cartFeatures/cartSlice';
import { BsPlus, BsDash } from 'react-icons/bs';

const Products = ({ menuItems }) => {
  const dispatch = useDispatch();
  return (
    <div className="section-center">
      {menuItems.map((product) => {
        const { id, title, image, price, quantity } = product;
        return (
          <article key={id} className="card-one">
            <div className="img-cta">
              <img src={image} alt={title} />
            </div>
            <div className="info">
              <h4>{title}</h4>
              <h3>Price ₹ {price}-/</h3>
            </div>
            {/* <div className="product-quantity-btn">
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
                    return (quantity = 0);
                  } else {
                    return dispatch(decrease(id));
                  }
                }}
              >
                <BsDash />
              </button>
            </div> */}
            <button
              className="add-to-cart"
              onClick={() =>
                dispatch(
                  addItem({
                    id,
                    title,
                    price,
                    title,
                    quantity,
                  })
                )
              }
            >
              Add to Cart
            </button>
            <Link className="more-info" to={`/products/${id}`}>
              {' '}
              More Info...{' '}
            </Link>
          </article>
        );
      })}
    </div>
  );
};

export default Products