import React, { useState } from 'react';
import InputItem from './InputItem';

function SearchRide({ onSubmit }) {
    const [activeInput, setActiveInput] = useState(null);

    const handleInputFocus = (inputType) => {
        setActiveInput(inputType);
    };

    const handleClick = () => {
        onSubmit();
    };

    return (
        <div className='search-container'>
            <h2>Get a Ride</h2>

            <InputItem
                type='from'
                isActive={activeInput === 'from'}
                onFocus={() => handleInputFocus('from')}
            />
            <InputItem
                type='to'
                isActive={activeInput === 'to'}
                onFocus={() => handleInputFocus('to')}
            />

            <button className='btn' id="submit" onClick={handleClick}>Submit</button>
        </div>
    );
}

export default SearchRide;
