import React from 'react';
import { Link, useParams } from 'react-router-dom';
import products from '../products';
import { addItem} from '../cartFeatures/cartSlice';
import { useDispatch } from 'react-redux';

const SingleProduct = () => {
  const { productID } = useParams();

  const dispatch = useDispatch();

  const singleFood = products.find((product) => product.id === productID);
  const { id, image, title, desc, price } = singleFood;
  return (
    <>
      <section>
        <div className="single-img">
          <img src={image} alt={title} />
        </div>
        <div className='single-prt-price'>
          <h4>{title}</h4>
          <p>₹ {price}</p>
          <p>{desc}</p>
          <button className="cart" onClick={() => dispatch(addItem(id))}>
            Add to Cart
          </button>
        </div>
        <Link to="/deals">Back to All Foods</Link>
      </section>
    </>
  );
};

export default SingleProduct;
