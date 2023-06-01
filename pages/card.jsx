import styles from "../styles/Card.module.css";

import CardItem from "@/Components/CardItem";
function CardComp() {
  return (
    <main className={ styles.wrapper }>
      <section>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Name</th>
              <th>Extra</th>
              <th>Price</th>
              <th>Quatity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <CardItem />
            <CardItem />
            <CardItem />
          </tbody>
        </table>
      </section>
      <aside>
        <h2>Card Total</h2>
        <p>
          <strong>SubTotal :</strong> $102.50
        </p>
        <p>
          <strong>Discount :</strong>$0.00
        </p>
        <p>
          <strong>Total :</strong>$102.50
        </p>
        <button>CheckOut Now!</button>
      </aside>
    </main>
  );
}

export default CardComp;
