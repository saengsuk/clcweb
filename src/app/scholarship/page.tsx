import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Scholarship Programs | Hartanto Foundation',
  description: 'Our scholarship programs provide educational opportunities for survivors of human trafficking to rebuild their lives.',
};

export default function ScholarshipPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary text-clean py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6">Scholarship Programs</h1>
          <p className="text-xl mb-0">Empowering survivors through education and opportunity</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 bg-clean">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-primary">Education as Empowerment</h2>
            <p className="text-lg mb-4">
              The Hartanto Foundation Scholarship Program was established to provide survivors of human trafficking with access to education and vocational training. We believe that education is a powerful tool for empowerment and sustainable recovery.
            </p>
            <p className="text-lg mb-0">
              Our scholarships cover a range of educational opportunities, from basic literacy and high school completion to vocational training and university degrees. Each scholarship is tailored to the individual's needs, goals, and circumstances.
            </p>
          </div>
        </div>
      </section>

      {/* Scholarship Types */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-12 text-primary text-center">Our Scholarship Programs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-clean p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif font-bold mb-4 text-primary">Academic Scholarships</h3>
              <p className="mb-0">
                Full and partial scholarships for high school, college, and university education, including tuition, books, and living expenses.
              </p>
            </div>
            
            <div className="bg-clean p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif font-bold mb-4 text-primary">Vocational Training</h3>
              <p className="mb-0">
                Funding for vocational and technical training programs that lead to sustainable employment opportunities.
              </p>
            </div>
            
            <div className="bg-clean p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif font-bold mb-4 text-primary">Language & Literacy</h3>
              <p className="mb-0">
                Programs focused on language acquisition and basic literacy skills, providing essential foundations for further education.
              </p>
            </div>
            
            <div className="bg-clean p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif font-bold mb-4 text-primary">Entrepreneurship Grants</h3>
              <p className="mb-0">
                Support for survivors interested in starting their own businesses, including training, mentorship, and seed funding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 px-4 bg-clean">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-12 text-primary text-center">Application Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-primary text-clean rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-xl font-serif font-bold mb-4 text-primary">Initial Consultation</h3>
              <p>
                Meet with our education coordinator to discuss your goals, interests, and educational background.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary text-clean rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-xl font-serif font-bold mb-4 text-primary">Application Submission</h3>
              <p>
                Complete the scholarship application form with assistance from our support team if needed.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary text-clean rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-xl font-serif font-bold mb-4 text-primary">Review & Approval</h3>
              <p>
                Applications are reviewed by our scholarship committee, with decisions typically made within 4-6 weeks.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-lg mb-6">
              Our scholarship application process is designed to be supportive and trauma-informed. We provide assistance at every step to ensure that the process itself is empowering rather than overwhelming.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-primary text-clean px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors"
            >
              Contact Us to Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-12 text-primary text-center">Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <blockquote className="bg-clean p-6 rounded-lg italic">
              <p className="mb-4">
                "The scholarship I received changed my life. I was able to complete my nursing degree and now work at a local hospital. Education gave me the independence and confidence I needed to rebuild my life."
              </p>
              <footer className="font-medium">— Scholarship Recipient</footer>
            </blockquote>
            
            <blockquote className="bg-clean p-6 rounded-lg italic">
              <p className="mb-4">
                "After years of having my dreams put on hold, the vocational training scholarship allowed me to learn computer skills and secure a stable job. I'm now financially independent and helping support my family."
              </p>
              <footer className="font-medium">— Scholarship Recipient</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-primary text-clean">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Support Our Scholarship Programs</h2>
          <p className="text-lg mb-8">
            Your contribution helps provide educational opportunities for survivors of human trafficking.
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