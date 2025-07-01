import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Mission & Vision | CLC Foundation',
  description: 'Learn about the CLC Foundation mission to help orphans, poor and disadvantaged children & youths receive equal opportunity in education.',
};

export default function MissionPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary text-clean py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6">CLC Foundation Mission & Vision</h1>
          <p className="text-2xl mb-4 font-medium">For Better Life</p>
          <div className="w-24 h-px bg-accent mx-auto"></div>
        </div>
      </section>

      {/* Mission Content */}
      <section className="py-16 px-4 bg-clean">
        <div className="container mx-auto max-w-6xl">
          {/* Mission and Objectives */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-primary">Mission and Objectives</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg leading-relaxed">
                      To help orphans, poor and disadvantaged children & youths receive equal opportunity in education
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg leading-relaxed">
                      To prevent children and youths from being trafficked and abused
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg leading-relaxed">
                      To help those youths to receive proper employment upon finishing their study and training with us
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg leading-relaxed">
                      To provide scholarships as an option to continue their higher education in Bachelor Degree
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/mission/01.jpg"
                  alt="CLC Foundation Mission - Helping Children"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Character Development Section */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg md:order-first">
                <Image
                  src="/images/mission/02.jpg"
                  alt="CLC Foundation - Character Development"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-primary">Character Development</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg leading-relaxed">
                      To teach and train children & youths in right and good morality, ethics, discipline and self-development through the mind in order to be good citizens in the society
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-lg leading-relaxed">
                      To maintain and promote Thai culture and tradition
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* For Better Community Section */}
          <div className="mb-16">
            <div className="bg-background rounded-lg p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-primary text-center">For Better Community</h2>
              
              <div className="max-w-4xl mx-auto">
                <p className="text-lg leading-relaxed text-center mb-6">
                  Our Center also supports our students and the public to do many social activities such as:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-primary mb-3">Community Service</h3>
                    <p className="text-gray-700">
                      Cleaning communities and providing donation support to those in need
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-primary mb-3">Care for Vulnerable</h3>
                    <p className="text-gray-700">
                      Hosting lunch/dinner for orphans and mentally/physically handicapped children
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-primary mb-3">Disaster Relief</h3>
                    <p className="text-gray-700">
                      Worldwide disaster relief support and emergency assistance
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-primary mb-3">Many More</h3>
                    <p className="text-gray-700">
                      Various other community activities that benefit society as a whole
                    </p>
                  </div>
                </div>
              </div>
            </div>
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