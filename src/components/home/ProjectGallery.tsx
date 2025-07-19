import Image from 'next/image';
import { featuredImages } from '@/data/dummy';

export function ProjectGallery() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Bringing Visions to Life
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every project tells a story of collaboration, innovation, and sustainable design excellence
          </p>
        </div>

        {/* Masonry-style Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Large Featured Image */}
          <div className="lg:col-span-2 lg:row-span-2 group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
            <div className="aspect-square lg:aspect-auto lg:h-full">
              <Image
                src={featuredImages[0].url}
                alt={featuredImages[0].alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-6 left-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 bg-emerald-600 rounded-full text-sm font-medium mb-2">
                  {featuredImages[0].category}
                </span>
                <h3 className="text-xl font-semibold">{featuredImages[0].alt}</h3>
              </div>
            </div>
          </div>

          {/* Smaller Images */}
          {featuredImages.slice(1).map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="aspect-square">
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-2 py-1 bg-emerald-600 rounded-full text-xs font-medium mb-1">
                    {image.category}
                  </span>
                  <h3 className="text-sm font-semibold">{image.alt}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors cursor-pointer group">
            <span className="mr-2">View All Projects</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}