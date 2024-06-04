import React, { useState } from 'react';

import logo from '../assets/logowhite.png';

import axios from 'axios'

function PaymentPage() {
  const [cardName, setCardName] = useState('')
  const [email, setEmail] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cvv, setCvv] = useState('')
  const [expireDate, setExpireDate] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()

    if (cardNumber.trim().length !== 16 || !/^\d+$/.test(cardNumber.trim())) {
      alert('Please enter a valid 16-digit card number');
      return;
    }

    if (cvv.trim().length !== 3 || !/^\d+$/.test(cvv.trim())) {
      alert('Please enter a valid 3-digit CVV');
      return;
    }

    const currentDate = new Date();
    const [expiryMonth, expiryYear] = expireDate.split('/');
    const expiryDate = new Date(parseInt(expiryYear), parseInt(expiryMonth) - 1);

    if (expiryDate <= currentDate) {
      alert('Please enter a valid expiration date');
      return;
    }
    
    if (!email.endsWith('@gmail.com')) {
      alert('Please enter a valid Gmail address.');
      return;
    }

    alert("Congratulations! Payment Successful. Check Your Inbox for Confirmation!")


    axios.post('http://localhost:3000/payment', { cardName, email, cardNumber, cvv, expireDate })
      .then(res => console.log(res))
      .catch(err => console.log(err))

    e.target.reset();
  }

  return (
    <div className='payment'>
      <div className='form'>

        <div className='logo-pay'>
          <img src={logo} alt="logo" width={120} />
        </div>

        <div className="container">
          <h2>Payment Process</h2>
          <form onSubmit={handleSubmit}>

            <div className='input-container'>
              <label htmlFor="cardName">Card Name : </label>
              <input
                type='text'
                id='cardName'
                name='cardName'
                onChange={(e) => setCardName(e.target.value)}
                placeholder='Enter user name...' required />
            </div>

            <div className='input-container'>
              <label htmlFor="email">Email ID : </label>
              <input
                type='email'
                id='email'
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter Email id...' required />
            </div>

            <div className='input-container'>
              <label htmlFor="cardNumber">Card Number : </label>
              <input
                type='text'
                id='cardNumber'
                name='cardNumber'
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder='Enter Card number...' required />
            </div>

            <div className='input-container'>
              <label htmlFor="cvv">CVV : </label>
              <input
                type='text'
                id='cvv'
                name='cvv'
                onChange={(e) => setCvv(e.target.value)}
                placeholder='Enter cvv number...' required />
            </div>

            <div className='input-container'>
              <label htmlFor="expireDate">Expired Date : </label>
              <input
                type='text'
                id='expireDate'
                name='expireDate'
                onChange={(e) => setExpireDate(e.target.value)}
                placeholder='(MM/YYYY)' required />
            </div>

            <button type="submit" className='btn'>Pay Now</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
