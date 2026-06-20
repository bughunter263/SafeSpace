import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/ui/Hero';
import Stats from '../components/ui/Stats';
import MissionCards from '../components/ui/MissionCards';
import ActivitiesPreview from '../components/ui/ActivitiesPreview';
import Testimonials from '../components/ui/Testimonials';
import CTA from '../components/ui/CTA';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home — His Safe Space</title>
        <meta name="description" content="A safe space where young men can talk, heal, grow, and be heard." />
      </Helmet>

      <Hero />
      <Stats />
      <MissionCards />
      <ActivitiesPreview />
      <Testimonials />
      <CTA />
    </>
  );
}
