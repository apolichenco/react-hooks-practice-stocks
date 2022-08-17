import React from "react";

function Stock({stock, handleAdd}) {
  return (
    <div >
      <div className="card"  >
        <div className="card-body" >
          <h5 className="card-title" onClick={handleAdd} >{stock.name}</h5>
          <p className="card-text">{stock.ticker}: {stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
