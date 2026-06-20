import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { name: 'Sam (he/him)', role: 'Member', quote: 'I finally felt heard. The weekly circle gave me the courage to open up and connect.', avatar: '/placeholder-avatar.jpg' },
  { name: 'Jordan (they/them)', role: 'Volunteer', quote: 'Volunteering here taught me how to hold space and listen without judgment.', avatar: '/placeholder-avatar.jpg' },
  { name: 'Max (he/him)', role: 'Participant', quote: 'The tools I learned helped me manage panic and ask for help when I needed it most.', avatar: '/placeholder-avatar.jpg' }
];

export default function Testimonials() {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(id);
  }, []);
  return (
    <section aria-labelledby="testimonials" className="max-w-4xl mx-auto px-4 py-10">
      <h2 id="testimonials" className="text-xl font-semibold mb-6">They felt safe. They found support.</h2>
      <div className="relative">
        <motion.div key={index} initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -8 }} transition={{ duration: 0.36 }}>
          <blockquote className="bg-white p-6 rounded-xl shadow-subtle">
            <p className="text-lg text-charcoal">“{testimonials[index].quote}”</p>
            <footer className="mt-4 flex items-center gap-3">
              <img src={testimonials[index].avatar} alt={`${testimonials[index].name} avatar`} className="w-10 h-10 rounded-full" />
              <div>
                <div className="font-semibold">{testimonials[index].name}</div>
                <div className="text-sm text-muted">{testimonials[index].role}</div>
              </div>
            </footer>
          </blockquote>
        </motion.div>

        <div className="flex gap-2 mt-4 justify-center" aria-hidden="true">
          {testimonials.map((_, i) => (
            <button key={i} aria-label={`Show testimonial ${i+1}`} onClick={() => setIndex(i)} className={`w-2 h-2 rounded-full ${i === index ? 'bg-charcoal' : 'bg-gray-300'}`}></button>
          ))}
        </div>
      </div>
    </section>
  );
}
