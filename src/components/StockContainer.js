import React from "react";
import Stock from "./Stock";

function StockContainer({stocksData, handleAdd}) {

  return (
    <div>
      <h2>Stocks</h2>
      {stocksData.map((stockInfo, index) => 
        <Stock key={index} stock={stockInfo} handleAdd={handleAdd} />
      )}
    </div>
  );
}

export default StockContainer;
