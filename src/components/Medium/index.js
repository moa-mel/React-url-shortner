import React from 'react'
import "./styles.css"
import MediumImg from './web-design.svg';

const Medium = () => {
  return (
    <div className='medium'>
    <div className='container'>
    <div className='header-content'>
      <div className='contant-main'>
        <h1>Delicious food for your cravings</h1>
        <p>We made fresh and healthy meals with different recipes</p>
      </div>
    </div>
    <img className='header-img' src={MediumImg} alt='banner' />
  </div>
  </div>
  )
}

export default Medium
