import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Contact Us | Hartanto Foundation',
  description: 'Get in touch with the Hartanto Foundation. Contact us for inquiries, support, or to learn more about our work against human trafficking.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary text-clean py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6">Contact Us</h1>
          <p className="text-xl mb-0">We&apos;d love to hear from you</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-clean">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-primary">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-primary font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-primary font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your email address"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-primary font-medium mb-2">Subject</label>
                  <select 
                    id="subject" 
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="donation">Donation Information</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="media">Media Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-primary font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="bg-primary text-clean px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-primary">Contact Information</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-serif font-bold mb-2 text-primary">Address</h3>
                  <address className="not-italic">
                    <p>Hartanto Foundation</p>
                    <p>123 Foundation Way</p>
                    <p>Jakarta, Indonesia 12345</p>
                  </address>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-bold mb-2 text-primary">Phone</h3>
                  <p>+62 123 456 7890</p>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-bold mb-2 text-primary">Email</h3>
                  <p>info@hartantofoundation.org</p>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-bold mb-2 text-primary">Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-bold mb-2 text-primary">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-primary hover:text-accent transition-colors">
                      Facebook
                    </a>
                    <a href="#" className="text-primary hover:text-accent transition-colors">
                      Twitter
                    </a>
                    <a href="#" className="text-primary hover:text-accent transition-colors">
                      Instagram
                    </a>
                    <a href="#" className="text-primary hover:text-accent transition-colors">
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-primary text-center">Find Us</h2>
          <div className="bg-clean p-4 rounded-lg shadow-md">
            {/* Google Maps Embed Placeholder */}
            <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Google Maps Embed Would Go Here</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-clean">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-12 text-primary text-center">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-serif font-bold mb-2 text-primary">How can I donate to the Hartanto Foundation?</h3>
              <p>
                You can donate through our website on the <Link href="/donate" className="text-accent hover:underline">Donate page</Link>, by mail, or by phone. We accept one-time and recurring donations.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold mb-2 text-primary">How can I volunteer with the Hartanto Foundation?</h3>
              <p>
                We welcome volunteers in various capacities. Please contact us through this form or email us at volunteer@hartantofoundation.org to learn about current opportunities.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold mb-2 text-primary">How can I apply for a scholarship?</h3>
              <p>
                Information about our scholarship programs and application process can be found on our <Link href="/scholarship" className="text-accent hover:underline">Scholarship page</Link>. You can also contact our education coordinator directly at scholarships@hartantofoundation.org.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold mb-2 text-primary">How can I request a speaker for my event?</h3>
              <p>
                You can request a speaker from the Hartanto Foundation by contacting our media relations team at media@hartantofoundation.org or through this contact form.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 px-4 bg-primary text-clean">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Stay Connected</h2>
          <p className="text-lg mb-8">
            Sign up for our newsletter to receive updates about our work, events, and ways to get involved.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-4 py-3 rounded-full w-full focus:outline-none text-primary"
            />
            <button 
              className="bg-accent text-clean px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
