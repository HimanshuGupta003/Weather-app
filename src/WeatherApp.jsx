import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {

    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",   
        feelslike: 24.87,
        temp: 25.09,
        tempMin: 23.02,
        tempMax: 26.23,
        humidity: 47,
        weather: "haze"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign: "center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}