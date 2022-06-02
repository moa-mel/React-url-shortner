import React from 'react';
import './styles.css';
import bannerImg from './website-hosting.svg';

const Banner = ({ handleScrollMenu }) => (
  < div className='banner'>
    <div className='header-content'>
      <div className='content-main'>
        <h1>Shorten, personalize, and share fully branded short URLs.</h1>
        <p>We simplify it </p>
        <button onClick={handleScrollMenu}>
          View Menu <i className='fas fa-long-arrow-alt-right'></i>
        </button>
      </div>
    </div>
    <img className='header-img' src={bannerImg} alt='banner' />
  </div>
);

export default Banner;