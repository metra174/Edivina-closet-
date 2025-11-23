import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import Catalog from '../components/Catalog';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import SocialProof from '../components/SocialProof';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-primary selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Catalog />
      <ContactForm />
      <Footer />
      <SocialProof />
    </div>
  );
};

export default Home;