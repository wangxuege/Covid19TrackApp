import React from 'react'
import CountUp from "react-countup";
import moment from "moment";
import 'moment/locale/ja'

export const Cards = ({data :{ confirmed, deaths, lastUpdate }}) => {

  
  if(!confirmed) {
    return "Loading...";
  }

  console.log({data :{ confirmed, deaths, lastUpdate }});
  return (
    <div className="ui stackable cards">
      <div className="card">
        <div className="content">
          <div className="description">感染者数</div>
          <div className="header">
            <CountUp
              start={0}
              end={confirmed.value} 
              duration={3}
              separator=","
            />
          </div>
          <div className="meta">{moment(lastUpdate).fromNow()}</div>
        </div>
      </div>
      <div className="card">
        <div className="content">
          <div className="description">死亡者数</div>
          <div className="header">
            <CountUp
              start={0}
              end={deaths.value} 
              duration={3}
              separator=","
            />
          </div>
          <div className="meta">{moment(lastUpdate).fromNow()}</div>
        </div>
      </div>
    </div>
  )
}
