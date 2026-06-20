import React from 'react';
import { Helmet } from 'react-helmet-async';
import ContactForm from '../components/ui/ContactForm';
import FAQ from '../components/ui/FAQ';

export default function GetHelp() {
  return (
    <>
      <Helmet>
        <title>Get Help — His Safe Space</title>
        <meta name="description" content="Get help and find support resources. If you are in crisis, contact emergency services immediately." />
      </Helmet>

      <main className="max-w-6xl mx-auto px-4 py-10 space-y-6">
        <section className="bg-white p-6 rounded-xl shadow-subtle">
          <h1 className="text-2xl font-semibold">Get help</h1>
          <p className="text-sm text-muted mt-2">If you are in immediate danger or experiencing a medical emergency, call your local emergency services now. The resources below can help with non-immediate support.</p>
          <div className="mt-4 p-4 rounded-md bg-accent/10 border border-accent/20">
            <strong>Emergency notice:</strong> This platform is not a replacement for professional therapy or emergency services.
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="p-4 bg-white rounded-xl shadow-subtle">
              <h3 className="font-semibold">Crisis support</h3>
              <p className="text-sm text-muted mt-1">If you feel you may harm yourself or someone else, contact emergency services immediately. For non-urgent crisis helplines, check local numbers or <a href="#" className="text-accent underline">visit national hotlines</a>.</p>
            </div>

            <div className="p-4 bg-white rounded-xl shadow-subtle">
              <h3 className="font-semibold">Mental health resources</h3>
              <ul className="mt-2 text-sm text-muted list-disc pl-5 space-y-1">
                <li><a href="#" className="text-accent underline">Understanding depression and anxiety</a></li>
                <li><a href="#" className="text-accent underline">Self-care and grounding techniques</a></li>
                <li><a href="#" className="text-accent underline">How to support a friend</a></li>
              </ul>
            </div>

            <div className="p-4 bg-white rounded-xl shadow-subtle">
              <h3 className="font-semibold">Community support</h3>
              <p className="text-sm text-muted mt-1">Join group discussions, peer circles, or sign up for a facilitator-led program.</p>
            </div>

            <FAQ />
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">Contact</h2>
            <ContactForm />
          </div>
        </section>
      </main>
    </>
  );
}
