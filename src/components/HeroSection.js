import React from 'react';
import { Button } from './Button';
import '../App.css';
import './heroSection.css';
import video1 from './video-1.mp4';


function HeroSection() {
  return (
    <div className='hero-container'>
        <video src="videos/video-2.mp4"   autoPlay loop muted/>
        <h1>Adventure awaits</h1>
        <p>What are you waiting for</p>

        <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Get started 
                </Button>

                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    watch trailer
                    <i className='far fa-play-circle'/>
                </Button>
        </div>
    </div>
  )
}

export default HeroSection;