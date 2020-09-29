import React from "react";
import ProductItem from "../../components/ProductItem";
import styles from "./../../styles/Home.module.css";
import axios from "axios";
import Mainlayout from "../../layouts/mainlayout";

function Products({ products }) {
  if (!products) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.ldsDualRing}></div>
      </div>
    );
  } else {
    return (
      <Mainlayout>
        <div className={styles.container}>
          {products.map((item, index) => (
            <ProductItem
              id={item.id}
              key={index}
              special={item.special}
              sizes={item.sizes}
              price={item.price}
              name={item.name}
              model={item.model}
              image={item.image}
              id={item.id}
              description={item.description}
            />
          ))}
        </div>
      </Mainlayout>
    );
  }
}

export default Products;
Products.getInitialProps = async (ctx) => {
  const { data } = await axios.get(
    `http://localhost:3001/product?page=${ctx.query.page}`
  );
  const products = data.data;

  return {
    products,
  };
};
