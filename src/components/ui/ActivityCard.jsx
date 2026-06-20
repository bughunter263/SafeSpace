import React from 'react';
import { motion } from 'framer-motion';

export default function ActivityCard({ activity }) {
  return (
    <motion.article className="bg-white rounded-xl shadow-subtle overflow-hidden" whileHover={{ scale: 1.02 }}>
      <div className="aspect-[16/9] bg-gray-100">
        <img src={activity.image || '/placeholder-hero.jpg'} alt={activity.title} className="object-cover w-full h-full" />
      </div>
      <div className="p-4">
        <h4 className="font-semibold text-charcoal">{activity.title}</h4>
        <p className="text-sm text-muted mt-2">{activity.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-muted">{activity.date} • {activity.location}</div>
          <button className="px-3 py-1 rounded-md bg-accent text-white text-sm">Register</button>
        </div>
      </div>
    </motion.article>
  );
}
