import { getDefaultLayout } from '@/components/Layout'
import React from 'react'
import HeroSection from '@/sections/Hero'
import AboutSection from '@/sections/About'
import ExperienceSection from '@/sections/Experience'
import SpecialtySection from '@/sections/Specialties'
import ContactSection from '@/sections/Contact'

export default function LandingPage () {
  return (
    <React.Fragment id='landing-page'>
      <HeroSection />
      <AboutSection />
      <SpecialtySection />
      <ExperienceSection />
      <ContactSection />
    </React.Fragment>
  )
}

LandingPage.getLayout = getDefaultLayout
