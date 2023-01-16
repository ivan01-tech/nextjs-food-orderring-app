import Image from "next/image";
import pizza from "../public/img/pizza.png";

function CardItem() {
  return (
    <tr>
      <td>
        <Image fill src={pizza} alt="" />
      </td>
      <td>campagnola</td>
      <td>Double Ingredients,Garlic Sauce</td>
      <td>02</td>
      <th>$ 19.9</th>
      <th>$ 49.9</th>
    </tr>
  );
}

export default CardItem;
