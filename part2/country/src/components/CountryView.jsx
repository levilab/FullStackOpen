import axios from "axios"
import { useEffect, useState } from "react";

const CountryView = ({country}) => {
    const apiKey = import.meta.env.VITE_SOME_KEY
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${country.name.common}&appid=${apiKey}&units=metric`
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        axios
        .get(weatherUrl)
        .then(response => {
            setWeather(response.data)
        })
        .catch(error => {
            console.log("Error fetching", error)
        })
    }
        , [weatherUrl])

    if (!weather) {
        return null
    }


    const imgURl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`


    return (
    <>
        <h1>{country.name.common}</h1>
        <div>{country.capital}</div>
        <div>{country.area} </div>
        <h2>Languages</h2>
        <ul>
            {Object.values(country.languages).map(language => <li> {language} </li> )}
        </ul>
        <img src={country.flags.png} alt="flag" />
        <h2> Weather in {weather.name}</h2>
        <p>Temperature {weather.main.temp} Celsius</p>
        <img src={imgURl} alt="" />
        <p>Wind {weather.wind.speed} m/s </p>

    </>
    )
}

export default CountryView