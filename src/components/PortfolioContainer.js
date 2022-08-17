import React from "react";
import PortfolioStock from "./PortfolioStock";

function PortfolioContainer({myPortfolioData, handleDelete}) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {myPortfolioData.map((myStock, index) => 
          <PortfolioStock key={index}  myStockData={myStock} handleDelete={handleDelete} />
        )}
    </div>
  );
}

export default PortfolioContainer;
