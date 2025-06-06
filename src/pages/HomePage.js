import React from 'react';
import Header from '../components/home/Header';
import Navbar from '../components/layout/Navbar';
import MissionSection from '../components/home/MissionSection';
import ImpactSection from '../components/home/ImpactSection';
import SloganSection from '../components/home/SloganSection'
import '../styles/styles.css';
import '../styles/styles-cards.css';

function HomePage() {
  return (
    <>
      <MissionSection />
      <ImpactSection />
      <SloganSection />
    </>
  );
}

export default HomePage;
