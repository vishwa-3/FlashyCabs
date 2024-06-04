import React, { useState } from 'react';

import locations from '../location.json';

function InputItem(props) {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    const filteredCities = filterCitiesByInput(value);
    setSuggestions(filteredCities);
  };

  const filterCitiesByInput = (input) => {

    if (input.trim() === '') return [];

    const filtered = locations.filter(location =>
      input
        .toLowerCase()
        .split('')
        .every((letter, index) =>
          location.city.toLowerCase().charAt(index) === letter
        )
    );

    return filtered.slice(0, 8);
  };

  const handleSuggestionClick = (cityName) => {
    setInputValue(cityName);
    setSuggestions([]);
  };

  return (
    <div className='search-input'>

      <i className={(props.type === 'from') ? "ri-map-pin-user-line" : "ri-map-pin-line"}></i>

      <input
        id={(props.type === 'from') ? 'start' : 'end'}
        type="text"
        placeholder={(props.type === 'from') ? 'starting point' : 'destination point'}
        value={inputValue}
        onChange={handleInputChange}
      />

      {
        suggestions.length > 0 && (
          <div className="dropdown">
            {suggestions.map(location => (
              <div key={location.lat} className='suggestion' onClick={() => handleSuggestionClick(location.city)}>
                {location.city}
              </div>
            ))}
          </div>
        )
      }
    </div>
  );
}

export default InputItem;
