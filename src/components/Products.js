import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux';
import { addItem } from '../cartFeatures/cartSlice';

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