import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-6xl mx-auto px-4 py-10 sm:px-6 flex flex-col md:flex-row justify-between gap-6">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-accent text-white flex items-center justify-center font-bold">HS</div>
            <div>
              <div className="font-semibold text-charcoal">His Safe Space</div>
              <div className="text-sm text-muted">Breaking The Silence.</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted max-w-sm">
            A safe space where young men can talk, heal, grow, and be heard.
          </p>
        </div>

        <div className="flex gap-12">
          <div>
            <h4 className="font-semibold text-charcoal mb-2">Explore</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/founder">Founder</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/activities">Activities</Link></li>
              <li><Link to="/get-help">Get Help</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-charcoal mb-2">Connect</h4>
            <div className="flex gap-3">
              <a aria-label="Instagram" href="#" className="p-2 rounded-md hover:bg-gray-100"><FaInstagram /></a>
              <a aria-label="Facebook" href="#" className="p-2 rounded-md hover:bg-gray-100"><FaFacebook /></a>
              <a aria-label="LinkedIn" href="#" className="p-2 rounded-md hover:bg-gray-100"><FaLinkedin /></a>
            </div>
            <p className="text-sm text-muted mt-3">contact@hissafespace.org</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 text-center text-sm text-muted py-4">
        © {new Date().getFullYear()} His Safe Space — All rights reserved.
      </div>
    </footer>
  );
}
