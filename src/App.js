import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import useAxios from './Hooks/useAxios';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function App() {


  const [ url, setUrl ] = useState('https://geo.ipify.org/api/v2/country?apiKey=at_gaAobZTl3XJcmja2rulChUGx9gFwi&ip')

const { err, location, isp, timeZone, ipAdress  } 
= useAxios({url: url});



  return (
    <div className="App">
      <Header />
      <div className='top-box'>
        <form onSubmit={'event.preventDefault();'}>
          <input required placeholder='Search For Any IP Address or Domain'/>
          <button className='submit'></button>
        </form>
        <div className='information'>
          <section className='ipAdress'>
            <h1>IP ADDRESS</h1>
            <p>{ipAdress}</p>
          </section>
          <section className='location'>
            <h1>LOCATION</h1>
            <p>{location}</p>
          </section>
          <section className='timezone'>
            <h1>TIMEZONE</h1>
            <p>{timeZone}</p>
          </section>
          <section className='isp'>
            <h1>ISP</h1>
            <p>{isp}</p>
          </section>
        </div>
      </div>
      <div className='map'>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          Your Location
        </Popup>
      </Marker>
    </MapContainer>



      </div>
      
    </div>
  );
}

export default App;

// https://geo.ipify.org/api/v2/country?apiKey=at_gaAobZTl3XJcmja2rulChUGx9gFwi&ip