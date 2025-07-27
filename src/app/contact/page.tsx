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
      <section className="section-padding bg-white pt-48">
        <div className="container-minimal">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-extralight mb-8 tracking-tight">
              Contact
            </h1>
            <p className="text-large text-gray max-w-3xl mx-auto font-light leading-relaxed">
              Ready to start your project? We&apos;d love to hear about your vision and 
              discuss how we can help bring it to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-gray-light">
        <div className="container-minimal">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-light mb-8 tracking-tight">
                Send us a message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-light uppercase tracking-wide text-gray mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-0 border-b border-gray-light bg-transparent py-3 text-black placeholder-gray focus:border-black focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-light uppercase tracking-wide text-gray mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-0 border-b border-gray-light bg-transparent py-3 text-black placeholder-gray focus:border-black focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-light uppercase tracking-wide text-gray mb-3">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full border-0 border-b border-gray-light bg-transparent py-3 text-black focus:border-black focus:outline-none transition-colors"
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
                  <label htmlFor="message" className="block text-sm font-light uppercase tracking-wide text-gray mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full border-0 border-b border-gray-light bg-transparent py-3 text-black placeholder-gray focus:border-black focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-minimal uppercase tracking-wide text-sm"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-light mb-8 tracking-tight">
                Get in touch
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-light uppercase tracking-wide text-gray mb-3">
                    Email
                  </h3>
                  <a 
                    href="mailto:hello@projektbuilders.com.au"
                    className="text-large text-black hover:text-gray transition-colors font-light"
                  >
                    hello@projektbuilders.com.au
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-light uppercase tracking-wide text-gray mb-3">
                    Phone
                  </h3>
                  <a 
                    href="tel:+61499080405"
                    className="text-large text-black hover:text-gray transition-colors font-light"
                  >
                    +61 0499 080 405
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-light uppercase tracking-wide text-gray mb-3">
                    WhatsApp
                  </h3>
                  <a 
                    href="https://wa.me/61499080405"
                    className="text-large text-black hover:text-gray transition-colors font-light"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Message us on WhatsApp
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-light uppercase tracking-wide text-gray mb-3">
                    Response Time
                  </h3>
                  <p className="text-gray font-light leading-relaxed">
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
      <section className="section-padding bg-white">
        <div className="container-minimal text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight">
            Book a Free Discovery Call
          </h2>
          <p className="text-large text-gray mb-12 max-w-2xl mx-auto font-light">
            Not ready to start a project yet? Book a complimentary 30-minute consultation 
            to discuss your ideas and learn more about our approach.
          </p>
          <a 
            href="https://calendly.com/projektbuilders" 
            className="btn-minimal-accent uppercase tracking-wide text-sm"
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