import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Testimonial.css';
const slideImages = [
    'images/testimonial.webp',
    'images/testimonial.webp',
    'images/testimonial.webp',
    'images/testimonial.webp'
];

const Slideshow = () => {
    return (
        <div className="test">
            <h1 className="headt">Testimonials</h1>
            <Slide easing="ease">
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
                        <span>Working with TEN is a great opportunity for the students who want to extend their career in digital marketing!<br/>
                            <h1>-Aakriti Malik, DM Intern</h1>
                        </span>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
                        <span>Working with TEN as a digital marketing intern has been a great experience. I learnt a lot of new stuff and worked on different tasks which helped me understand the marketing field better.<br/>
                            <h1>-Harsh Rajput, General Management Intern</h1></span>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
                        <span>I thoroughly enjoyed my internship during this pandemic situation and gained valuable experience under my belt. I know this internship will be instrumental in getting myself a job and it would be glowing reference on my CV. I was very hesitant at the time of joining TEN due to my inexperience, but now I feel so happy that I was able to be a part of it as it has made me so much more confident and empowered. As much as this organization changes, I hope that it’s class remains constant.<br/>
                            Thank you team TEN!
                            <h1>-Kshema Unni, Business Development Intern</h1></span>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[3]})` }}>
                        <span>TEN was my first ever experience into internship. Even though I didn't have much of an idea about my responsibilities, my mentors at TEN and fellow colleagues helped me a lot in making me understand my roles and were very cooperative throughout.<br/>
                            <h1>Anjali Srivastava, Content Intern</h1>
                        </span>
                    </div>
                </div>
            </Slide>
        </div>
    )
};

export default Slideshow;
