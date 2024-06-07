import React, { useState } from "react";
import { GoTrash } from "react-icons/go";
import Additem from "./Additem";

const Cond = () => {
  const [tems, setTems] = useState(JSON.parse(localStorage.getItem('dolist')));

  const addItem = (newItem) => {
    const id = tems.length ? tems[tems.length - 1].id + 1 : 1;
    const addNewitem = { id, checked: false, item: newItem };
    const listItem = [...tems, addNewitem];
    setTems(listItem);
    localStorage.setItem("dolist", JSON.stringify(listItem));
  };
  
  const check = (id) => {
    setTems((prevTems) =>
      prevTems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
    localStorage.setItem("dolist", JSON.stringify(tems));
  };

  const trash = (id) => {
    const litem = tems.filter((item) => item.id !== id);
    setTems(litem);
    localStorage.setItem("dolist", JSON.stringify(litem));
  };

  return (
    <main>
      <Additem addItem={addItem} />
      {tems.length ? (
        <ul>
          {tems.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                onChange={() => check(item.id)}
                checked={item.checked}
              />
              <label
                style={
                  item.checked ? { textDecoration: "line-through", color: "red" } : null
                }
                onDoubleClick={() => check(item.id)}
              >
                {item.item}
              </label>
              <GoTrash
                role="button"
                tabIndex={"0"}
                onClick={() => trash(item.id)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <h3 style={{ marginTop: "2rem", color: "red" }}><h3>There is no list added</h3></h3>
      )}
    </main>
  );
};

export default Cond;