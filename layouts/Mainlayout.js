import Link from "next/link";
import React from "react";
import styles from "./../styles/MainLayout.module.css";

function Mainlayout({ children }) {
  return (
    <div>
      <main className={styles.wrapper}>{children}</main>
      <footer>
        <Link href="/products/[page]" as={`/products/${1}`}>
          <a>1</a>
        </Link>
        <Link href="/products/[page]" as={`/products/${2}`}>
          <a>2</a>
        </Link>
      </footer>
    </div>
  );
}

export default Mainlayout;
