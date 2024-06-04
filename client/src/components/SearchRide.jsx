import React from 'react'
import InputItem from './InputItem'

function SearchRide({ onSubmit }) {
    
    const handleClick = () => {
        onSubmit();
    };

    return (
        <div className='search-container'>
            <h2>Get a Ride</h2>

            <InputItem type='from'/>
            <InputItem type='to'/>

            <button className='btn' id="submit" onClick={handleClick}>Submit</button>
        </div>
    )
}

export default SearchRide
