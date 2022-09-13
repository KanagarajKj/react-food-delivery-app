import React from 'react';

const MenuItems = ({ menuItems, menuFilter }) => {
  let menuitems = menuItems.map((course) => course.category);
  menuitems = ['All', ...new Set(menuitems)];
  return (
    <div className="btn_container">
      {menuitems.map((category, index) => {
        return (
          <button
            className="menu_btn"
            key={index}
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
