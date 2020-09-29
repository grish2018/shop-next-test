import Mainlayout from "../layouts/mainlayout";
import styles from "../styles/Home.module.css";
// import { isTryStatement } from "typescript";

export default function Home() {
  return (
    <Mainlayout>
      <div className={styles.container}></div>
    </Mainlayout>
  );
}
