import React from 'react';

const MenuItems = ({ menuItems, menuFilter }) => {
  let menuitems = menuItems.map((item) => item.category);
  menuitems = ['All', ...new Set(menuitems)];
  return (
    <div className="btn-container">
      {menuitems.map((category, id) => {
        return (
          <button
            className="menu_btn"
            key={id}
            onClick={() => menuFilter(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default MenuItems;
