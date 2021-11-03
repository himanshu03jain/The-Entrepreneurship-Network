import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      <div className='home__hero-section'>
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection:'row-reverse'
            }}>
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <div className='top-line'>About US</div>
                <h1 className='heading dark'>
                Learning together from the comfort of your home
                </h1>
                {/* <p className='home__hero-subtitle dark'>
                Learn together from comfort of your home
                </p> */}
                <Link to='/about'>
                  <button className='button button-white button-animate'>
                    Learn more
                  </button>
                </Link>
              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper'>
                <img src="./images/aboutxx.webp" className='home__hero-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;