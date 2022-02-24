import axios from "axios";
import { Cards } from "./components/Cards";
import { Chart } from "./components/Chart";
import { CountryPicker } from "./components/CountryPicker";
import "./App.css";
import { useEffect, useState } from "react";

function App() {

  const [data, setData] = useState([]);

  useEffect(() =>{
    const url = "https://covid19.mathdro.id/api";
    const fetchedData = async ()=>{
      try{
        const {data :{ confirmed, deaths, lastUpdate }} = await axios.get(url);
        setData({ confirmed, deaths, lastUpdate })
      }catch (err){
        console.error(err);
        alert("取得失敗");
      }
    };
    fetchedData();
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
