import React from 'react';

export default function CTA(){
  return (
    <section className="max-w-6xl mx-auto px-4 py-10 sm:py-14">
      <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">Need support now?</h3>
          <p className="text-sm text-muted mt-1">If you're in crisis, please contact your local emergency services. For support, join our activities or contact us.</p>
        </div>
        <div className="flex gap-3">
          <a href="/get-help" className="px-4 py-2 bg-accent text-white rounded-md">Get Help</a>
          <a href="/activities" className="px-4 py-2 border rounded-md">See Activities</a>
        </div>
      </div>
    </section>
  );
}
