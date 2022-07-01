import React from 'react'
import "./styles.css"
import MediumImg from './web-design.svg';

const Medium = () => {
  return (
    <div className='medium'>
    <div className='container'>
    <div className='header-content'>
      <div className='contant-main'>
        <h1>Long url shortened</h1>
        <p>Save yourself the stress of those long links, just qat<span className='primary'>sar</span> it. </p>
      </div>
    </div>
    <img className='header-img' src={MediumImg} alt='banner' />
  </div>
  </div>
  )
}

export default Medium
