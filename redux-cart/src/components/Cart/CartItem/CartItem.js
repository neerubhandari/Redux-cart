import React, { useState } from "react";
import styles from "./CartItem.module.css";

import { connect } from "react-redux";
import { removeFromCart } from "../../../redux/actions";

const CartItem = ({ item,removeFromCart }) => {
  const [input, setInput] = useState(item.qty);

  return (
    <div className={styles.cartItem}>
      <img
        className={styles.cartItem__image}
        src={item.img}
        alt={item.title}
      />
      <div className={styles.cartItem__details}>
        <p className={styles.details__title}>{item.title}</p>
        <p className={styles.details__desc}>{item.description}</p>
        <p className={styles.details__price}>$ {item.price}</p>
      </div>
      <div className={styles.cartItem__actions}>
        <div className={styles.cartItem__qty}>
          <label htmlFor="qty">Qty</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
          
          />
        </div>
        <button
         onClick={()=>removeFromCart(item.id)}
          className={styles.actions__deleteItemBtn}
        >
          <img
            src="https://image.flaticon.com/icons/svg/709/709519.svg"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch)=>{
  return{
    removeFromCart:(id)=>dispatch(removeFromCart(id))
  }
}
export default connect(null,mapDispatchToProps)(CartItem);
