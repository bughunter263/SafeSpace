import React from 'react';
import { Helmet } from 'react-helmet-async';
import ActivityCard from '../components/ui/ActivityCard';

const activities = [
  { title: 'Global Brotherhood Program', description: 'Connect with peers worldwide.', date: 'Jul 18, 2026', location: 'Online', image: '/placeholder-hero.jpg' },
  { title: 'Mental Health Awareness Campaign', description: 'Public events and campaigns.', date: 'Aug 2026', location: 'Various', image: '/placeholder-hero.jpg' },
  { title: 'Monthly Discussions', description: 'Moderated group conversations.', date: 'Monthly', location: 'Hybrid', image: '/placeholder-hero.jpg' },
  { title: 'Youth Leadership Workshops', description: 'Build leadership and support skills.', date: 'Sep 2026', location: 'Local hubs', image: '/placeholder-hero.jpg' }
];

export default function Activities() {
  return (
    <>
      <Helmet>
        <title>Activities — His Safe Space</title>
        <meta name="description" content="Browse upcoming programs and activities." />
      </Helmet>

      <main className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-semibold mb-6">Activities & Programs</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map(a => <ActivityCard key={a.title} activity={a} />)}
        </div>
      </main>
    </>
  );
}
