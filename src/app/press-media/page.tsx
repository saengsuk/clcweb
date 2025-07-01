import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Press & Media | Hartanto Foundation',
  description: 'Access press releases, media resources, and news about the Hartanto Foundation\'s work in combating human trafficking.',
};

export default function PressMediaPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary text-clean py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6">Press & Media</h1>
          <p className="text-xl mb-0">News, resources, and stories from the Hartanto Foundation</p>
        </div>
      </section>

      {/* Media Contact */}
      <section className="py-12 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-clean p-8 rounded-lg shadow-md">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-primary">Media Inquiries</h2>
            <p className="text-lg mb-4">
              For press inquiries, interview requests, or additional information about the Hartanto Foundation, please contact our media relations team.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium">Email:</p>
                <p className="mb-2">media@hartantofoundation.org</p>
                <p className="font-medium">Phone:</p>
                <p>+62 123 456 7890</p>
              </div>
              <div>
                <Link 
                  href="/contact" 
                  className="bg-primary text-clean px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors inline-block"
                >
                  Contact Media Relations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-16 px-4 bg-clean">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-12 text-primary">Latest Press Releases</h2>
          
          <div className="space-y-8">
            <div className="border-b border-border pb-8">
              <p className="text-sm text-gray-500 mb-2">June 15, 2025</p>
              <h3 className="text-xl font-serif font-bold mb-2 text-primary">Hartanto Foundation Launches New Scholarship Program for Trafficking Survivors</h3>
              <p className="mb-4">
                The Hartanto Foundation announced today the launch of a new scholarship program aimed at providing higher education opportunities for survivors of human trafficking.
              </p>
              <Link 
                href="#" 
                className="text-accent font-medium hover:underline"
              >
                Read Full Press Release →
              </Link>
            </div>
            
            <div className="border-b border-border pb-8">
              <p className="text-sm text-gray-500 mb-2">May 3, 2025</p>
              <h3 className="text-xl font-serif font-bold mb-2 text-primary">Hartanto Foundation Partners with Local Businesses to Create Employment Opportunities</h3>
              <p className="mb-4">
                A new initiative brings together the Hartanto Foundation and local businesses to create sustainable employment pathways for survivors of human trafficking.
              </p>
              <Link 
                href="#" 
                className="text-accent font-medium hover:underline"
              >
                Read Full Press Release →
              </Link>
            </div>
            
            <div className="border-b border-border pb-8">
              <p className="text-sm text-gray-500 mb-2">March 22, 2025</p>
              <h3 className="text-xl font-serif font-bold mb-2 text-primary">Annual Report Shows Significant Impact in Anti-Trafficking Efforts</h3>
              <p className="mb-4">
                The Hartanto Foundation's 2024 Annual Report reveals substantial progress in awareness campaigns, survivor support, and prevention initiatives.
              </p>
              <Link 
                href="#" 
                className="text-accent font-medium hover:underline"
              >
                Read Full Press Release →
              </Link>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link 
              href="#" 
              className="inline-block bg-primary text-clean px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors"
            >
              View All Press Releases
            </Link>
          </div>
        </div>
      </section>

      {/* Media Resources */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-12 text-primary text-center">Media Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-clean p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif font-bold mb-4 text-primary">Fact Sheets</h3>
              <p className="mb-4">
                Download fact sheets about human trafficking, our programs, and our impact.
              </p>
              <Link 
                href="#" 
                className="text-accent font-medium hover:underline"
              >
                Download Fact Sheets →
              </Link>
            </div>
            
            <div className="bg-clean p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif font-bold mb-4 text-primary">Brand Assets</h3>
              <p className="mb-4">
                Access our logo, brand guidelines, and approved images for media use.
              </p>
              <Link 
                href="#" 
                className="text-accent font-medium hover:underline"
              >
                Download Brand Kit →
              </Link>
            </div>
            
            <div className="bg-clean p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif font-bold mb-4 text-primary">Annual Reports</h3>
              <p className="mb-4">
                View our annual reports detailing our programs, impact, and financial information.
              </p>
              <Link 
                href="#" 
                className="text-accent font-medium hover:underline"
              >
                View Annual Reports →
              </Link>
            </div>
            
            <div className="bg-clean p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif font-bold mb-4 text-primary">Expert Speakers</h3>
              <p className="mb-4">
                Request a speaker from the Hartanto Foundation for your event or interview.
              </p>
              <Link 
                href="/contact" 
                className="text-accent font-medium hover:underline"
              >
                Request a Speaker →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* In the News */}
      <section className="py-16 px-4 bg-clean">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-12 text-primary">In the News</h2>
          
          <div className="space-y-8">
            <div className="border-b border-border pb-8">
              <p className="text-sm text-gray-500 mb-2">Jakarta Post • July 2, 2025</p>
              <h3 className="text-xl font-serif font-bold mb-2 text-primary">Hartanto Foundation's Innovative Approach to Combating Trafficking</h3>
              <p className="mb-4">
                An in-depth look at how the Hartanto Foundation is using meditation and education to help survivors heal and rebuild their lives.
              </p>
              <Link 
                href="#" 
                className="text-accent font-medium hover:underline"
              >
                Read Article →
              </Link>
            </div>
            
            <div className="border-b border-border pb-8">
              <p className="text-sm text-gray-500 mb-2">Global Humanitarian • May 15, 2025</p>
              <h3 className="text-xl font-serif font-bold mb-2 text-primary">The Power of Holistic Recovery: Hartanto Foundation's Meditation Center</h3>
              <p className="mb-4">
                How trauma-informed meditation practices are helping trafficking survivors find peace and healing at the Hartanto Foundation's center.
              </p>
              <Link 
                href="#" 
                className="text-accent font-medium hover:underline"
              >
                Read Article →
              </Link>
            </div>
            
            <div className="border-b border-border pb-8">
              <p className="text-sm text-gray-500 mb-2">Education Today • April 8, 2025</p>
              <h3 className="text-xl font-serif font-bold mb-2 text-primary">Scholarship Program Opens Doors for Trafficking Survivors</h3>
              <p className="mb-4">
                The Hartanto Foundation's scholarship program is creating pathways to education and employment for survivors of human trafficking.
              </p>
              <Link 
                href="#" 
                className="text-accent font-medium hover:underline"
              >
                Read Article →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-primary text-clean">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Stay Updated</h2>
          <p className="text-lg mb-8">
            Sign up for our newsletter to receive the latest news and updates from the Hartanto Foundation.
          </p>
          <Link 
            href="/contact" 
            className="bg-accent text-clean px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors"
          >
            Subscribe to Newsletter
          </Link>
        </div>
      </section>
    </div>
  );
}