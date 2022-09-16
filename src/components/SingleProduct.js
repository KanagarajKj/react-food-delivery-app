import React from 'react';
import { Link, useParams } from 'react-router-dom';
import products from '../products';
import { useDispatch } from 'react-redux';
import { BsArrowLeft } from 'react-icons/bs';

const SingleProduct = () => {
  const { productID } = useParams();

  const singleFood = products.find((product) => product.id === productID);
  const { image, title, desc, price, category } = singleFood;
  return (
    <>
      <section className="single-product">
        <div className="single-img">
          <img src={image} alt={title} />
        </div>
        <div className="single-prt-price">
          <h4 className="single-product-title">{title}</h4>
          <p className="single-product-price">₹ {price}</p>
          <span className="category">
            Category : <h4>{category}</h4>
          </span>
          <p className="desc">{desc}</p>
        </div>
        <Link to="/deals" className="back-to">
          <span>
            <BsArrowLeft />
          </span>{' '}
          Back to All Foods
        </Link>
      </section>
    </>
  );
};

export default SingleProduct;
