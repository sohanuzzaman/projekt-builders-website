'use client';

import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Card } from '@/components/ui/Card';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';
import { contactDetails } from '@/data/dummy';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-emerald-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-emerald-600/20 backdrop-blur-sm border border-emerald-400/30 rounded-full text-emerald-200 text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse inline-block"></span>
              Let's Start Building Together
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight bg-gradient-to-r from-white via-gray-100 to-emerald-200 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ready to start your project? We'd love to hear about your vision and discuss how we can help bring it to life with sustainable design and expert project management.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">24hrs</div>
              <div className="text-sm text-gray-300">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">Free</div>
              <div className="text-sm text-gray-300">Initial Consultation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">15+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800">
                    Thank you for your message! We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-vertical"
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Direct Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Icon name="mail" size={24} className="text-emerald-600 mr-4" />
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <a 
                        href={`mailto:${contactDetails.email}`}
                        className="text-gray-900 hover:text-emerald-600 transition-colors"
                      >
                        {contactDetails.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Icon name="phone" size={24} className="text-emerald-600 mr-4" />
                    <div>
                      <p className="text-sm text-gray-600">WhatsApp</p>
                      <a 
                        href={`https://wa.me/${contactDetails.whatsapp.replace(/\s/g, '')}`}
                        className="text-gray-900 hover:text-emerald-600 transition-colors"
                      >
                        {contactDetails.whatsapp}
                      </a>
                    </div>
                  </div>
                </div>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Book a Discovery Call
                </h3>
                <p className="text-gray-600 mb-6">
                  Prefer to talk? Schedule a free 30-minute discovery call to discuss your project and explore how we can help.
                </p>
                <Button variant="secondary" size="lg" className="w-full">
                  Schedule Free Consultation
                </Button>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">Response within 24 hours</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">Initial project assessment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">Customized service proposal</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">Clear next steps outlined</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}