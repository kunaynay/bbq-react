import React from "react";

const MenuSection = (props) => {
  return (
    <div className="menuItem">
      <img src={require(`../assests/img/${props.title}.jpg`)} alt="Breakfast" />
      <h3>{props.title}</h3>
      <p>
        Pork chop prosciutto buffalo, andouille venison corned beef fatback jowl
        landjaeger. Landjaeger swine strip steak, ribeye ground round burgdoggen
        drumstick fatback cupim tri-tip jerky tenderloin cow shankle.
      </p>
    </div>
  );
};

export default MenuSection;