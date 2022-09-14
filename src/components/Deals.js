import React, { useState } from 'react';
import MenuItems from './MenuItems';
import Products from './Products';
import { useSelector } from 'react-redux';

const Deals = () => {
  const { productsList } = useSelector((state) => state.cart);
  const [menuItems, setMenuItems] = useState(productsList);

  const menuFilter = function (category) {
    if (category === 'All') {
      setMenuItems(productsList);
      return;
    }

    let newMenu = productsList.filter(
      (product) => product.category === category
    );
    setMenuItems(newMenu);
  };
  return (
    <div className="deals">
      <section className="project-cta">
        <div className="title">
          <h2>Our Deals</h2>
        </div>
        <div className="menu-Items">
          <MenuItems menuItems={menuItems} menuFilter={menuFilter} />
        </div>
        <div className="deals-title">
          <h4>Discover the best food & drinks in</h4>
        </div>
        <div className="product">
          {productsList.map((product) => {
            return <Products key={product.id} {...product} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Deals;
