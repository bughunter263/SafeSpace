import React from 'react';

export default function FounderProfile({ founder }) {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <div className="bg-white p-6 rounded-lg flex flex-col sm:flex-row gap-6 items-center shadow-subtle">
        <img src={founder.image || '/placeholder-avatar.jpg'} alt={`${founder.name} portrait`} className="w-36 h-36 rounded-md object-cover" />
        <div>
          <h3 className="text-2xl font-semibold">{founder.name}</h3>
          <div className="text-sm text-muted">{founder.role}</div>
          <p className="mt-3 text-sm text-muted max-w-xl">{founder.bio}</p>

          <div className="mt-4 flex gap-3">
            <a href={`mailto:${founder.email}`} className="text-sm">Email</a>
            <a href={founder.linkedin} className="text-sm">LinkedIn</a>
            <a href={founder.instagram} className="text-sm">Instagram</a>
          </div>
        </div>
      </div>
    </section>
  );
}
