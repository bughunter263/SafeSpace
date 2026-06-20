import React, { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: ''});
  const [status, setStatus] = useState(null); // null | 'success' | 'error' | 'submitting'
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) next.email = 'Please enter a valid email.';
    if (!form.message.trim()) next.message = 'Please share a brief message.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      setStatus('error');
      return;
    }
    setStatus('submitting');

    try {
      await new Promise(res => setTimeout(res, 750));
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: ''});
      setErrors({});
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-subtle max-w-2xl" aria-labelledby="contact-heading" noValidate>
      <h3 id="contact-heading" className="text-lg font-semibold">Contact us</h3>
      <p className="text-sm text-muted mt-1">We aim to respond within 48 hours. If you are in immediate danger, call your local emergency services.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <label className="flex flex-col text-sm">
          <span className="mb-1">Name <span className="text-red-500" aria-hidden="true">*</span></span>
          <input name="name" value={form.name} onChange={handleChange} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'error-name' : undefined} required className="px-3 py-2 border rounded-md" />
          {errors.name && <span id="error-name" className="text-sm text-red-600 mt-1">{errors.name}</span>}
        </label>

        <label className="flex flex-col text-sm">
          <span className="mb-1">Email <span className="text-red-500" aria-hidden="true">*</span></span>
          <input name="email" type="email" value={form.email} onChange={handleChange} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'error-email' : undefined} required className="px-3 py-2 border rounded-md" />
          {errors.email && <span id="error-email" className="text-sm text-red-600 mt-1">{errors.email}</span>}
        </label>

        <label className="flex flex-col text-sm sm:col-span-2">
          <span className="mb-1">Subject</span>
          <input name="subject" value={form.subject} onChange={handleChange} className="px-3 py-2 border rounded-md" />
        </label>

        <label className="flex flex-col text-sm sm:col-span-2">
          <span className="mb-1">Message <span className="text-red-500" aria-hidden="true">*</span></span>
          <textarea name="message" value={form.message} onChange={handleChange} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'error-message' : undefined} required rows="5" className="px-3 py-2 border rounded-md"></textarea>
          {errors.message && <span id="error-message" className="text-sm text-red-600 mt-1">{errors.message}</span>}
        </label>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <button type="submit" disabled={status === 'submitting'} className="px-4 py-2 bg-accent text-white rounded-md">
          {status === 'submitting' ? 'Sending...' : 'Send Message'}
        </button>
        <div aria-live="polite" className="text-sm">
          {status === 'success' && <span className="text-green-600">Message sent — we'll respond soon.</span>}
          {status === 'error' && <span className="text-red-600">There are issues with the form. See highlights above.</span>}
        </div>
      </div>
    </form>
  );
}
