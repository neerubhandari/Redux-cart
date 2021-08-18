import React from "react";
import styles from "./SingleItem.module.css";

import { connect } from "react-redux";

const SingleItem = ({ current }) => {
  console.log(current)
  return (
    <div className={styles.singleItem}>
      <img
        className={styles.singleItem__image}
        src={current.img}
        alt={current.title}
      />
      <div className={styles.singleItem__details}>
        <p className={styles.details__title}>{current.title}</p>
        <p className={styles.details__description}>{current.description}</p>
        <p className={styles.details__price}>$ {current.price}</p>

        <button
         className={`${styles.buttons__btn} ${styles.buttons__add}`}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.shopCart.currentItem,
  };
};

export default connect(mapStateToProps)(SingleItem)
