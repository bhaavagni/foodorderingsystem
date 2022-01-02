import React from "react";
import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Nourishing Food, Delivered To You</h2>
      <p>
        Choose your favorite cuisine from our variant section of available
        cuisines and enjoy a delicious lunch or dinner at your happy place.
      </p>
      <p>
        All our cuisines are cooked with love by our experienced chefs with
        high-quality ingredients!
      </p>
    </section>
  );
};

export default MealsSummary;
