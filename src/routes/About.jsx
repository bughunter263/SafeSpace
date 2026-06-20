import React from 'react';
import { Helmet } from 'react-helmet-async';
import TeamGrid from '../components/ui/TeamGrid';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us — His Safe Space</title>
        <meta name="description" content="Learn about His Safe Space — mission, values, and team." />
      </Helmet>
      <main className="max-w-6xl mx-auto px-4 py-10 space-y-6">
        <section className="bg-white p-6 rounded-xl shadow-subtle">
          <h1 className="text-2xl font-semibold">Our story</h1>
          <p className="text-sm text-muted mt-3">We exist to make conversations safe for young men — to replace stigma with trust and isolation with connection.</p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-subtle">
            <h3 className="font-semibold">Mission</h3>
            <p className="text-sm text-muted mt-2">We talk about the things young men were taught to keep quiet about.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-subtle">
            <h3 className="font-semibold">Vision</h3>
            <p className="text-sm text-muted mt-2">A community where asking for help is met with practical support, dignity, and growth.</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Core values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-surface rounded-md">
              <h4 className="font-semibold">Empathy</h4>
              <p className="text-sm text-muted mt-1">We meet emotion with presence and curiosity.</p>
            </div>
            <div className="p-4 bg-surface rounded-md">
              <h4 className="font-semibold">Brotherhood</h4>
              <p className="text-sm text-muted mt-1">Community bonds built on mutual respect and accountability.</p>
            </div>
            <div className="p-4 bg-surface rounded-md">
              <h4 className="font-semibold">Respect</h4>
              <p className="text-sm text-muted mt-1">We honor diverse experiences and backgrounds.</p>
            </div>
            <div className="p-4 bg-surface rounded-md">
              <h4 className="font-semibold">Growth</h4>
              <p className="text-sm text-muted mt-1">Practical tools and learning pathways to move forward.</p>
            </div>
            <div className="p-4 bg-surface rounded-md">
              <h4 className="font-semibold">Courage</h4>
              <p className="text-sm text-muted mt-1">We encourage honest expression and the courage to change.</p>
            </div>
            <div className="p-4 bg-surface rounded-md">
              <h4 className="font-semibold">Support</h4>
              <p className="text-sm text-muted mt-1">Immediate peer help combined with professional signposting.</p>
            </div>
          </div>
        </section>

        <TeamGrid />
      </main>
    </>
  );
}
