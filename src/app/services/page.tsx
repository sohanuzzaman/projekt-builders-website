'use client';

import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Card } from '@/components/ui/Card';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';
import { servicePhases } from '@/data/dummy';
import Link from 'next/link';

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState(0);

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

      {/* Service Phases */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Tabs */}
          <div className="hidden lg:block">
            <div className="flex flex-wrap justify-center mb-8 border-b">
              {servicePhases.map((phase, index) => (
                <button
                  key={phase.id}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-3 text-sm font-medium transition-colors border-b-2 ${
                    activeTab === index
                      ? 'border-emerald-600 text-emerald-600'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {phase.title}
                </button>
              ))}
            </div>

            <Card className="min-h-[400px]">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Icon name={servicePhases[activeTab].icon as any} size={32} className="text-emerald-600" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {servicePhases[activeTab].title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {servicePhases[activeTab].description}
                  </p>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Key Responsibilities:
                  </h4>
                  <ul className="space-y-2 mb-8">
                    {servicePhases[activeTab].responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-600">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button variant="primary">
                      Speak to a Project Manager
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>

          {/* Mobile Accordion */}
          <div className="lg:hidden space-y-4">
            {servicePhases.map((phase, index) => (
              <Card key={phase.id} className="overflow-hidden">
                <button
                  onClick={() => setActiveTab(activeTab === index ? -1 : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                      <Icon name={phase.icon as any} size={24} className="text-emerald-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {phase.title}
                    </h3>
                  </div>
                  <Icon 
                    name={activeTab === index ? 'chevron-left' : 'chevron-right'} 
                    size={20} 
                    className="text-gray-400" 
                  />
                </button>
                
                {activeTab === index && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {phase.description}
                    </p>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Key Responsibilities:
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {phase.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <Button variant="primary" size="sm">
                        Speak to a Project Manager
                      </Button>
                    </Link>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can bring your vision to life with expert project management and sustainable design practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Start Your Project
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary" size="lg">
                Book a Discovery Call
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}