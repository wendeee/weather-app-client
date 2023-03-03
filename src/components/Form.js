import React, { useState } from "react";

export default function Form() {
  //add state
  const [city, setCity] = useState("");
 
  const [description, setDescription] = useState()
 
  const handleSubmit = (event) => {
    event.preventDefault();
    const cityName = city;

    const fetchData = async (cityName) => {
      try{
        let response = await fetch(
          `https://weather-api.onrender.com/api/v1/city/${cityName}`
        );
        if (!response.ok) throw new Error ('City not found! Enter a valid city name')
        response = await response.text();
        const str = new window.DOMParser().parseFromString(response, "text/xml");
        const data = str.getElementsByTagName("description")[0].innerHTML;
       
        return setDescription(data)
      }catch(err){
        console.log(err)
        setDescription(err.message)
      }
    };

    fetchData(cityName);
  };
 
  return (
  
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter the name of a city"
          name="city"
          value={city}
          onChange={(event) => {
            setCity(event.target.value);
          }}
          onFocus={(event) => event.target.value = ''}
          required
        ></input>
        <button type="submit">Find</button>
      </form> 
      <div className="display--section">
      <p >{description}</p>
      </div> 
    </div>

  );
}
