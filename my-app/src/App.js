import { Cards } from "./components/Cards";
import { Chart } from "./components/Chart";
import { CountryPicker } from "./components/CountryPicker";
import "./App.css";
import { useEffect, useState } from "react";
import { fetchData } from "./api";

function App() {

  const [data, setData] = useState([]);

  useEffect(() =>{
    (async() => {
      const fetchedData = await fetchData();
      setData(fetchedData);
    })()
  },[])

  return (
    <div className="App">
      <Cards data={data}/>
      <CountryPicker />
      <Chart />
    </div>
  );
}

export default App;
