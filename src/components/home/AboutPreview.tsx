import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { PersonProfile } from '@/types';

interface AboutPreviewProps {
  profile: PersonProfile;
}

export function AboutPreview({ profile }: AboutPreviewProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-amber-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative">
            {/* Main Portrait */}
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={profile.portrait}
                  alt={profile.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-lg p-4 border border-emerald-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">15+</div>
                  <div className="text-xs text-gray-600 font-medium">Years</div>
                </div>
              </div>

              {/* Floating Achievement */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-2xl shadow-lg p-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">PMP Certified</span>
                </div>
              </div>
            </div>

            {/* Background Pattern */}
            <div className="absolute -inset-4 -z-10">
              <div className="w-full h-full rounded-3xl bg-gradient-to-br from-emerald-100/50 to-amber-100/50 transform rotate-3"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6">
                Meet Our Principal
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Meet {profile.name.split(' ')[0]}
              </h2>
              
              <p className="text-2xl text-emerald-600 mb-6 font-medium">
                {profile.title}
              </p>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              {profile.bio}
            </p>
            
            {/* Qualifications Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-emerald-100">
                <div className="text-emerald-600 font-semibold mb-2">Experience</div>
                <div className="text-gray-700">{profile.experience}</div>
              </div>
              
              {profile.qualifications.slice(0, 3).map((qual, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-emerald-100">
                  <div className="text-emerald-600 font-semibold mb-2">Qualification</div>
                  <div className="text-gray-700 text-sm">{qual}</div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about">
                <Button variant="primary" size="lg" className="group">
                  <span>Learn More About Our Approach</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </Link>
              
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Start a Conversation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}