import React from 'react';
import { getRoverCapturedData } from './../services/weatherApi';

function WeatherRowData({weather, displayCamView}) {
    // console.log('weather in table row', props.weatherObj);

    

    if (weather) {        
        // console.log('weather in table row', weather);
        const getDateFormat = (date) => {
            return date ? date.split('T')[0] : '';
        }
        return (
            <>
                <tr key={weather.key}>
                    <td>{getDateFormat(weather.Last_UTC)}</td>
                    <td><a href="javascript:void(0)" value={weather.key} onClick={displayCamView}>{weather.key}</a></td>
                    <td>{weather.PRE.mx}</td>
                    <td>{weather.PRE.av}</td>
                    <td>{weather.PRE.mn}</td>
                </tr>  
            </>
        );
    }
}

export default WeatherRowData;