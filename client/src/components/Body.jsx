import React, { useState } from 'react';
import SearchRide from './SearchRide.jsx';
import MapView from './MapView.jsx';
import AvaiableCars from './AvaiableCars.jsx';

function Body() {
    const [showAvailableCars, setShowAvailableCars] = useState(false);
    const [distance, setDistance] = useState(0);
    const [startLoc, setStartLoc] = useState('');
    const [endLoc, setEndLoc] = useState('');

    const handleSubmit = () => {
        ((startLoc && endLoc)  &&  (startLoc!==endLoc))? setShowAvailableCars(true) : alert("Type the Valid Starting Point and Destination Point");
    };

    const handleDistanceUpdate = (distance) => {
        setDistance(distance);
    };

    const handleStartAndEnd = (startLoc, endLoc) => {
        setStartLoc(startLoc);
        setEndLoc(endLoc);
    }

    return (
        <div className='main-container'>
            <div className='search'>
                <SearchRide onSubmit={handleSubmit} />
                {showAvailableCars && <AvaiableCars distance={distance} startLoc={startLoc} endLoc={endLoc}/>}
            </div>
            <MapView onDistanceUpdate={handleDistanceUpdate} onHandleStartAndEnd={handleStartAndEnd}/>
        </div>
    );
}

export default Body;
