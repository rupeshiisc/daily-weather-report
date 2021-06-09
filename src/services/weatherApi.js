import * as API_END_POINT from './constant';

export async function getDailyWeather() {
    const response = await fetch(API_END_POINT.DAILY_WEATHER_API_ENDPOINT);
    if (response.ok) return response.json();
    throw response;
}

export async function getRoverCapturedData(sol_key) {
  const apiEndPoint = API_END_POINT.ROVER_CAM_PIC_API.replace('sol_key', sol_key);
  console.log("apiEndPoint: ", apiEndPoint);
  const response = await fetch(apiEndPoint);
  if (response.ok) return response.json();
  throw response;
}