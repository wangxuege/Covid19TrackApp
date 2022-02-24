import { Cards } from "./components/Cards";
import { Charts } from "./components/Charts";
import { CountryPicker } from "./components/CountryPicker";
import "./App.css";
import { useEffect, useState } from "react";
import { fetchData } from "./api";

function App() {

  const [data, setData] = useState({});

  useEffect(() =>{
    (async() => {
      setData(await fetchData());
    })()
  },[])

  const handleCountryChange =async (country) =>{
    setData(await fetchData(country));
  };

  return (
    <div className="App">
      <Cards data={data}/>
      <CountryPicker handleCountryChange={handleCountryChange}/>
      <Charts data={data}/>
    </div>
  );
}

export default App;
