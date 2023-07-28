import { useEffect, useState } from "react";
import styles from "./ShowItems.module.css";

const ShowItems = (props) => {
  let totalPrice = 0;
  const [state, setState] = useState(true);
  const deleteItem = (event) => {
    const idToDelete = event.target.parentElement.children[0].textContent;
    localStorage.removeItem(idToDelete);
    setState(false);
  };

  useEffect(() => {
    setState(true);
  }, [state]);

  const printItems = Object.keys(localStorage).map((key) => {
    let item = JSON.parse(localStorage.getItem(key));
    totalPrice += +item.price;
    return (
      <li className={styles.liItems}>
        {`${item.name}-`} <span>{`${item.id}`}</span> {`-${item.price}`}
        {"-"}
        <button onClick={deleteItem}>delete Item</button>
      </li>
    );
  });

  return (
    <div>
      <div className={styles.itemList}>
        <h2>Products List</h2>
        <ul>{printItems}</ul>
      </div>
      <div className={styles.priceList}>
        <h2>Total Price:{totalPrice}</h2>
      </div>
    </div>
  );
};

export default ShowItems;
