import React from "react";

function PortfolioStock({myStockData, handleDelete}) {
  return (
    <div onClick={handleDelete}>
      <div className="card"  >
        <div className="card-body">
          <h5 className="card-title">{myStockData.name}</h5>
          <p className="card-text">{myStockData.ticker}: {myStockData.price}</p>
        </div>
      </div>
    </div>
  );
}
export default PortfolioStock;
