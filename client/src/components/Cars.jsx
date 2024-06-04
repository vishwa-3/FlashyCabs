import React from 'react';
import { Link } from 'react-router-dom';

import suv from '../assets/suv.png'
import hatchback from '../assets/hatchback.png'
import compact from '../assets/compact.png'
import sedan from '../assets/sedan.png'

import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

import axios from 'axios';

function Cars({ distance, type, startLoc, endLoc }) {

  let carImage, carType, carNo, price;

  function generateCarNumber() {
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let firstPart = '';
    for (let i = 0; i < 3; i++) {
      firstPart += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    let secondPart = '';
    for (let i = 0; i < 4; i++) {
      secondPart += Math.floor(Math.random() * 10);
    }

    let carNumber = firstPart + ' ' + secondPart;

    return carNumber;
  }


  if (type === 'suv') {
    carImage = suv;
    carType = type;
    price = distance * 25;
    carNo = generateCarNumber();
  }
  else if (type === 'compact') {
    carImage = compact;
    carType = type;
    price = distance * 22;
    carNo = generateCarNumber();
  }
  else if (type === 'hatchback') {
    carImage = hatchback;
    price = distance * 18;
    carType = type;
    carNo = generateCarNumber();
  }
  else {
    carImage = sedan;
    price = distance * 20;
    carType = type;
    carNo = generateCarNumber();
  }

  const handlePayment = async () => {
    axios.post('http://localhost:3000/payment', { distance, price, carType, startLoc, endLoc })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  };

  return (
    <div className='cars'>
      <img src={carImage} alt="car" />

      <div className='car-details'>
        <div>{carType}</div>
        <div>{carNo}</div>
        <div className='price'><CurrencyRupeeIcon />{(price).toFixed(2)}</div>
      </div>
      
      <Link onClick={handlePayment} to="/payment" className='go-btn'>Go</Link>
    </div>
  );
}

export default Cars;
