'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Layout } from '@/components/layout/Layout';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';

const retreatFeatures = [
  {
    title: 'Accommodation',
    description: '10 nights in beautiful eco-friendly bamboo bungalows',
    icon: 'home'
  },
  {
    title: 'All Meals',
    description: 'Fresh, locally-sourced organic meals prepared daily',
    icon: 'leaf'
  },
  {
    title: 'Airport Transfer',
    description: 'Comfortable transport to and from Denpasar Airport',
    icon: 'map-pin'
  },
  {
    title: 'Architecture Tours',
    description: 'Guided tours of innovative bamboo architecture projects',
    icon: 'building'
  },
  {
    title: 'Interiors Tours',
    description: 'Explore sustainable interior design in local homes and hotels',
    icon: 'sparkles'
  },
  {
    title: 'Sustainability Workshops',
    description: 'Hands-on learning about eco-friendly building practices',
    icon: 'recycle'
  }
];

export default function RetreatsPage() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-emerald-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6">
                Coming Soon
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Bali Design Retreats
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Join us for an immersive 10-day learning experience in sustainable architecture and design at the beautiful Pondok Cocoa Learning Retreat in Bali.
              </p>
              
              {/* Interest Form */}
              <div className="max-w-md">
                {submitStatus === 'success' ? (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800">
                      Thank you! We'll contact you with retreat details.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                    <Button
                      type="submit"
                      variant="primary"
                      disabled={isSubmitting}
                      className="whitespace-nowrap"
                    >
                      {isSubmitting ? 'Registering...' : 'Register Interest'}
                    </Button>
                  </form>
                )}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Bamboo architecture in Bali"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What's Included
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need for an immersive learning experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {retreatFeatures.map((feature, index) => (
              <Card key={index} hover className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Icon name={feature.icon as any} size={32} className="text-emerald-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Pondok Cocoa */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Pondok Cocoa Learning Retreat"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Pondok Cocoa Learning Retreat
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Nestled in the lush landscapes of Bali, Pondok Cocoa is a pioneering eco-retreat that showcases the best of sustainable architecture and permaculture design. Built primarily from bamboo and other natural materials, the retreat serves as a living example of the principles we'll explore together.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                During your stay, you'll experience firsthand how traditional Balinese building techniques combine with modern sustainable practices to create spaces that are both beautiful and environmentally responsible.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                  <span className="text-gray-600">Bamboo construction workshops</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                  <span className="text-gray-600">Permaculture garden tours</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                  <span className="text-gray-600">Traditional craft demonstrations</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                  <span className="text-gray-600">Sustainable living practices</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What You'll Learn
            </h2>
            <p className="text-xl text-gray-600">
              Practical skills and insights you can apply to your own projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Sustainable Architecture Principles
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Climate-responsive design strategies</li>
                <li>• Natural material selection and application</li>
                <li>• Passive cooling and ventilation techniques</li>
                <li>• Integration with natural landscapes</li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Bamboo Construction Techniques
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Bamboo species selection and treatment</li>
                <li>• Traditional joinery methods</li>
                <li>• Structural design considerations</li>
                <li>• Maintenance and longevity practices</li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Interior Design with Natural Materials
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Texture and color harmony</li>
                <li>• Furniture and fixture selection</li>
                <li>• Lighting design for natural spaces</li>
                <li>• Creating comfortable microclimates</li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Project Management for Sustainable Builds
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Working with local artisans and suppliers</li>
                <li>• Quality control for natural materials</li>
                <li>• Timeline management for eco-builds</li>
                <li>• Cost considerations and budgeting</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}