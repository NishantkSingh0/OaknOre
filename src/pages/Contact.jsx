import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';

export default function Contact() {
  const { pathname } = useLocation();
  useReveal(pathname);

  const [form, setForm] = useState({
    name: '',
    email: '',
    project: 'Custom furniture',
    message: '',
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, project, message } = form;
    if (!name || !email || !message) return;

    const recipients = 'design@oaknore.in,purchase@oaknore.in,info@oaknore.in';
    const subject = encodeURIComponent(`New Oak&Ore contact message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nProject type: ${project}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${recipients}?subject=${subject}&body=${body}`;
  };

  const inputClass =
    'mt-3 w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-900 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100';

  return (
    <main className="pt-20">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        className="bg-cover bg-center text-white"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1700&q=80')" }}
      >
        <div className="bg-slate-950/85">
          <div className="mx-auto max-w-6xl px-6 py-28 sm:px-10 lg:px-16">
            <span className="hero-enter badge-pulse inline-flex rounded-full bg-[#131042] px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-white">
              Contact
            </span>
            <h1 className="hero-enter hero-enter-delay-1 mt-6 text-5xl font-black tracking-tight sm:text-6xl">
              Start a furniture project with Oak&amp;Ore.
            </h1>
            <p className="hero-enter hero-enter-delay-2 mt-6 max-w-2xl text-lg leading-8 text-slate-100/90">
              Whether you need custom pieces, interior collaboration, or a full build, we're ready to create something exceptional.
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact grid ─────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Left — info */}
          <div className="reveal space-y-8" data-reveal="left">
            <div className="rounded-4xl bg-white p-10 shadow-xl shadow-slate-200/50">
              <h2 className="text-4xl font-bold text-oak">
                Let's design your next statement piece.
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                Our studio is based in the heart of the design district. We collaborate with individuals, architects, and brands to create bespoke furniture and finished interiors.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2" data-reveal-stagger="100">
              <div className="reveal rounded-4xl bg-slate-900 p-8 text-slate-100 shadow-2xl shadow-slate-950/40 transition duration-300 hover:-translate-y-1" data-reveal="up">
                <h3 className="text-2xl font-semibold">Visit our studio</h3>
                <p className="mt-4 text-slate-300">
                  B5, Sector Ecotech-VI, Greater Noida, Gautam Buddha Nagar, UTTARPRADESH (201310)
                </p>
              </div>
              <div className="reveal rounded-4xl bg-slate-900 p-8 text-slate-100 shadow-2xl shadow-slate-950/40 transition duration-300 hover:-translate-y-1" data-reveal="up">
                <h3 className="text-2xl font-semibold">Email us</h3>
                <p className="mt-4 text-slate-300">
                  <a href="mailto:design@oaknore.in" className="text-blue-400 hover:underline">design@oaknore.in</a>
                </p>
                <p className="mt-2 text-slate-300">
                  <a href="mailto:purchase@oaknore.in" className="text-blue-400 hover:underline">purchase@oaknore.in</a>
                </p>
                <p className="mt-2 text-slate-300">
                  <a href="mailto:info@oaknore.in" className="text-blue-400 hover:underline">info@oaknore.in</a>
                </p>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal rounded-4xl bg-white p-10 shadow-xl shadow-slate-200/50" data-reveal="right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="hello@example.com"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Project type</label>
                <select
                  name="project"
                  value={form.project}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option>Custom furniture</option>
                  <option>Interior design</option>
                  <option>Commercial build</option>
                  <option>Collaborative project</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us about your project"
                  required
                  value={form.message}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#131042] px-6 py-4 text-sm font-semibold text-white shadow-xl shadow-blue-400/20 transition hover:bg-slate-800 hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── Collaborate dark section ─────────────────────────────────────── */}
      <section className="bg-slate-950 text-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="reveal space-y-6" data-reveal="left">
              <span className="badge-pulse inline-flex rounded-full bg-[#131042] px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-blue-200">
                collaborate
              </span>
              <h2 className="text-4xl font-bold">Create furniture that feels personal.</h2>
              <p className="leading-8 text-slate-300">
                Get in touch for custom builds, consultation, and refined furniture design that reflects your home or brand.
              </p>
            </div>
            <div className="reveal rounded-4xl bg-[#131042] p-10 shadow-2xl shadow-slate-950/40" data-reveal="right">
              <p className="text-slate-300">
                Prefer a call? We'll respond within one business day and schedule a studio visit or virtual consultation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
