import React from "react";
import "./wishlist.css";

export default function Wishlist() {
  const [query, setquery] = React.useState("");
  const [wish, setwish] = React.useState([]);
  function handlechange(e) {
    setquery(e.target.value);
    console.log(query);
  }
  function addwish(e) {
    let payload = {
      wish: query,
      fullfill: true,
    };
    let updatedval = [...wish, payload];
    setwish(updatedval);
  }

  return (
    <div>
      <h1>Wishlist</h1>
      {wish.length <= 3 ? (
        <div>
          <input
            type="text"
            value={query}
            className="whish-list"
            onChange={handlechange}
          />
          <button type="button" className="btn" onClick={(e) => addwish(e)}>
            Add
          </button>
          <div className="box">
            {wish.map(({ wish, fullfill }) => {
              return (
                <div className="card">
                  <h3>{wish}</h3>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <>
          <div>You cannot add more than 3 items</div>
        </>
      )}
    </div>
  );
}
