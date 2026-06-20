import React from 'react';
import ActivityCard from './ActivityCard';

const sample = [
  {
    title: 'Global Brotherhood Program',
    description: 'A guided 8-week program bringing small groups together across time zones to practice emotional check-ins and peer-led reflection.',
    date: 'Jul 18 – Sep 12, 2026',
    location: 'Online (Zoom)',
    image: '/placeholder-hero.jpg'
  },
  {
    title: 'Community Discussions',
    description: 'Weekly moderated conversations on topics like vulnerability, identity, and coping strategies.',
    date: 'Every Wed • 7pm',
    location: 'Local Communities & Online',
    image: '/placeholder-hero.jpg'
  },
  {
    title: 'Youth Leadership Workshops',
    description: 'Skill-building sessions focused on communication, boundary-setting, and healthy leadership.',
    date: 'Monthly (first Sat)',
    location: 'Hybrid (Hubs + Online)',
    image: '/placeholder-hero.jpg'
  },
  {
    title: 'Support Drop-ins',
    description: 'Casual drop-in spaces for immediate peer support and signposting.',
    date: 'Ongoing',
    location: 'Various',
    image: '/placeholder-hero.jpg'
  }
];

export default function ActivitiesPreview() {
  return (
    <section aria-labelledby="activities-heading" className="max-w-6xl mx-auto px-4 py-10 sm:py-14">
      <h2 id="activities-heading" className="text-2xl font-semibold mb-6">Activities & programs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sample.map((a) => <ActivityCard key={a.title} activity={a} />)}
      </div>
    </section>
  );
}
