import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import phone from "../public/img/telephone.png";
import panier from "../public/img/cart.png";
import logo from "../public/img/logo1.png";
import Link from "next/link";

function Navbar() {
  return (
    <nav className={styles.Navbar}>
      <div className={styles.contact}>
        <div>
          <p>order now !</p>
          <p className={styles.number}>+237 693327475</p>
        </div>
        <div className={styles.img}>
          <Image src={phone} alt="number call" width={30} height={30} />
        </div>
      </div>
      <ul className={styles.list}>
        <li>HomePage</li>
        <li>Product</li>
        <li>Blog</li>
        <Image src={logo} alt="panier" width={230} />

        <li>Menu</li>
        <li>Message</li>
        <li>Contact</li>
      </ul>
      <Link href={"card"} className={styles.card}>
        <Image src={panier} alt="panier" width={30} height={30} />
        <span>2</span>
      </Link>
    </nav>
  );
}

export default Navbar;
