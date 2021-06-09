import React, { useRef } from 'react';
import WeatherRowData from './WeatherRowData'
import { getRoverCapturedData } from './../services/weatherApi';
import Modal from './Modal';

function WeatherTable(props) {
    
    const renderWeatherRowData = (weather) => {
        return <WeatherRowData weather={weather}/>
    }
    const getWeatherRows  = (weather) => {
        
        if(weather.sol_keys && weather.sol_keys.length > 0) {
            return weather.sol_keys.map((key) => {
                return renderWeatherRowData({...weather[key], key});
            })           
        }        
    }

    const modalRef = useRef();
    const openModal = () => {

        async function callApi () {
            const sol_key = 675;
            const roverData = await getRoverCapturedData(sol_key);
            // console.log("api data:", roverData);

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
            <button onClick={openModal} >Call ROVER API</button> 
        </div>
    );
}

export default WeatherTable;