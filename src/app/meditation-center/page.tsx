import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Meditation Center | Hartanto Foundation',
  description: 'Our meditation center provides a sanctuary for healing and inner transformation for survivors of human trafficking.',
};

export default function MeditationCenterPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary text-clean py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6">Meditation Center</h1>
          <p className="text-xl mb-0">A sanctuary for healing and inner transformation</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 bg-clean">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-primary">Finding Peace Within</h2>
            <p className="text-lg mb-4">
              The Hartanto Foundation Meditation Center was established as a sanctuary for survivors of human trafficking to find peace, healing, and inner strength. Our center combines traditional meditation practices with trauma-informed care to support the holistic recovery of survivors.
            </p>
            <p className="text-lg mb-0">
              Located in a serene environment, our center provides a safe space for individuals to reconnect with themselves and begin their journey toward healing and self-discovery.
            </p>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-12 text-primary text-center">Our Programs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-clean p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif font-bold mb-4 text-primary">Trauma-Informed Meditation</h3>
              <p className="mb-0">
                Specialized meditation practices designed for trauma survivors, led by certified instructors with experience in trauma recovery.
              </p>
            </div>
            
            <div className="bg-clean p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif font-bold mb-4 text-primary">Mindfulness Workshops</h3>
              <p className="mb-0">
                Weekly workshops teaching practical mindfulness techniques that participants can incorporate into their daily lives.
              </p>
            </div>
            
            <div className="bg-clean p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif font-bold mb-4 text-primary">Healing Retreats</h3>
              <p className="mb-0">
                Multi-day immersive experiences combining meditation, nature connection, creative expression, and community building.
              </p>
            </div>
            
            <div className="bg-clean p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif font-bold mb-4 text-primary">Individual Guidance</h3>
              <p className="mb-0">
                One-on-one sessions with experienced meditation teachers to address specific needs and provide personalized support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-clean">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-12 text-primary text-center">Impact Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <blockquote className="bg-background p-6 rounded-lg italic">
              <p className="mb-4">
                "The meditation center became my sanctuary when I had nowhere else to turn. The practices I learned helped me find peace within myself and gave me the strength to rebuild my life."
              </p>
              <footer className="font-medium">— Program Participant</footer>
            </blockquote>
            
            <blockquote className="bg-background p-6 rounded-lg italic">
              <p className="mb-4">
                "After experiencing such trauma, I never thought I could feel calm again. The meditation techniques I learned at the center have been life-changing. I now have tools to manage my anxiety and find moments of peace."
              </p>
              <footer className="font-medium">— Program Participant</footer>
            </blockquote>
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