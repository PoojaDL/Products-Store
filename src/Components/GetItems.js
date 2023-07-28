import styles from "./GetItems.module.css";
import React, { useRef, useState } from "react";
import ShowItems from "./ShowItems";

const GetItems = (props) => {
  const nameInput = useRef();
  const idInput = useRef();
  const priceInput = useRef();

  const [item, setItem] = useState({});

  const formSubmit = (event) => {
    event.preventDefault();
    if (
      nameInput.current.value !== "" &&
      idInput.current.value !== "" &&
      priceInput.current.value !== ""
    ) {
      const subObject = {
        name: nameInput.current.value,
        id: idInput.current.value,
        price: priceInput.current.value,
      };
      setItem((prevState) => {
        return { ...prevState, subObject };
      });
      nameInput.current.value = "";
      idInput.current.value = "";
      priceInput.current.value = "";
    } else {
      console.log("ENter items");
    }
  };

  return (
    <div>
      <form className={styles.form} onSubmit={formSubmit}>
        <label>Product ID</label>
        <input type="number" ref={idInput} />
        <label>Selling Price</label>
        <input type="number" ref={priceInput} />
        <label>Product Name</label>
        <input type="text" ref={nameInput} />

        <button type="submit">Add Product</button>
      </form>
      {item.subObject !== undefined &&
        localStorage.setItem(item.subObject.id, JSON.stringify(item.subObject))}
      <ShowItems />
    </div>
  );
};

export default GetItems;
