// Main Landing Page Component
import React from 'react'
import HeroSection from '../components/landing/HeroSection'
import AboutSection from '../components/landing/AboutSection'
import MissionSection from '../components/landing/MissionSection'
import ProjectsSection from '../components/landing/ProjectsSection'
import ContactUs from '../components/landing/ContactUs'

function Landing() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <ProjectsSection />
      <ContactUs />
    </div>
  )
}

export default Landing