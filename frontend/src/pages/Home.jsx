import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesOverview from '../components/ServicesOverview';
import IndustriesSection from '../components/IndustriesSection';
import Testimonials from '../components/Testimonials';
import ContactCTA from '../components/ContactCTA';
import Footer from '../components/Footer';

const Home = () => {
  // TODO: Connect to backend API when ready
  // const fetchHomeData = async () => {
  //   try {
  //     const response = await fetch('http://localhost:8000/api/home');
  //     const data = await response.json();
  //     setHomeData(data);
  //   } catch (error) {
  //     console.error('Error fetching home data:', error);
  //   }
  // };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesOverview />
        <IndustriesSection />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Home;