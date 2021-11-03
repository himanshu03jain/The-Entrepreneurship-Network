import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Online Courses</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/dm1.webp'
              text='Digital Marketing'
              label='Best course'
              path='/onlinecourse'
            />
            <CardItem
              src='images/pm1.webp'
              text='Product Management like a pro'
              label='Best course'
              path='/onlinecourse'
            />
          </ul>
          <h1>Our Course Benifits </h1>
          <ul className='cards__items'>
            <CardItem
              src='images/et.jpg'
              text='Our instructors are more adept at monitoring student problems and assessing their level of understanding and progress, and they provide much more relevant, useful feedback.
We are experts in developing and testing hypotheses about learning difficulties or instructional strategies.'
              label='Expert Teachers'
              path='/onlinecourse'
            />
            <CardItem
              src='images/oc.jpg'
              text='Feel like home, with a "family of invisible friends".'
              label='Online Community'
              path='/onlinecourse'
            />
            <CardItem
              src='images/fc.jpg'
              text='Our expert teachers design and curate the curriculum using best practices and careful consideration of how people learn and retain information with the ongoing tech trends in the professional domain. We have debated every facet of our methodology, from the order in which to teach concepts, the analogies used to clarify them and how exercises should be structured to deliver the maximum educational punch.'
              label='Flexible Curriculam'
              path='/onlinecourse'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

//fafafa