import React from "react";
import styles from "../styles/pizzaList.module.css";
import PizzaCard from "./PizzaCard";

function PizzaList() {
  return (
    <section className={styles.listSection}>
      <div className={styles.info}>
        <h1>THE BEST PIZZA IN THE TOWN</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eveniet
          nulla earum deserunt accusamus dolor facilis? Beatae at, sequi, fugiat
          dolorem quos harum reprehenderit molestias, voluptatum molestiae quis
          blanditiis! Blanditiis!
        </p>
      </div>
      <div className={styles.listGrid}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </section>
  );
}

export default PizzaList;
