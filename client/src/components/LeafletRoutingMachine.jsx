import { useEffect, useRef } from 'react';

import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import { useMap } from 'react-leaflet';

import location from '../location.json';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
    iconUrl: require('leaflet/dist/images/marker-icon.png').default,
    shadowUrl: require('leaflet/dist/images/marker-shadow.png').default,
});

function LeafletRoutingMachine({ onDistanceUpdate, onHandleStartAndEnd }) {

    const map = useMap();
    const routingControlRef = useRef(null);

    useEffect(() => {
        
        map.setMinZoom(2);

        const setUpMaker = () => {
            const startMarker = document.getElementById('start');
            const endMarker = document.getElementById('end');

            if (startMarker && endMarker) {

                const startLocation = location.find(place => place.city === startMarker.value);
                const endLocation = location.find(place => place.city === endMarker.value);

                if (startLocation && endLocation) {

                    onHandleStartAndEnd(startLocation.city, endLocation.city)

                    const R = 6371;
                    const dLat = (endLocation.lat - startLocation.lat) * Math.PI / 180;
                    const dLon = (endLocation.lng - startLocation.lng) * Math.PI / 180;
                    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                        Math.cos(startLocation.lat * Math.PI / 180) * Math.cos(endLocation.lat * Math.PI / 180) *
                        Math.sin(dLon / 2) * Math.sin(dLon / 2);
                    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                    const distance = R * c;

                    onDistanceUpdate(distance)

                    if (routingControlRef.current) {
                        map.removeControl(routingControlRef.current);
                    }

                    const routingControl = L.Routing.control({
                        waypoints: [
                            L.latLng(startLocation.lat, startLocation.lng),
                            L.latLng(endLocation.lat, endLocation.lng)
                        ],
                        lineOptions: {
                            styles: [
                                {
                                    color: '#fe5da0',
                                    weight: 6,
                                }
                            ]
                        },
                        routeWhileDragging: false,
                        draggableWaypoints: false,
                        addWaypoints: false,
                    }).addTo(map);

                    routingControlRef.current = routingControl;
                }
            }
        };

        const submitButton = document.getElementById('submit');
        submitButton.addEventListener('click', setUpMaker);

        return () => {
            submitButton.removeEventListener('click', setUpMaker);
        };
        
    }, [map]);

    return null;
}

export default LeafletRoutingMachine;
