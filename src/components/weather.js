import axios from "axios";

export async function getCurrentWeatherForLocation(location) {
    try {
        return await axios.get(process.env.API_URL + "/v1/current.json", {
            params: {
                key: process.env.API_KEY,
                q: location,
                aqi: "no"
            }
        });
    } catch (exception) {
        return alert("Something went wrong with getting current weather for location. Try again.");
    }
}


export async function getWeatherForUpcomingDays(location,days){
    try {
  return await axios.get(process.env.API_URL+"/v1/forecast.json" ,{
      params:{
      key:process.env.API_KEY,
      aqi:"no",
      alerts:"no",
      days:days,
      q:location}
  })
}catch (exception){
        return alert("Something went wrong with getting current weather for location. Try again.");
    }
}

export async function  getWeatherInFunction(location,date) {
    try {
        return await axios.get(process.env.API_URL + "/v1/future.json", {
            params: {
                key: process.env.API_KEY,
                dt: date,
                q: location

            }
        })
    } catch (exception){
        return alert("Something went wrong with getting current weather for location. Try again.");
    }
}


