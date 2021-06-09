import React from 'react';

import Spinner from "./../Spinner";
import useFetch from "../services/useWeatherFetchHook";
import WeatherTable from './WeatherTable';

function WeatherDashboard(props) {
  
    const { data: weatherData, loading, error } = useFetch();
    if (error) throw error;
    if (loading) return <Spinner />;
    // console.log('Weather Detail: ',weatherData)
    return (
        <div className=""> 
            <h2 className="h2-header">Insight Weather Report</h2>           
            {       
                weatherData.sol_keys && weatherData.sol_keys.length > 0 ? <WeatherTable data={weatherData} /> : ""
            }
        </div>
    );
}

export default WeatherDashboard;