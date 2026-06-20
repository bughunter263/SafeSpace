import React from 'react';
import { Helmet } from 'react-helmet-async';
import FounderProfile from '../components/ui/FounderProfile';
import Timeline from '../components/ui/Timeline';

const founder = {
  name: 'Eli Carter',
  role: 'Founder & Executive Director',
  bio: 'Eli started His Safe Space after struggling to find safe, stigma-free support in his teens. Combining lived experience with community work, Eli built a peer-first model designed to help young men connect, heal, and lead.',
  image: '/placeholder-avatar.jpg',
  email: 'eli@hissafespace.org',
  linkedin: '#',
  instagram: '#'
};

export default function Founder() {
  return (
    <>
      <Helmet>
        <title>Founder — His Safe Space</title>
        <meta name="description" content="Meet the founder of His Safe Space and read the story behind the platform." />
      </Helmet>
      <main className="max-w-6xl mx-auto px-4 py-10 space-y-8">
        <FounderProfile founder={founder} />

        <section className="bg-white p-6 rounded-xl shadow-subtle">
          <h2 className="text-2xl font-semibold">Founder story</h2>
          <p className="mt-3 text-sm text-muted">At 17, Eli lost a close friend to suicide. After facing stigma and silence in his community, he began hosting small conversations addressing real struggles — not problems framed by shame but opportunities to learn and connect. Over years, those conversations evolved into His Safe Space: a platform that centers young men's voices, creates community-led care, and builds pathways to professional help when needed.</p>

          <h3 className="mt-6 font-semibold">Vision</h3>
          <p className="text-sm text-muted mt-2">A world where young men can ask for help without fear — where emotional expression is met with empathy and practical support.</p>

          <h3 className="mt-6 font-semibold">Future goals</h3>
          <ul className="list-disc pl-5 mt-2 text-sm text-muted space-y-2">
            <li>Scale peer facilitator training internationally.</li>
            <li>Partner with mental health services for referral pathways.</li>
            <li>Build evidence-based digital tools and curricula.</li>
          </ul>
        </section>

        <Timeline />
      </main>
    </>
  );
}
