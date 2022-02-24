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

  return (
    <div className="App">
      <Cards data={data}/>
      <CountryPicker />
      <Charts />
    </div>
  );
}

export default App;
