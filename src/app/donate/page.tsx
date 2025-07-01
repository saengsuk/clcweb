import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Donate | Hartanto Foundation',
  description: 'Support the Hartanto Foundation\'s work in combating human trafficking through your generous donations.',
};

export default function DonatePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary text-clean py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6">Donate to CLC</h1>
          <p className="text-xl mb-0">Your support makes our work possible</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 bg-clean">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-primary">Make a Difference Today</h2>
            <p className="text-lg mb-4">
              Your donation to the Hartanto Foundation directly supports our programs to combat human trafficking and assist survivors. Every contribution, regardless of size, helps us continue our vital work.
            </p>
            <p className="text-lg mb-6">
              As a registered non-profit organization, all donations to the Hartanto Foundation are tax-deductible to the extent allowed by law.
            </p>
            <div className="inline-block bg-accent text-clean px-8 py-4 rounded-full text-xl font-bold">
              Donate Now
            </div>
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-12 text-primary text-center">Ways to Give</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-clean p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif font-bold mb-4 text-primary">One-Time Donation</h3>
              <p className="mb-4">
                Make an immediate impact with a one-time gift of any amount. Your contribution will be directed to where it&apos;s needed most.
              </p>
              <div className="bg-accent text-clean px-4 py-2 rounded-full inline-block font-medium">
                Donate Now
              </div>
            </div>

            <div className="bg-clean p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif font-bold mb-4 text-primary">Monthly Giving</h3>
              <p className="mb-4">
                Become a sustaining supporter by setting up a recurring monthly donation. This helps us plan and sustain our programs long-term.
              </p>
              <div className="bg-accent text-clean px-4 py-2 rounded-full inline-block font-medium">
                Become a Monthly Donor
              </div>
            </div>

            <div className="bg-clean p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif font-bold mb-4 text-primary">Corporate Partnerships</h3>
              <p className="mb-4">
                Partner with us as a business to make a significant impact while demonstrating your commitment to social responsibility.
              </p>
              <Link 
                href="/contact" 
                className="text-accent font-medium hover:underline"
              >
                Contact Us to Learn More →
              </Link>
            </div>

            <div className="bg-clean p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif font-bold mb-4 text-primary">Legacy Giving</h3>
              <p className="mb-4">
                Create a lasting impact by including the Hartanto Foundation in your estate planning or making a planned gift.
              </p>
              <Link 
                href="/contact" 
                className="text-accent font-medium hover:underline"
              >
                Contact Us to Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-4 bg-clean">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-12 text-primary text-center">Your Impact</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-4">$50</div>
              <p>
                Provides a day of trauma-informed care and meditation training for a survivor
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-4">$250</div>
              <p>
                Funds a month of vocational training to help a survivor build job skills
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-4">$1,000</div>
              <p>
                Sponsors a semester of education for a scholarship recipient
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg mb-6">
              Every donation, regardless of size, contributes to our mission of combating human trafficking and supporting survivors.
            </p>
            <div className="bg-accent text-clean px-6 py-3 rounded-full inline-block font-medium">
              Donate Now
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-primary text-center">Our Commitment to Transparency</h2>
          <p className="text-lg mb-8 text-center">
            The Hartanto Foundation is committed to financial transparency and accountability. We ensure that your donations are used effectively and efficiently to support our mission.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-clean p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif font-bold mb-4 text-primary">Financial Reports</h3>
              <p className="mb-4">
                We publish annual financial reports detailing our income, expenses, and program outcomes. These reports are available to all donors and the public.
              </p>
              <Link 
                href="#" 
                className="text-accent font-medium hover:underline"
              >
                View Our Annual Report →
              </Link>
            </div>

            <div className="bg-clean p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif font-bold mb-4 text-primary">Program Effectiveness</h3>
              <p className="mb-4">
                We regularly evaluate our programs to ensure they are achieving meaningful outcomes for the survivors we serve and making progress in our mission.
              </p>
              <Link 
                href="/mission" 
                className="text-accent font-medium hover:underline"
              >
                Learn About Our Impact →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4 bg-primary text-clean">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Questions About Donating?</h2>
          <p className="text-lg mb-8">
            Our team is here to help with any questions you may have about making a donation or supporting our work.
          </p>
          <Link 
            href="/contact" 
            className="bg-transparent border-2 border-clean text-clean px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
