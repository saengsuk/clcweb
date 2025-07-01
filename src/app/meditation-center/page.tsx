import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Meditation Center | CLC Foundation',
  description: 'CLC Foundation Meditation Center and Buddha Practice - Understanding the power of the mind and the importance of daily meditation.',
};

export default function MeditationCenterPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary text-clean py-20 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6">CLC Foundation Meditation Center and Buddha Practice</h1>
          <p className="text-xl mb-0">Understanding the power of the mind through meditation</p>
        </div>
      </section>

      {/* Please Keep in Mind */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-primary text-center">Please keep in mind:</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-accent">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center font-bold text-sm mt-1 flex-shrink-0">1</div>
                    <p className="text-lg leading-relaxed">
                      Without the mind, this body will not move at all; it is the mind that order this body to get up, walk, run, jump and etc.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-accent">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center font-bold text-sm mt-1 flex-shrink-0">2</div>
                    <div>
                      <p className="text-lg leading-relaxed font-semibold mb-2">Gun does not kill- Mind does.</p>
                      <p className="text-gray-600 italic">Note: It's mind that order this body to pick up the gun and shoot</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-accent">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center font-bold text-sm mt-1 flex-shrink-0">3</div>
                    <div>
                      <p className="text-lg leading-relaxed mb-2">A bomb does not explode. Mind does.</p>
                      <p className="text-gray-600 italic">(It is the mind that set the bomb to explode)</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-accent">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center font-bold text-sm mt-1 flex-shrink-0">4</div>
                    <p className="text-lg leading-relaxed font-semibold">The real bomb is mind.</p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-accent">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center font-bold text-sm mt-1 flex-shrink-0">5</div>
                    <p className="text-lg leading-relaxed">All actions be that wholesome and unwholesome, good or evil are carried out by the mind.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/meditationcenter/01.jpg"
                alt="CLC Foundation Meditation Center"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Healthy Life Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white rounded-lg p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-primary text-center">Understanding True Health</h2>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-center font-semibold text-xl text-primary">
                A healthy life is having both a healthy mind and body.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-bold text-green-700 mb-3">✓ Healthy Mind = Healthy Body</h3>
                  <p className="text-green-700">In a healthy mind, there is a guarantee a healthy body</p>
                </div>
                
                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                  <h3 className="font-bold text-red-700 mb-3">✗ Healthy Body ≠ Healthy Mind</h3>
                  <p className="text-red-700">In a healthy body there is no guarantee of healthy mind</p>
                </div>
              </div>
              
              <div className="bg-accent/10 p-6 rounded-lg mt-8">
                <p className="text-center font-medium">
                  Terrorists, criminals, pedophiles, corruptors, cheaters, liars and others all have clean, strong, healthy body but somehow or someway a sick, evil or dirty mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* True Purpose Section */}
      <section className="py-16 px-4 bg-clean">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-primary text-center">The True Purpose of Meditation</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <div className="bg-white rounded-lg p-8 md:p-10 shadow-lg">
              <p className="text-lg leading-relaxed mb-6">
                The true purpose of meditation is to take care of our mind every day in order to gain wisdom. The wisdom that understands things as they really are, especially understands the law of nature, the law of karma, the law of cause and effect, the law of action-reaction as what it really is.
              </p>
              
              <div className="bg-primary/10 p-6 rounded-lg">
                <p className="text-lg leading-relaxed font-medium text-center">
                  Everybody knows the law, but no one understands. If everybody understands the law, he or she will start to meditate in order to prevent the consequences/effects from not meditating (taking care of mind) daily.
                </p>
              </div>
            </div>
            
            {/* Video Content */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-primary mb-4 text-center">Watch: Understanding Meditation</h3>
              <div className="relative w-full" style={{paddingBottom: '56.25%'}}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/NscMV8bQw1U"
                  title="Understanding Meditation"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-primary text-clean">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Support Our Meditation Center</h2>
          <p className="text-lg mb-8">
            Your contribution helps us provide healing spaces and programs for survivors of human trafficking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/donate" 
              className="bg-accent text-clean px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors"
            >
              Donate Now
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent border-2 border-clean text-clean px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}