import React, { useState } from "react";
import { BsPlusSquareFill } from "react-icons/bs";

const Additem = ({ addItem }) => {
  const [newItem, setNewItem] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem([newItem]); 
    setNewItem("");
  };

  return (
    <form className="addForm" onSubmit={submit}>
      <label htmlFor="addItem"></label>
      <input
        autoFocus
        id="addItem"
        type="text"
        placeholder="Add item"
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button type="submit" aria-label="Add item">
        <BsPlusSquareFill />
      </button>
    </form>
  );
};

export default Additem;

