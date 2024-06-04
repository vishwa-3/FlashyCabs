import React from 'react';

import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.js';

import LeafletRoutingMachine from './LeafletRoutingMachine';

function MapView({ onDistanceUpdate, onHandleStartAndEnd }) {
    return (
        <div className='map-container'>
            <MapContainer center={[8.7642, 78.1348]} zoom={13} style={{ height: '100%', width: '100%' }}>

                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                <LeafletRoutingMachine onDistanceUpdate={onDistanceUpdate} onHandleStartAndEnd={onHandleStartAndEnd} />

            </MapContainer>
        </div>
    );
}

export default MapView;
