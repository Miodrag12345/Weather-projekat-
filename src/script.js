import axios from 'axios';
import "../styles/style.css";
import {getUserLocation} from "./components/location";
import {getCurrentWeatherForLocation, getWeatherForUpcomingDays} from "./components/weather";
import {getDateInFuture} from "../helpers/datehelper";
import {getGeoLocationForCoords} from "./components/openWeatherApi";


let location = localStorage.getItem("location") || getUserLocation();
updateLocation(location);

document.getElementById("changeLocation").addEventListener("click", () =>{

    updateLocation(getUserLocation())

} )

document.getElementById("ShowWeatherForMyLocation").addEventListener("click", async () =>{


    if(!navigator.geolocation){
      return alert("Vas broser ne podrzava prikazivanje geo lokacije")
    }
     navigator.geolocation.getCurrentPosition(( async (position) => {
         const  lat=position.coords.latitude;
         const  lon=position.coords.longitude;

         let coords= await getGeoLocationForCoords(lat,lon)

         let cityName=coords.data[0]['name']

         if(cityName.includes("Municipality")){
             cityName=cityName.replace("Municipality","");
         }

         location=coords.data[0]['name'];

          updateLocation(cityName)

     }))
});



// http://api.weatherapi.com/v1/current.json?key=72baa82a0f2747ca81c174131251512&q=London&aqi=no

try {

    const response=await getCurrentWeatherForLocation(location);

    if(response.data.current.is_day){
        document.querySelector("body").style.backgroundColor="#383838"
    }
} catch (error){
    alert("Desila se greska prilikom  uzimanja prognoze za ovu lokaciju pokusajte kasnije.")
}

const forecastResponse=await getWeatherForUpcomingDays(location,3)

for(let forecast of forecastResponse.data.forecast.forecastday){
    console.log("Na dan:" + forecast.date + "bice maksimalna temperatura "+forecast.day.maxtemp_c + "a minimalna"+forecast.day.mintemp_c)

}




const dateFormatted=getDateInFuture(30)
const futureWeather=await getWeatherInFuture(location,dateFormatted);
console.log(futureWeather);

function  updateLocation (newLocation){
    location=newLocation;
    localStorage.setItem("location",newLocation);
}


