import React from 'react'

const Product = ({menuItems}) => {
  return (
    <div className="section_center">
      {menuItems.map((menuItem) => {
        const { id, title, price, img, desc, Quantity } = menuItem;

        return (
          <article key={id} className="card_one">
            <div className="img_cta">
              <img src={img} alt={title} />
            </div>
            <div className="info">
              <header>
                <h4>{title}</h4>
                <h4>₹ {price}</h4>
              </header>
            </div>
            <button className="cart">Add to Cart</button>
          </article>
        );
      })}
    </div>
  );
}

export default Product