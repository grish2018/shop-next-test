import React from "react";
import styles from "./../../components/productItem.module.css";
import axios from "axios";

function Product({ currentProduct }) {
  if (!currentProduct) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.ldsDualRing}></div>
      </div>
    );
  } else {
    return (
      <div className={styles.wrapper}>
        <span>{currentProduct.name}</span>
        <span>{currentProduct.model}</span>
        {/* <span>{description}</span> */}
        <img src={currentProduct.image} />
        <span>{currentProduct.price}</span>
        <span>{currentProduct.special}</span>
        {/* {currentProduct.sizes.map((item, index) => (
      <span key={index}>{item}</span>
    ))} */}
      </div>
    );
  }
}
export default Product;
Product.getInitialProps = async (ctx) => {
  const { data } = await axios.get(
    `http://localhost:3001/product/${ctx.query.id}`
  );
  const currentProduct = data;

  return {
    currentProduct,
  };
};
