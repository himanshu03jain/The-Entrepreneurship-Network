import React from 'react';
import './Footer.css';
import { Button } from '../Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Subscribe to our Newsletter
        </p>
        {/* <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p> */}
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='fname'
              type='text'
              placeholder='First name'
            />
            <input
              className='footer-input'
              name='lname'
              type='text'
              placeholder='Last name'
            />
            <input
              className='footer-input'
              name='mobile'
              type='tel'
              placeholder='Mobile No.'
            />
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            {/* <input className='footer-input' 
                type="checkbox" 
                  
                />Join TEN Discod community */}
            <Button buttonStyle="btn--medium" >Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
          <a href="https://www.facebook.com/The-Entrepreneurship-Network-105155667888383/">
            <img src="images/fb.webp" />
          </a>
          <a href="https://twitter.com/We_Are_TEN?s=08">
            <img src="images/tw.webp" />
          </a>
          <a href="https://www.instagram.com/theentrepreneurshipnetwork/">
            <img src="images/ig.webp" />
          </a>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            {/* <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link> */}
          </div>
          <div class='footer-link-items'>
            <a href="https://www.entrepreneurshipnetwork.net/contact"><h2>FAQ's</h2></a>
            {/* <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link> */}
          </div>
          <div class='footer-link-items'>
            <a href="https://www.entrepreneurshipnetwork.net/contact"><h2>Contact Us</h2></a>
            {/* <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link> */}
          </div>
        </div>
      </div>
      {/* <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              TRVL
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>TRVL © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section> */}
      <div className="last">
        <h3 className="lastline">© 2020 Limitless Technologies - The Entrepreneurship Network</h3>
      </div>
    </div>
  );
}

export default Footer;
