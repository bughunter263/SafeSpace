import React from 'react';
import { FaHeartbeat, FaHandsHelping, FaLeaf, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';

const items = [
  { icon: <FaHeartbeat />, title: 'Mental Health Awareness', body: 'Open education and resources to reduce stigma and encourage help-seeking.' },
  { icon: <FaUsers />, title: 'Brotherhood', body: 'Peer-led circles and community programs that build belonging and trust.' },
  { icon: <FaLeaf />, title: 'Personal Growth', body: 'Workshops and tools focused on resilience, emotional literacy, and life skills.' },
  { icon: <FaHandsHelping />, title: 'Support', body: 'Immediate peer assistance and signposting to professional resources.' }
];

export default function MissionCards() {
  return (
    <section id="learn-more" aria-labelledby="mission-heading" className="max-w-6xl mx-auto px-4 py-10 sm:py-14">
      <h2 id="mission-heading" className="text-2xl font-semibold mb-6">Our mission</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it, i) => (
          <motion.article key={it.title} className="p-5 bg-white rounded-xl shadow-subtle" whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 200 }}>
            <div className="text-accent text-2xl">{it.icon}</div>
            <h3 className="mt-3 font-semibold text-charcoal">{it.title}</h3>
            <p className="mt-2 text-sm text-muted">{it.body}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
