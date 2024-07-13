import React from 'react';
import'./Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div  className='footer-container'>

    <section  className='footer-subscription'>
    <p className='footer-subscription-heading'>
        jion the WEXPLORE news letter to recieve our best vacation deals
    </p>

    <p  className='footer-subscription-text'>
      You can unsubcibe at anytime  
    </p>

    <div>
        <form>
           
         <input type="email" name="email" placeholder="example@gmail.com" className='footer-input'/>
         <Button buttonStyle="btn--outline">
            subscribe
         </Button>
        </form>
    </div>



    </section>
   <div className='footer-links'>
    <div className='footer-links-wrapper' >
        <div className='footer-links-items'>
          <h2>about us</h2>
          <Link to="/sign-up">How it works</Link>
          <Link to="/">Testimomial</Link>
          <Link to="/">Careers</Link>
          <Link to="/">Investors</Link>
          <Link to="/">Term of service</Link>
        </div>
    </div>
    <div className='footer-links-wrapper' >
        <div className='footer-links-items'>
          <h2>Contact us</h2>
          <Link to="/sign-up">How it works</Link>
          <Link to="/">Testimomial</Link>
          <Link to="/">Careers</Link>
          <Link to="/">Investors</Link>
          <Link to="/">Term of service</Link>
        </div>
    </div>
    <div className='footer-links-wrapper' >
        <div className='footer-links-items'>
          <h2>about us</h2>
          <Link to="/sign-up">How it works</Link>
          <Link to="/">Testimomial</Link>
          <Link to="/">Careers</Link>
          <Link to="/">Investors</Link>
          <Link to="/">Term of service</Link>
        </div>
    </div>
   </div>

   <section className='social-media'>
      <div className='social-media-wrap'>
        <div className='footer-logo'>
            <Link to='/' className='social-logo'>
            WEXPLORE<i className='fab fa-typo3'/>
            </Link>
        </div>
        <small className='website-rights'> WEXPLORE @ 2024</small>
        <div className='social-icons'>
          <Link className='social-icon-link facebook'
          target='_blank'
          to="/"
          aria-label='Facebook'
          >
            <i className='fab fa-facebook'/>
          </Link>
        </div>
          <Link className='social-icon-link facebook'
          target='_blank'
          to="/"
          aria-label='Facebook'
          >
            <i className='fab fa-instagram'/>
          </Link>
        </div>
   </section>
    </div>
 


  )
}

export default Footer