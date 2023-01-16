import Image from "next/image";
import styles from "../styles/pizzaList.module.css";
import pizza from "../public/img/pizza.png";
import Link from "next/link";

function PizzaCard() {
  return (
    <Link href={"/piz"}>
      <article className={styles.item}>
        <Image src={pizza} alt="banner item" />
        <h3 className={styles.title}>Campagnola</h3>
        <p className={styles.price}>$ 19.25</p>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
        </p>
      </article>
    </Link>
  );
}

export default PizzaCard;
