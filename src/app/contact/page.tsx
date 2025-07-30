'use client';

import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="page-section-first pb-20 md:pb-32 bg-coastal-background">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-light mb-8 tracking-[0.15em] uppercase text-coastal-text">
              Contact
            </h1>
            <p className="text-lg text-coastal-text max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
              Ready to start your project? We&apos;d love to hear about your vision and 
              discuss how we can help bring it to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 md:py-32 bg-coastal-lightgrey">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-[0.15em] uppercase text-coastal-text">
                Send us a message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-light uppercase tracking-[0.1em] text-coastal-text mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="coastal-input w-full"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-light uppercase tracking-[0.1em] text-coastal-text mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="coastal-input w-full"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-light uppercase tracking-[0.1em] text-coastal-text mb-3">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="coastal-input w-full"
                  >
                    <option value="">Select a subject</option>
                    <option value="project">New Project Inquiry</option>
                    <option value="consultation">Free Consultation</option>
                    <option value="interiors">Interiors Collection</option>
                    <option value="retreat">Design Retreat</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-light uppercase tracking-[0.1em] text-coastal-text mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="coastal-input w-full resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-block px-12 py-4 border-2 border-coastal-text text-coastal-text uppercase tracking-[0.15em] text-base font-normal hover:bg-coastal-gold hover:border-coastal-gold hover:text-coastal-text transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-[0.15em] uppercase text-coastal-text">
                Get in touch
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-light uppercase tracking-[0.1em] text-coastal-text mb-3">
                    Email
                  </h3>
                  <a 
                    href="mailto:hello@projektbuilders.com.au"
                    className="text-lg text-coastal-text hover:text-coastal-gold transition-colors font-light"
                  >
                    hello@projektbuilders.com.au
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-light uppercase tracking-[0.1em] text-coastal-text mb-3">
                    Phone
                  </h3>
                  <a 
                    href="tel:+61499080405"
                    className="text-lg text-coastal-text hover:text-coastal-gold transition-colors font-light"
                  >
                    +61 0499 080 405
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-light uppercase tracking-[0.1em] text-coastal-text mb-3">
                    WhatsApp
                  </h3>
                  <a 
                    href="https://wa.me/61499080405"
                    className="text-lg text-coastal-text hover:text-coastal-gold transition-colors font-light"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Message us on WhatsApp
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-light uppercase tracking-[0.1em] text-coastal-text mb-3">
                    Response Time
                  </h3>
                  <p className="text-coastal-text font-light leading-relaxed tracking-wide">
                    We typically respond to all inquiries within 24 hours during business days. 
                    For urgent matters, please call or WhatsApp directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-[0.15em] uppercase text-coastal-text">
            Book a Free Discovery Call
          </h2>
          <p className="text-lg text-coastal-text mb-12 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
            Not ready to start a project yet? Book a complimentary 30-minute consultation 
            to discuss your ideas and learn more about our approach.
          </p>
          <a 
            href="https://calendly.com/projektbuilders" 
            className="inline-block px-12 py-4 border-2 border-coastal-text text-coastal-text uppercase tracking-[0.15em] text-base font-normal hover:bg-coastal-gold hover:border-coastal-gold hover:text-coastal-text transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Discovery Call
          </a>
        </div>
      </section>
    </>
  );
}