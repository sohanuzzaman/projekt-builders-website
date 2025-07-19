import Image from 'next/image';
import { Layout } from '@/components/layout/Layout';
import { Card } from '@/components/ui/Card';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';
import { georginaProfile, coreValuesData, studioPhilosophy } from '@/data/dummy';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-emerald-50 via-white to-amber-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-8">
              Our Story & Mission
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              About Projekt Builders
            </h1>
            
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Dedicated to creating spaces that serve both people and planet through expert project management and sustainable design advocacy.
            </p>
          </div>

          {/* Visual Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">15+</span>
              </div>
              <div className="text-sm font-medium text-gray-700">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">200+</span>
              </div>
              <div className="text-sm font-medium text-gray-700">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">98%</span>
              </div>
              <div className="text-sm font-medium text-gray-700">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">5★</span>
              </div>
              <div className="text-sm font-medium text-gray-700">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Philosophy with Visual Elements */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Philosophy Content */}
            <div>
              <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6">
                Our Philosophy
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Building with Purpose & Integrity
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                {studioPhilosophy.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Key Principles Preview */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-emerald-50 rounded-xl">
                  <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                    <Icon name="leaf" size={20} className="text-white" />
                  </div>
                  <span className="font-medium text-gray-900">Sustainability First</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-amber-50 rounded-xl">
                  <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                    <Icon name="handshake" size={20} className="text-white" />
                  </div>
                  <span className="font-medium text-gray-900">Collaborative Approach</span>
                </div>
              </div>
            </div>

            {/* Visual Collage */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                      alt="Sustainable architecture"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                      alt="Interior design"
                      width={300}
                      height={200}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                      alt="Building materials"
                      width={300}
                      height={200}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                      alt="Project management"
                      width={300}
                      height={300}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-amber-500/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles - Visual Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Principles
            </h2>
            <p className="text-xl text-gray-600">
              Five fundamental values that guide every project decision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValuesData.map((principle, index) => (
              <Card key={index} className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-0">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-amber-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon name={principle.icon} size={32} className="text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">
                    {principle.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {principle.description}
                  </p>

                  {/* Decorative Element */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-emerald-600 font-bold text-sm">{index + 1}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Georgina - Enhanced Visual Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Enhanced Image Section */}
            <div className="relative">
              {/* Main Portrait with Creative Layout */}
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src={georginaProfile.portrait}
                    alt={georginaProfile.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Floating Achievements */}
                <div className="absolute -top-8 -right-8 bg-white rounded-2xl shadow-xl p-6 border border-emerald-100 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-600 mb-1">15+</div>
                    <div className="text-sm text-gray-600 font-medium">Years</div>
                    <div className="text-xs text-gray-500">Experience</div>
                  </div>
                </div>

                <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-2xl shadow-xl p-6 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
                    <div>
                      <div className="font-bold text-lg">PMP</div>
                      <div className="text-sm opacity-90">Certified</div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/2 -right-12 bg-amber-500 text-white rounded-2xl shadow-xl p-4 transform rotate-12 hover:rotate-0 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-2xl font-bold">200+</div>
                    <div className="text-xs">Projects</div>
                  </div>
                </div>
              </div>

              {/* Background Decorative Elements */}
              <div className="absolute -inset-8 -z-10">
                <div className="w-full h-full rounded-3xl bg-gradient-to-br from-emerald-100/30 to-amber-100/30 transform -rotate-3"></div>
              </div>
            </div>

            {/* Enhanced Content Section */}
            <div className="space-y-8">
              <div>
                <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6">
                  Meet Our Principal
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Meet {georginaProfile.name.split(' ')[0]}
                </h2>
                
                <p className="text-2xl text-emerald-600 mb-6 font-medium">
                  {georginaProfile.title}
                </p>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                {georginaProfile.bio}
              </p>
              
              {/* Enhanced Qualifications Display */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Credentials & Experience</h3>
                
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl border border-emerald-200">
                    <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center">
                      <Icon name="building" size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{georginaProfile.experience}</div>
                      <div className="text-sm text-gray-600">In architectural project management</div>
                    </div>
                  </div>
                  
                  {georginaProfile.qualifications.slice(0, 2).map((qual, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                      <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
                        <Icon name="sparkles" size={24} className="text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{qual}</div>
                        <div className="text-sm text-gray-600">Professional certification</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced CTA Section */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/contact">
                  <Button variant="primary" size="lg" className="group">
                    <span>Start Your Project</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Button>
                </Link>
                
                <Link href="/services">
                  <Button variant="outline" size="lg">
                    Explore Our Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Recognition Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-emerald-900 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Trusted by Clients Across Australia
            </h2>
            <p className="text-xl text-gray-300">
              Building lasting relationships through exceptional project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
              <div className="p-8">
                <div className="text-4xl font-bold text-emerald-400 mb-2">98%</div>
                <div className="text-white mb-2">Client Satisfaction</div>
                <div className="text-gray-300 text-sm">Based on project completion surveys</div>
              </div>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
              <div className="p-8">
                <div className="text-4xl font-bold text-emerald-400 mb-2">200+</div>
                <div className="text-white mb-2">Projects Delivered</div>
                <div className="text-gray-300 text-sm">Residential & commercial builds</div>
              </div>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
              <div className="p-8">
                <div className="text-4xl font-bold text-emerald-400 mb-2">15+</div>
                <div className="text-white mb-2">Years Experience</div>
                <div className="text-gray-300 text-sm">In architectural project management</div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-16">
            <Link href="/contact">
              <Button variant="primary" size="lg" className="group">
                <span>Let's Work Together</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}