import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Our Mission | Hartanto Foundation',
  description: 'Learn about the mission, vision, and values of the Hartanto Foundation in our fight against human trafficking.',
};

export default function MissionPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary text-clean py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6">Our Mission & Objectives</h1>
          <p className="text-xl mb-0">Working together to end human trafficking and support survivors</p>
        </div>
      </section>

      {/* Mission Content */}
      <section className="py-16 px-4 bg-clean">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-primary">Our Vision</h2>
            <p className="text-lg mb-4">
              The Hartanto Foundation envisions a world where every person lives with dignity, free from exploitation and trafficking. We believe in the inherent worth of each individual and their right to freedom, safety, and opportunity.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-primary">Our Mission</h2>
            <p className="text-lg mb-4">
              Our mission is to combat human trafficking through comprehensive prevention, intervention, and rehabilitation programs. We work to raise awareness, provide direct services to survivors, and advocate for systemic change.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-primary">Our Values</h2>
            <ul className="list-disc pl-6 space-y-4 text-lg">
              <li><strong>Compassion:</strong> We approach our work with empathy and care for those we serve.</li>
              <li><strong>Dignity:</strong> We honor the inherent worth and agency of every individual.</li>
              <li><strong>Justice:</strong> We work to address the root causes of trafficking and exploitation.</li>
              <li><strong>Collaboration:</strong> We partner with communities, organizations, and governments to maximize our impact.</li>
              <li><strong>Integrity:</strong> We are committed to transparency, accountability, and ethical practices in all we do.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-primary">Our Objectives</h2>
            <ul className="list-disc pl-6 space-y-4 text-lg">
              <li>Raise public awareness about human trafficking and its prevention</li>
              <li>Provide rehabilitation services through our meditation center</li>
              <li>Offer educational opportunities through our scholarship programs</li>
              <li>Advocate for stronger anti-trafficking policies and enforcement</li>
              <li>Build partnerships to create sustainable solutions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-primary">Join Our Mission</h2>
          <p className="text-lg mb-8">
            Together, we can make a difference in the fight against human trafficking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/donate" 
              className="bg-accent text-clean px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors"
            >
              Support Our Work
            </Link>
            <Link 
              href="/contact" 
              className="bg-primary text-clean px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}