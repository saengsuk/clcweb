import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Press & Media | CLC Foundation',
  description: 'Selected articles and media coverage about the CLC Foundation\'s work with vulnerable children and community learning center.',
};

export default function PressMediaPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary text-clean py-20 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 flex items-center justify-center gap-3">
            📚 Press & Media
          </h1>
          <p className="text-xl mb-0">Selected articles and media coverage about our work</p>
        </div>
      </section>

      {/* Press Coverage */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-primary text-center">Press Coverage</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Thai Media Coverage */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-96 md:h-[500px]">
                <Image
                  src="/images/press/matichon.jpg"
                  alt="Matichon newspaper coverage"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Thai Media Coverage</h3>
                <p className="text-gray-600 mb-4 font-medium">
                  <strong>Matichon Newspaper</strong>
                </p>
                <p className="text-lg leading-relaxed">
                  Coverage in major Thai publications highlighting our community impact and educational programs.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-96 md:h-[500px]">
                <Image
                  src="/images/press/dailynews.jpg"
                  alt="Daily News coverage"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Local News Features</h3>
                <p className="text-gray-600 mb-4 font-medium">
                  <strong>Daily News Thailand</strong>
                </p>
                <p className="text-lg leading-relaxed">
                  Local media recognition of our scholarship programs and community learning initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Articles */}
      <section className="py-16 px-4 bg-clean">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-primary text-center">📚 Selected Articles</h2>
          
          <div className="space-y-12">
            {/* Article 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-64 md:h-full">
                  <Image
                    src="/images/press/link1.jpg"
                    alt="Girls at temple striving for better life"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    1. Saved by the temple: the girls of Bangkok striving for a better life
                  </h3>
                  <p className="text-gray-600 mb-4 font-medium">
                    <strong>Source:</strong> The National.ae
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    An inspiring story about young women finding hope and opportunity through the temple's community learning center programs.
                  </p>
                  <div className="flex gap-4">
                    <a 
                      href="https://www.thenationalnews.com/lifestyle/travel/saved-by-the-temple-the-girls-of-bangkok-striving-for-a-better-life-1.948075" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-accent text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors font-semibold"
                    >
                      Read Article
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="border-t border-gray-200 my-8"></div>

            {/* Article 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 flex flex-col justify-center md:order-first">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    2. 3 remarkably inspiring people I've met in 4 months of traveling
                  </h3>
                  <p className="text-gray-600 mb-4 font-medium">
                    <strong>Source:</strong> Wordpress.com
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    A traveler's perspective on meeting remarkable individuals making a difference in their communities, including work at our center.
                  </p>
                  <div className="flex gap-4">
                    <a 
                      href="https://whichcountryfrom.com/2018/03/22/3-remarkably-inspiring-people-ive-met-in-4-months-of-traveling/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-accent text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors font-semibold"
                    >
                      Read Article
                    </a>
                  </div>
                </div>
                <div className="relative h-64 md:h-full">
                  <Image
                    src="/images/press/link2.jpg"
                    alt="Community Learning Center and inspiring people"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="border-t border-gray-200 my-8"></div>

            {/* Article 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-64 md:h-full">
                  <Image
                    src="/images/press/link3.jpg"
                    alt="Embassy of Japan community learning center project"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    3. The Project for Constructing the Community Learning Center for Vulnerable Children
                  </h3>
                  <p className="text-gray-600 mb-4 font-medium">
                    <strong>Source:</strong> Embassy of Japan in Thailand
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    Official documentation of the Japanese Embassy's support for constructing community learning facilities for vulnerable children.
                  </p>
                  <div className="flex gap-4">
                    <a 
                      href="https://www.th.emb-japan.go.jp/itpr_th/1921.html" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-accent text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors font-semibold"
                    >
                      Read Article
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-primary text-clean">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Learn More About Our Work</h2>
          <p className="text-lg mb-8">
            Discover how the CLC Foundation is making a difference in the lives of vulnerable children and youth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/mission" 
              className="bg-accent text-clean px-8 py-4 rounded-full hover:bg-opacity-90 transition-colors font-semibold"
            >
              Our Mission
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent border-2 border-clean text-clean px-8 py-4 rounded-full hover:bg-white/10 transition-colors font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}