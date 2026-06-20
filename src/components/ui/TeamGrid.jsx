import React from 'react';

const members = [
  { name: 'Alex Johnson', role: 'Program Lead', bio: 'Designs training and workshop curricula for peer facilitators.', photo: '/placeholder-avatar.jpg' },
  { name: 'Miguel Reyes', role: 'Community Manager', bio: 'Coordinates groups, volunteers, and local hubs.', photo: '/placeholder-avatar.jpg' },
  { name: 'Priya Sharma', role: 'Partnerships', bio: 'Builds clinical partnerships and referral pathways.', photo: '/placeholder-avatar.jpg' },
  { name: 'Sam Lee', role: 'Design & Product', bio: 'Leads product design and digital experience.', photo: '/placeholder-avatar.jpg' }
];

export default function TeamGrid() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold mb-6">Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {members.map(m => (
          <article key={m.name} className="bg-white p-5 rounded-xl shadow-subtle text-center">
            <img src={m.photo} alt={`${m.name} photo`} className="w-24 h-24 rounded-full mx-auto" />
            <h4 className="mt-3 font-semibold">{m.name}</h4>
            <div className="text-sm text-muted">{m.role}</div>
            <p className="text-sm text-muted mt-2">{m.bio}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
