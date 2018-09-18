import React from "react";
import MenuSection from '../MenuSection';
import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <div className="content">
        <h1>What We Serve</h1>
        <p>
          We only get the best and freshest ingredients for your consumption.
        </p>

        <div className="menuContainer">
          <MenuSection title="Breakfast"/>
          <MenuSection title="Burgers"/>
          <MenuSection title="Steak"/>
          <MenuSection title="Platters"/>
          <MenuSection title="Desserts"/>
        </div>
      </div>
    </div>
  );
};

export default Menu;
