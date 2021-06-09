import React from 'react';
import { getRoverCapturedData } from './../services/weatherApi';

function WeatherRowData(props) {
    // console.log('weather in table row', props.weatherObj);

    const displayCamView = (e) => {
        const sol_key = e.target.getAttribute('value');
        async function callApi (sol_key) {            
            const roverData = await getRoverCapturedData(sol_key);
            console.log("api data:", roverData);
        }
        callApi(sol_key);
    }

    if (props) {        
        // console.log('weather in table row', weather);
        const getDateFormat = (date) => {
            return date ? date.split('T')[0] : '';
        }
        return (
            <>
                <tr key={props.weather.key}>
                    <td>{getDateFormat(props.weather.Last_UTC)}</td>
                    <td><a href="javascript:void(0)" value={props.weather.key} onClick={displayCamView}>{props.weather.key}</a></td>
                    <td>{props.weather.PRE.mx}</td>
                    <td>{props.weather.PRE.av}</td>
                    <td>{props.weather.PRE.mn}</td>
                </tr>  
            </>
        );
    }
}

export default WeatherRowData;