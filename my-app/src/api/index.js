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