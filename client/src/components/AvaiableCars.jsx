import React from 'react';
import Cars from './Cars';

function AvaiableCars({ distance, startLoc, endLoc }) {
    return (
        <div className='car-list'>
            <h2>Available Cars</h2>
            <div className='types'>
                <Cars distance={distance} startLoc={startLoc} endLoc={endLoc} type='suv' />
                <Cars distance={distance} startLoc={startLoc} endLoc={endLoc} type='compact' />
                <Cars distance={distance} startLoc={startLoc} endLoc={endLoc} type='sedan' />
                <Cars distance={distance} startLoc={startLoc} endLoc={endLoc} type='hatchback' />
            </div>
        </div>
    );
}

export default AvaiableCars;
