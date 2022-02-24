import React, { useEffect, useState } from 'react'
import { fetchCountries } from '../api';

export const CountryPicker = ({ handleCountryChange }) => {

  const [countries, setCountries] = useState([]);

  useEffect(() =>{
    (async() => {
      setCountries(await fetchCountries());
    })()
  },[]);

  return (
    <div className="ui stackable form">
    <div className="field">
      <label>Country</label>
      <select 
      className="ui search dropdown" 
      defaultValue="" 
      onChange={(e) =>{
        handleCountryChange(e.target.value)
      }}>
        <option value="">Global</option>
        {countries.map((country, id) =>(
          <option value={country} key={id}>{country}</option>
        ))}
      </select>
    </div>
  </div>
  )
}
