import React, { Fragment } from "react";
import cuisineImage from "../../assets/cuisine.jpeg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Nourishment Cuisine</h1>
        <HeaderCartButton onClick={props.onShowCart}>Cart</HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={cuisineImage} alt="A table full of nourishing yummy food!" />
      </div>
    </Fragment>
  );
};

export default Header;
