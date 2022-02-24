import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async ()=>{
  try{
    const {data :{ confirmed, deaths, lastUpdate }} = await axios.get(url);
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
    alert("Daily取得失敗");
  }
};

