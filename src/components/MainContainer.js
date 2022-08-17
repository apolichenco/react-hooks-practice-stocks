import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [permanentStocks, setPermanentStocks] = useState([])
  const [myPortfolio, setMyPortfolio] = useState([])
  const [sort, setSort] = useState("Alphabetically")

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then((r) => r.json())
    .then((data) => {
      setStocks(data)
      setPermanentStocks(data)})
  }, [])

  function handleCategories(category) {
    const categorisedStocks = permanentStocks.filter((stock) => stock.type === category)
    setStocks(categorisedStocks)
  }

  function handleAddingPortfolio(e) {
    const name = e.target.innerHTML
    const addedStock = stocks.find((stock) => stock.name === name)
    setMyPortfolio([...myPortfolio, addedStock])
  }

  function handleRemovingPortfolio(e) {
    const name = e.target.innerHTML
    const deletedStock = myPortfolio.filter((stock) => stock.name !== name)
    setMyPortfolio(deletedStock)
  }

  let stocksList = []
  if (sort === "Alphabetically") {
    stocksList = stocks.sort(function(a, b){
      let x = a.ticker.toLowerCase();
      let y = b.ticker.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    })
  }
  if (sort === "Price") {
    stocksList = stocks.sort(function(a, b){return a.price - b.price})
  }

    return ( 
      <div>
        <SearchBar onTypeChange={handleCategories} onSortingChange={setSort}/>
        <div className="row">
          <div className="col-8">
            <StockContainer stocksData={stocksList} handleAdd={handleAddingPortfolio}/>
          </div>
          <div className="col-4">
            <PortfolioContainer myPortfolioData={myPortfolio}  handleDelete={handleRemovingPortfolio} />
          </div>
        </div>
      </div>
    );
}

export default MainContainer;
