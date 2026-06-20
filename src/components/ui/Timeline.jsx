import React from 'react';
import { motion } from 'framer-motion';

const events = [
  { title: 'Idea', date: 'Jan 2022', body: 'Eli started hosting small check-in circles after noticing friends struggling in silence.' },
  { title: 'Pilot', date: 'May 2023', body: 'Pilot program ran in three cities with 60 participants and trained peer facilitators.' },
  { title: 'Public Launch', date: 'Aug 2023', body: 'Platform launched publicly with community discussions and resource guides.' },
  { title: '1k Community', date: 'Dec 2024', body: 'Reached 1,000 members; formed partnerships with two local mental health services.' },
  { title: 'Scale & Partnerships', date: '2026+', body: 'Roadmap includes national facilitator training and integration with professional referral networks.' }
];

export default function Timeline() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold mb-6">Timeline</h2>
      <ol className="relative border-l border-gray-100">
        {events.map((e, i) => (
          <motion.li key={e.title} className="mb-10 ml-6" initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full bg-accent text-white text-xs">{i+1}</span>
            <h3 className="text-lg font-semibold">{e.title} <span className="text-sm text-muted">— {e.date}</span></h3>
            <p className="text-sm text-muted mt-2">{e.body}</p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
