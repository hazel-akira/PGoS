import React, { useState } from 'react';

const schools = [
  "Pioneer School",
  "Pioneer Girls School",
  "Pioneer Junior Academy",
  "Pioneer Girls Junior Academy",
  "St. Paul Thomas Academy",
];

const VisitUsFormAndTour: React.FC = () => {
  const [form, setForm] = useState({
    school: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setForm({ school: "", date: "", time: "", name: "", email: "", phone: "" });
    alert("Form submitted! (Demo only)");
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow pt-8 p-4 sm:p-6 mb-8 sm:mb-12 w-full max-w-2xl mx-auto lg:max-w-4xl xl:max-w-5xl">
        <h2 className="text-2xl font-bold mb-2 text-center">Schedule a Campus Tour</h2>
        <p className="text-gray-600 mb-6 text-center max-w-2xl mx-auto">
          Experience our vibrant campus firsthand. Schedule a visit to explore our facilities, meet our faculty, and discover the unique opportunities that await you at Pioneer Group of Schools.
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              name="school"
              value={form.school}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
              required
            >
              <option value="">Select a School</option>
              {schools.map((school) => (
                <option key={school} value={school}>{school}</option>
              ))}
            </select>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              placeholder="Preferred Date"
              required
            />
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              placeholder="Preferred Time"
              required
            />
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              placeholder="Your Email"
              required
            />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              placeholder="Your Phone"
              required
            />
          </div>
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="mb-8 w-full max-w-xl mx-auto">
        <h2 className="text-lg font-semibold mb-4 text-center">Virtual Tour</h2>
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            width="100%"
            height="350"
            src="https://www.youtube.com/embed/A7rrEq1t8Js?si=IupxoOVKVa576D9g"
            title="Virtual Tour"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default VisitUsFormAndTour; 