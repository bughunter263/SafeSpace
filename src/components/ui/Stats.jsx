import React from 'react';
import { motion } from 'framer-motion';

export default function Stats() {
  const members = 1284;
  const programs = 27;
  const sessions = 1648;
  const impacted = 5120;

  return (
    <section aria-labelledby="stats-heading" className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10 sm:py-14">
        <h2 id="stats-heading" className="sr-only">Community statistics</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <motion.div className="p-4 bg-surface rounded-lg text-center" initial={{ y: 8, opacity: 0 }} whileInView={{ y:0, opacity:1 }} viewport={{ once:true }}>
            <div className="text-2xl font-semibold counter">{members.toLocaleString()}</div>
            <div className="text-sm text-muted mt-1">Community Members</div>
          </motion.div>

          <motion.div className="p-4 bg-surface rounded-lg text-center" initial={{ y: 8, opacity: 0 }} whileInView={{ y:0, opacity:1 }} viewport={{ once:true }} transition={{ delay:0.05 }}>
            <div className="text-2xl font-semibold counter">{programs}</div>
            <div className="text-sm text-muted mt-1">Programs Hosted</div>
          </motion.div>

          <motion.div className="p-4 bg-surface rounded-lg text-center" initial={{ y: 8, opacity: 0 }} whileInView={{ y:0, opacity:1 }} viewport={{ once:true }} transition={{ delay:0.1 }}>
            <div className="text-2xl font-semibold counter">{sessions.toLocaleString()}</div>
            <div className="text-sm text-muted mt-1">Support Sessions</div>
          </motion.div>

          <motion.div className="p-4 bg-surface rounded-lg text-center" initial={{ y: 8, opacity: 0 }} whileInView={{ y:0, opacity:1 }} viewport={{ once:true }} transition={{ delay:0.15 }}>
            <div className="text-2xl font-semibold counter">{impacted.toLocaleString()}</div>
            <div className="text-sm text-muted mt-1">Lives Impacted</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
