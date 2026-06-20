import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { useState } from 'react';

const links = [
  { to: '/', label: 'Home' },
  { to: '/founder', label: 'Founder' },
  { to: '/about', label: 'About Us' },
  { to: '/get-help', label: 'Get Help' },
  { to: '/activities', label: 'Activities' }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-gradient-to-br from-accent-2 to-accent flex items-center justify-center text-white font-bold shadow-sm">
              HS
            </div>
            <span className="font-semibold text-charcoal">His Safe Space</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {links.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `text-sm font-medium text-charcoal/80 hover:text-charcoal ${isActive ? 'text-charcoal' : ''}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link to="/get-help" className="ml-4 px-4 py-2 rounded-md bg-accent text-white text-sm font-medium shadow-sm">
              Get Help
            </Link>
          </nav>

          <div className="md:hidden">
            <button
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen(p => !p)}
              className="p-2 rounded-md text-charcoal hover:bg-gray-100 focus:outline-none focus:ring-2"
            >
              {open ? <HiX size={22} /> : <HiMenu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          className="md:hidden border-t border-gray-100"
        >
          <div className="px-4 py-4 flex flex-col gap-3">
            {links.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `text-charcoal/90 py-2 ${isActive ? 'font-semibold' : 'font-medium'}`}
              >
                {l.label}
              </NavLink>
            ))}
            <Link to="/get-help" onClick={() => setOpen(false)} className="mt-2 px-4 py-2 rounded-md bg-accent text-white text-center">
              Get Help
            </Link>
          </div>
        </motion.nav>
      )}
    </header>
  );
}
