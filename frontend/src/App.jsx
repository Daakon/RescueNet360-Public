import React from 'react';
import Navbar from './components/landing/Navbar';
import Hero from './components/landing/Hero';
import MockupPreview from './components/landing/MockupPreview';
import RescueMission from './components/landing/RescueMission';
import Problem from './components/landing/Problem';
import FounderStory from './components/landing/FounderStory';
import Solution from './components/landing/Solution';
import Technology from './components/landing/Technology';
import Market from './components/landing/Market';
import Recruiting from './components/landing/Recruiting';
import Waitlist from './components/landing/Waitlist';
import Footer from './components/landing/Footer';

function App() {
  return (
    <div className="app min-h-screen bg-white font-sans text-ink antialiased">
      <Navbar />
      <main>
        <Hero />
        <MockupPreview />
        <RescueMission />
        <Problem />
        <FounderStory />
        <Solution />
        <Technology />
        <Market />
        <Recruiting />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}

export default App;
