import React, { useRef } from 'react';
import WeatherRowData from './WeatherRowData'
import { getRoverCapturedData } from './../services/weatherApi';
import Modal from './Modal';

function WeatherTable(props) {
    

    const displayCamView = (e) =>{
        const sol_key = e.target.getAttribute('value');
        openModal(sol_key);
    }
    const renderWeatherRowData = (weather) => {        
        return <WeatherRowData weather={weather} displayCamView={displayCamView}/>
    }
    const getWeatherRows  = (weather) => {
        
        if(weather.sol_keys && weather.sol_keys.length > 0) {
            return weather.sol_keys.map((key) => {
                return renderWeatherRowData({...weather[key], key});
            })           
        }        
    }

    const modalRef = useRef();
    const openModal = (solKey) => {

        async function callApi () {
            const roverData = await getRoverCapturedData(solKey);
            console.log("api data:", roverData);

            modalRef.current.openModal(roverData);
        }
        callApi();
        
    }

    return (
        <div className="row table-row">
            <Modal ref={modalRef}></Modal>
            <div className="col col-lg-6 time-header">Time</div>
            <div className="col col-lg-6">Pressure(PA)</div>
            <hr/>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Sol</th>
                        <th>Max.</th>
                        <th>Avg.</th>
                        <th>Min</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        getWeatherRows(props.data)
                    }
                </tbody>
            </table>            
        </div>
    );
}

export default WeatherTable;