import React from 'react'
import './styles.css' 

const Footer = () => {
  return (
    <div className="footer">
    <div className='container'>
    <div className="col col-1">
    <h1>qat<span className='primary'>sar</span></h1>
    </div>
    <div className="col">
    <h5>Support</h5>
                    <span className='bar'></span>
                        <a href='/'>Contact Us</a>
                        <a href='/'>Chat</a>
                        <a href='/'>Help Center</a>
                        <a href='/'>FAQ</a>
    </div>
    <div className='col'>
    <h5>Developers</h5>
    <span className='bar'> </span>
        <a href='/'>Cloud</a>
        <a href='/'>Commerce</a>
        <a href='/'>Pro</a>
        <a href='/'>API</a>
   
</div>
<div className='col'>
    <h5>Company</h5>
    <span className='bar'> </span>
        <a href='/'>About</a>
        <a href='/'>Information</a>
        <a href='/'>Legal</a>
        <a href='/'>Privacy</a>
</div>

    </div>
    </div>
  )
}

export default Footer