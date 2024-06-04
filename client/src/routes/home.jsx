import React from 'react';
import Header from '../components/Header';

import carmp4 from '../assets/car.mp4'

function HomePage() {
  return (
    <div className='home-page'>
      <Header type="home"/>

      <div className='about'>
        <div className='title'>Flashy<span>Cabs</span></div>
        <div className='para'>
            Our focus is to make a safe ride for the passengers with an precise pickup and drop to their desired destination. We understand that every client is unique, and our customizable services cater to individual preferences. Your destination awaits, and we are here to elevate your journey to the extraordinary.
        </div>
      </div>
      
      <div className="video-background">
        <video autoPlay muted loop>
          <source src={carmp4} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default HomePage;
