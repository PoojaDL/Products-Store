import styles from "./GetItems.module.css";
import React, { useRef, useState } from "react";
import ShowItems from "./ShowItems";

const GetItems = (props) => {
  const dishInput = useRef();
  const idInput = useRef();
  const priceInput = useRef();
  const optionSel = useRef();

  const [item, setItem] = useState({});

  const formSubmit = (event) => {
    event.preventDefault();
    if (
      dishInput.current.value !== "" &&
      idInput.current.value !== "" &&
      priceInput.current.value !== ""
    ) {
      const subObject = {
        name: dishInput.current.value,
        id: idInput.current.value,
        price: priceInput.current.value,
        table: optionSel.current.value,
      };
      setItem((prevState) => {
        return { ...prevState, subObject };
      });
      dishInput.current.value = "";
      idInput.current.value = "";
      priceInput.current.value = "";
    } else {
      console.log("ENter items");
    }
  };

  return (
    <div>
      <form className={styles.form} onSubmit={formSubmit}>
        <label>Unique Order ID</label>
        <input type="number" ref={idInput} />
        <label>Choose Price</label>
        <input type="number" ref={priceInput} />
        <label>Choose Dish</label>
        <input type="text" ref={dishInput} />
        <label>Choose Table</label>
        <select ref={optionSel}>
          <option value="Table-1">Table-1</option>
          <option value="Table-2">Table-2</option>
          <option value="Table-3">Table-3</option>
        </select>

        <button type="submit">Add Product</button>
      </form>
      {item.subObject !== undefined &&
        localStorage.setItem(item.subObject.id, JSON.stringify(item.subObject))}
      <ShowItems />
    </div>
  );
};

export default GetItems;
