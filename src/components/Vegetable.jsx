import React from "react";

export default function Vegetable() {
  const [Veglist, setveglist] = React.useState([
    { name: "Tomatoes", qty: 10, unit: "kgs", id: "tom" },
    { name: "potatoes", qty: 8, unit: "kgs", id: "pot" },
    { name: "carrots", qty: 5, unit: "kgs", id: "car" },
    { name: "Onions", qty: 7, unit: "kgs", id: "on" },
  ]);
  function incre(val, idval) {
    var newlist = Veglist.map((element) => {
      if (element.id === idval) {
        if (element.qty === 0 && val === -1) {
          return element;
        }
        element.qty = element.qty + val;
      }
      return element;
    });
    setveglist(newlist);
  }
  return (
    <div>
      <h1>Vegetable lists</h1>
      <div className="container">
        {Veglist.map((el) => {
          return (
            <div key={el.id}>
              <h3>{el.name}-</h3>
              <h6>
                {el.qty} {el.unit}
              </h6>
              <button type="button" onClick={() => incre(1, el.id)}>
                +
              </button>
              <button type="button" onClick={() => incre(-1, el.id)}>
                -
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
