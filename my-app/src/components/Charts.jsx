import React, { useState } from 'react'
import { useEffect } from 'react';
import { fetchDailyData } from '../api';
import {Line, Bar} from "react-chartjs-2"; 
import  Chart from 'chart.js/auto';
import "../App.css";

export const Charts = () => {

  const [dailyData, setDailyData] = useState([]);

  useEffect(() =>{
    (async() => {
      setDailyData(await fetchDailyData());
    })()
  },[]);

  const lineData = {
    labels: dailyData.map(({date}) => date) ,
    datasets: [{
      data: dailyData.map(({confirmed}) => confirmed) ,
      label: "感染者数",
      fill: true,
      borderColor: "pink",
      backgroundColor:"rgba(150, 0, 200, 0.4)",
    },{
      data: dailyData.map(({deaths}) => deaths) ,
      label: "死亡者数",
      fill: true,
      borderColor: "skyblue",
      backgroundColor: "rgba(0, 150, 255, 0.5)"
    }],

  };

  return (
    <div className='LineChart'>
      <Line data={lineData} />
    </div>
  )
};
