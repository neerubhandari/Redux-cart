import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

import { connect } from "react-redux";

const Navbar = ({cart}) => {
 const [cartCount,setCartCount]=useState(0)

 useEffect(() => {
   let count=0
   cart.forEach((item) => {
     count+=item.qty;
   });
   setCartCount(count);
 }, [cart])

  return (
    <div className={styles.navbar}>
      <Link to="/">
        <h2 className={styles.navbar__logo}>Redux Shopping Cart</h2>
      </Link>
      <Link to="/cart">
        <div className={styles.navbar__cart}>
          <img
            className={styles.cart__image}
            src="https://image.flaticon.com/icons/svg/102/102276.svg"
            alt="shopping cart"
          />
          <div className={styles.cart__counter}>{cartCount}</div>
        </div>
      </Link>
    </div>
  );
};
const mapStateToPops=(state)=>{
  return{
    cart:state.shopCart.cart
  }
}

export default connect(mapStateToPops)(Navbar);
