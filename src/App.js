import './App.css';
import WeatherDashboard from './components/WeatherDashboard';

function App() {
  return (
    <div className="App row">
      <div className="col-1"></div>
      <div className="col-8">
        <WeatherDashboard />      
      </div> 
      <div className="col-3"></div>
    </div>
  );
}

export default App;
