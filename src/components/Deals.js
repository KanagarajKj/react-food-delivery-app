import React,{useState} from 'react';
import products from '../products';
import MenuItems from './MenuItems';
import Product from './Product';

const Deals = ({user}) => {

  const [menuItems, setMenuItems] = useState(products)

  const menuFilter = function (category) {
    if (category === 'All') {
      setMenuItems(products);
      return;
    }

    let newMenu = products.filter((product) => product.category === category);
    setMenuItems(newMenu);
  };
  return (
    <div>
      <h3>Welcome {user.userName} !</h3>
      <section className="project_cta">
        <div className="title">
          <h2>Our Deals</h2>
        </div>
        <MenuItems menuItems={menuItems} menuFilter={menuFilter} />
        <h2>Discover the best food & drinks in</h2>
        <Product menuItems={menuItems} />
      </section>
    </div>
  );
}

export default Deals