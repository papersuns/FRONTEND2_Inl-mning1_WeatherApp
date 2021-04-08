import './App.css';
import WeatherContainer from './containers/WeatherContainer';

/*
Startsida: Väder i Stockholm idag (aktuell plats, temperatur, datum, tid)
Detaljvy: 5 dagars prognos (min/max temperatur, datum, väderbild)
Sökfunktion: olika platser
Images by amCharts
*/

function App() {
  return (
    <div className="container">
      <WeatherContainer/>
    </div>
  );
}

export default App;
