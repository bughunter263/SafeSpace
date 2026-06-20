import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="bg-transparent">
      <div id="main" className="max-w-6xl mx-auto px-4 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45 }}>
          <h1 id="hero-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Breaking The Silence.
          </h1>
          <p className="mt-4 lead max-w-xl">
            A safe, confidential community where young men can speak honestly, find support, and learn tools for healing and growth.
          </p>

          <div className="mt-6 flex gap-3">
            <Link to="/get-help" className="inline-flex items-center px-5 py-2 rounded-lg bg-accent text-white font-semibold shadow-sm">
              Get Help
            </Link>
            <a href="#learn-more" className="inline-flex items-center px-4 py-2 rounded-lg border border-gray-200 text-sm text-charcoal/90">
              Learn More
            </a>
          </div>

          <div className="mt-6 text-sm text-muted">
            <strong>Confidential • Peer-led • Evidence-informed</strong>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45 }} className="order-first md:order-last">
          <div className="w-full rounded-xl overflow-hidden shadow-subtle bg-surface">
            <div className="aspect-[4/3] bg-gradient-to-br from-white to-surface flex items-center justify-center">
              <img src="/placeholder-hero.jpg" alt="Three young men sitting in a circle, talking supportively (placeholder)" className="object-cover w-full h-full" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
