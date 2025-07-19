'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Layout } from '@/components/layout/Layout';
import { Card } from '@/components/ui/Card';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';
import { servicePhases } from '@/data/dummy';

// Visual images for each service phase
const phaseImages = [
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
];

export default function ServicesPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-emerald-600/20 backdrop-blur-sm border border-emerald-400/30 rounded-full text-emerald-200 text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse inline-block"></span>
              Complete Project Management
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight bg-gradient-to-r from-white via-gray-100 to-emerald-200 bg-clip-text text-transparent">
              Our Services
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive project management services that guide your vision through every phase of the building process with expertise, integrity, and sustainable practices.
            </p>
          </div>

          {/* Service Process Flow */}
          <div className="flex justify-center items-center space-x-4 mb-12">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300">Concept</span>
            </div>
            <div className="w-8 h-px bg-gray-600"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse delay-300"></div>
              <span className="text-sm text-gray-300">Design</span>
            </div>
            <div className="w-8 h-px bg-gray-600"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse delay-700"></div>
              <span className="text-sm text-gray-300">Build</span>
            </div>
            <div className="w-8 h-px bg-gray-600"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse delay-1000"></div>
              <span className="text-sm text-gray-300">Handover</span>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Timeline of Services */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Your Project Journey
            </h2>
            <p className="text-xl text-gray-600">
              Eight comprehensive phases that transform your vision into reality
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500 to-emerald-600 hidden lg:block"></div>

            <div className="space-y-16">
              {servicePhases.map((phase, index) => (
                <div key={phase.id} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:space-x-16 space-y-8 lg:space-y-0`}>
                  {/* Content Side */}
                  <div className="flex-1 lg:max-w-lg">
                    <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                      {/* Phase Number */}
                      <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {index + 1}
                      </div>

                      <div className="p-8">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mr-4">
                            <Icon name={phase.icon} size={24} className="text-emerald-600" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                            {phase.title}
                          </h3>
                        </div>

                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {phase.description}
                        </p>

                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Responsibilities:</h4>
                          <ul className="space-y-2">
                            {phase.responsibilities.slice(0, 3).map((responsibility, respIndex) => (
                              <li key={respIndex} className="flex items-start">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-gray-600 text-sm">{responsibility}</span>
                              </li>
                            ))}
                            {phase.responsibilities.length > 3 && (
                              <li className="text-emerald-600 text-sm font-medium">
                                +{phase.responsibilities.length - 3} more responsibilities
                              </li>
                            )}
                          </ul>
                        </div>

                        <Button variant="outline" size="sm" className="group-hover:bg-emerald-50 group-hover:border-emerald-300">
                          Learn More
                        </Button>
                      </div>
                    </Card>
                  </div>

                  {/* Timeline Node (Desktop) */}
                  <div className="hidden lg:flex w-16 h-16 bg-white border-4 border-emerald-500 rounded-full items-center justify-center shadow-lg z-10">
                    <Icon name={phase.icon} size={24} className="text-emerald-600" />
                  </div>

                  {/* Visual Side */}
                  <div className="flex-1 lg:max-w-lg">
                    <div className="relative group">
                      <div className="aspect-video rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500">
                        <Image
                          src={phaseImages[index]}
                          alt={`${phase.title} visualization`}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      
                      {/* Floating Badge */}
                      <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-3 border border-emerald-100">
                        <div className="text-center">
                          <div className="text-lg font-bold text-emerald-600">Phase {index + 1}</div>
                          <div className="text-xs text-gray-600">of 8</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Benefits */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Our Process Works
            </h2>
            <p className="text-xl text-gray-600">
              Structured approach, proven results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Clear Milestones</h3>
              <p className="text-gray-600">Every phase has defined deliverables and success criteria</p>
            </Card>

            <Card className="text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Collaborative Approach</h3>
              <p className="text-gray-600">Your input and vision guide every decision throughout the process</p>
            </Card>

            <Card className="text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Assurance</h3>
              <p className="text-gray-600">Rigorous quality checks at every stage ensure exceptional results</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Let's discuss how our comprehensive project management approach can bring your architectural vision to life with sustainability and excellence at every step.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button variant="primary" size="lg" className="group">
                <span>Start Your Project</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </Link>
            
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
                Book a Discovery Call
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400 mb-2">200+</div>
              <div className="text-sm text-gray-400">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400 mb-2">98%</div>
              <div className="text-sm text-gray-400">On-Time Completion</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400 mb-2">15+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}