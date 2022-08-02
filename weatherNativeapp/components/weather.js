import React, {useEffect, useState } from 'react';
import { Image} from 'react-native';
import Loading from './loading';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import '../app.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';


const Weather = () => {

    const [loading, setLoading] = useState(true)
    const [currentWeather, setCurrentWeather] = useState()
    const [city, setCity] = useState('')

    const api_key = "2de7274b6379bbe766ccc2efc3574c23"

    const fetchData = () => {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + "pretoria" + "&appid=" + api_key)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setCurrentWeather(data)

            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => setLoading(false))
    }

    const searchByCity = () => {
        console.log(city)
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + api_key)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setCurrentWeather(data)

            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => setLoading(false))

    }
    useEffect(() => {
        setLoading(true)
        fetchData()
    }, [])

    return (
        <body>
            {loading ? <Loading />
                :
                <div className='container'>
                    <h3 className='display-3  myTitle mt-2'>Tribe Weather Service</h3>
                    <div className='row pt-3'>
                        <div className='col-md-12 search_view'>
                            <input className='search' placeholder='Search city..' onChangeText={(e) => setCity(e)} />
                            <Ionicons className='search_icon' name="search" size={30} onPress={() => searchByCity()} />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12 display_img'>
                            <Image className='display_icon' source={{ uri: "http://openweathermap.org/img/wn/" + currentWeather.weather[0].icon + "@2x.png" }} />
                            <div className='temp_D'>
                                {(currentWeather.main.temp - 279.15).toFixed(2)} <span style={{ color: "#F4DC8C" }}>c</span>
                            </div>
                            <div style={{ color: 'white', fontSize: 20, marginLeft: 50 }}>
                                {currentWeather.weather[0].description}
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='container info'>
                                <div className='location_Container'>
                                    <Entypo style={{ marginLeft: '25px', position: 'absolute', marginTop: '-150px' }} name="location-pin" size={20} color="#F4DC8C" />
                                    <div style={{ color: 'white',marginTop: '-125px', fontSize: 13, position: 'absolute', marginLeft: '15px' }}>{currentWeather.name}</div>

                                </div>

                                <div className='location_Container'>
                                    <div className='weatherFormat' style={{position: 'absolute', marginTop: '-110px' }}>Humidity </div>
                                    <div style={{ color: 'white', fontSize: 13, marginLeft: '15px',position: 'absolute', marginTop: '-85px'  }}><span> </span>{currentWeather.main.humidity}<span>%</span></div>

                                    <div className='inline' style={{position: 'absolute', marginTop: '-70px' }}>Pressure </div>
                                    <div style={{ color: 'white', fontSize: 13, marginLeft: '15px', position: 'absolute', marginTop: '-50px' }}><span> </span>{currentWeather.main.pressure} <span>hPa</span></div>
                                </div>

                                <div className='location_Container'>
                                    <div className='inline' style={{position: 'absolute', marginTop: '-30px' }}>Wind speed </div>
                                    <div style={{ color: 'white', fontSize: 13, marginLeft: '15px', position: 'absolute', marginTop: '-10px' }}><span> </span>{currentWeather.wind.speed}<span> Mph</span></div>
                                    <div className='inline' style={{position: 'absolute', marginTop: '5px' }}>Wind gust </div>
                                    <div style={{ color: 'white', fontSize: 13, marginLeft: '15px', position: 'absolute', marginTop: '25px' }}><span> </span>{currentWeather.wind.gust}<span> Knots</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='dateContainer'>
                                <div className='dateFormat display-1'>
                                    Today
                                </div>

                                <div className='dateFormat'>
                                    {new Date().toDateString()}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            }

        </body>
    );
};

export default Weather;
