import React, { useState } from "react";
import styles from "../styles/cardItem.module.css";
import Image from "next/image";
import pizza from "../public/img/pizza.png";
import size from "../public/img/size.png";
function CardItem() {
  const [price, setPrice] = useState(19.4);

  const handleSelctChoice = function (number) {
    setPrice(19.9 + (19.9 * number) / 100);
  };

  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <Image src={pizza} alt="" fill />
      </div>
      <div className={styles.right}>
        <h1>CAMPAGNOLA</h1>
        <span className={styles.price}>$ {price}</span>
        <p style={{ margin: "1rem 0" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam atque
          soluta exercitationem? Eum corrupti ea quibusdam quam autem totam
          veritatis{" "}
        </p>
        <h3 htmlFor="">Choose the size</h3>
        <div className={styles.sizes}>
          <div onClick={() => handleSelctChoice(0)}>
            <Image src={size} width={30} height={30} alt="" />
          </div>
          <div onClick={() => handleSelctChoice(20)}>
            <Image src={size} alt="" width={50} height={50} />
          </div>
          <div onClick={() => handleSelctChoice(50)}>
            <Image src={size} alt="" width={70} height={70} />
          </div>
        </div>
        <h3 htmlFor="">Choose additional ingredients</h3>
        <div className={styles.addIngredient}>
          <label htmlFor="">
            <input type="checkbox" />
            Double Ingredients
          </label>
          <label htmlFor="">
            <input type="checkbox" />
            Garlic Sauce
          </label>
          <label htmlFor="">
            <input type="checkbox" />
            Spicy Sauce
          </label>
          <label htmlFor="">
            <input type="checkbox" />
            Extra Cheese
          </label>
        </div>
        <div>
          <input defaultValue={1} type="number" step={1} min={0} max={50} />
          <button>Add to Card</button>
        </div>
      </div>
    </section>
  );
}

export default CardItem;
