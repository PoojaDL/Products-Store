import { useEffect, useState } from "react";
import styles from "./ShowItems.module.css";

const ShowItems = (props) => {
  const [state, setState] = useState(true);
  const deleteItem = (event) => {
    const idToDelete = event.target.parentElement.children[1].textContent;
    localStorage.removeItem(idToDelete);
    setState(false);
  };

  useEffect(() => {
    setState(true);
  }, [state]);

  const printItems1 = Object.keys(localStorage).map((key) => {
    let item = JSON.parse(localStorage.getItem(key));
    if (item.table === "Table-1") {
      return (
        <li className={styles.liItems}>
          {`${item.name}-`} <span>{`${item.table}`}</span> {"-"}
          <span>{`${item.id}`}</span> {`-${item.price}`}{" "}
          <button onClick={deleteItem}>delete Item</button>
        </li>
      );
    }
  });

  const printItems2 = Object.keys(localStorage).map((key) => {
    let item = JSON.parse(localStorage.getItem(key));
    if (item.table === "Table-2") {
      return (
        <li className={styles.liItems}>
          {`${item.name}-`} <span>{`${item.table}`}</span> {"-"}
          <span>{`${item.id}`}</span> {`-${item.price}`}{" "}
          <button onClick={deleteItem}>delete Item</button>
        </li>
      );
    }
  });

  const printItems3 = Object.keys(localStorage).map((key) => {
    let item = JSON.parse(localStorage.getItem(key));
    if (item.table === "Table-3") {
      return (
        <li className={styles.liItems}>
          {`${item.name}-`} <span>{`${item.table}`}</span> {"-"}
          <span>{`${item.id}`}</span> {`-${item.price}`}{" "}
          <button onClick={deleteItem}>delete Item</button>
        </li>
      );
    }
  });

  return (
    <div>
      <div className={styles.itemList}>
        <h2>Order List</h2>
        <h3>Table-1</h3>
        <ul>{printItems1}</ul>
        <h3>Table-2</h3>
        <ul>{printItems2}</ul>
        <h3>Table-3</h3>
        <ul>{printItems3}</ul>
      </div>
    </div>
  );
};

export default ShowItems;
