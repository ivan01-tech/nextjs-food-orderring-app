import { useState } from "react";
import styles from "../styles/Banner.module.css";
import Image from "next/image";
import svg1 from "../public/img/brand3.png";
import pizza1 from "../public/img/pizza.png";
import al from "../public/img/arrowl.png";
import ar from "../public/img/arrowr.png";

function Banner() {
  const [Index, setIndex] = useState(0);
  return (
    <section className={styles.banner}>
      <div
        className={styles.arrowContain}
        style={{ left: 50, transform: `translate(50%,-50%);` }}
        onClick={() => setIndex((prev) => (prev > 0 ? prev - 1 : 2))}
      >
        <Image src={al} alt="" fill />
      </div>
      <div
        className={styles.bannerItmeWrap}
        style={{ transform: `translateX(${Index * -100}vw)` }}
      >
        <div className={styles.bannerItem}>
          <Image src={svg1} alt="banner item" className={styles.bannerImg} />
          <Image src={pizza1} alt="banner item" className={styles.bannerImg} />
        </div>
        <div className={styles.bannerItem}>
          {/* <div> */}
          <Image src={pizza1} alt="banner item" className={styles.bannerImg} />
          <div className={styles.textInfo}>
            {/* <h1>BUY 2 </h1>
            <h1>AND</h1>
            <h2>GET 1 FOR FREE</h2> */}

            <h1>
              BUY 2 AND <br /> GET 1 FOR FREE
            </h1>
          </div>
          {/* </div> */}
        </div>
        <div className={styles.bannerItem}>
          <Image src={pizza1} alt="banner item" className={styles.bannerImg} />
          <Image src={svg1} alt="banner item" className={styles.bannerImg} />
        </div>
      </div>
      <div
        className={styles.arrowContain}
        style={{ right: 50, transform: `translate(-50%,-50%);` }}
        onClick={() => setIndex((prev) => (prev < 2 ? prev + 1 : 0))}
      >
        <Image src={ar} alt="" fill />
      </div>
    </section>
  );
}

export default Banner;
