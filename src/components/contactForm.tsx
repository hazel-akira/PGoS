import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.name) newErrors.name = 'Name is required';
    if (!form.email) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Invalid email';
    if (!form.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      setSubmitted(true);
      // submit logic (API, Email, etc.)
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-[#0E013D] rounded-lg text-white">
      {submitted ? (
        <p className="text-green-400">Thank you for contacting us!</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded text-black"
            />
            {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
          </div>
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded text-black"
            />
            {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
          </div>
          <div>
            <label className="block mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded text-black"
              rows={4}
            ></textarea>
            {errors.message && <p className="text-red-400 text-sm">{errors.message}</p>}
          </div>
          <button type="submit" className="bg-[#ffbc04] text-[#02032d] px-4 py-2 rounded font-semibold">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
