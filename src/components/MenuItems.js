import React from 'react';

const MenuItems = ({ menuItems, menuFilter }) => {
  let menuitems = menuItems.map((item) => item.category);
  menuitems = ['All', ...new Set(menuitems)];
  return (
    <div className="btn-container">
      {menuitems.map((category, index) => {
        return (
          <>
            <button
              className="menu_btn"
              key={index}
              onClick={() => menuFilter(category)}
            >
              {category}
            </button>

            {/* <div>
              <Products menuItems={menuItems} />
            </div> */}
          </>
        );
      })}
    </div>
  );
};

export default MenuItems;
