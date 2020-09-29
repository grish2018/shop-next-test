import React from "react";
import styles from "./productItem.module.css";
import Link from "next/link";

function ProductItem({ id, name, model, image, price, special, sizes }) {
  return (
    <div className={styles.wrapper}>
      <Link href="/product/[id]" as={`/product/${id}`}>
        <a>
          <div className={styles.header}>
            <span>{name}</span>
            <span>{model}</span>
          </div>
          <div className={styles.image}>
            <img src={image} />
          </div>
          <div className={styles.price}>
            <span>{price}</span>
            <span>{special}</span>
            {sizes.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
          </div>
         
        </a>
      </Link>
    </div>
  );
}

export default ProductItem;
