import Image from "next/image";
import React from "react";
import styles from "../styles/footer.module.css";
import bg from "../public/img/bg.png";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <Image src={bg} alt="" fill />
      </div>
      <div className={styles.right}>
        <div className={styles.rightInfo}>
          oh yes we did. the Pizzaria , well baked slice of pizza
        </div>
        <ul>
          <h2 className={styles.title}>find our restaurant</h2>
          <li>
            1614 W.Caroll #125 <br /> NewYork 85022 <br /> (602) 867-1013
          </li>
          <li>
            1614 W.Caroll #125 <br /> NewYork 85022 <br /> (602) 867-1013
          </li>
          <li>
            1614 W.Caroll #125 <br /> NewYork 85022 <br /> (602) 867-1013
          </li>
          <li>
            1614 W.Caroll #125 <br /> NewYork 85022 <br /> (602) 867-1013
          </li>
        </ul>
        <ul>
          <h2 className={styles.title}>Working Our</h2>
          <li>
            Monday until Saturday <br /> 08h-22h
          </li>
          <li>
            Saturday - Sunday <br /> 08h-13h
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
