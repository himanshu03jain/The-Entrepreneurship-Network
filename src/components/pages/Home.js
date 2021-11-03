import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer/Footer';
import About  from './About/About';
import Joinvirtual from "../Joinvirtual";
// import Coursehead from "../Course/CourseHead";
// import Benifits from "../Benifits";
import Testimonial from "../Testimonial";
import Power from "../Power";
function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Joinvirtual />
      {/* <Coursehead /> */}
      <Cards />
      {/* <Benifits /> */}
      <Testimonial />
      <Power />
      <Footer />
    </>
  );
}

export default Home;
