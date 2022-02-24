import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country)=>{

  let changeablUrl = url;
  
  if(country){
    changeablUrl = `${url}/countries/${country}`
  }

  try{
    const {data :{ confirmed, deaths, lastUpdate }} = await axios.get(changeablUrl);
    return{ confirmed, deaths, lastUpdate };
  }catch (err){
    console.error(err);
    alert("取得失敗");
  }
};

export const fetchDailyData = async ()=>{
  try{
    const {data} = await axios.get(`${url}/daily`);
    const modifiedDailyData = data.map((dailydata) =>({
      confirmed: dailydata.confirmed.total,
      deaths : dailydata.deaths.total,
      date: dailydata.reportDate,
    }))
    return modifiedDailyData;
  }catch (err){
    console.error(err);
  }
};

export const fetchCountries = async ()=>{
  try{
    const {data :{ countries }} = await axios.get(`${url}/countries`);
    return countries.map((country) =>country.name);
  }catch (err){
    console.error(err);
  }
};
