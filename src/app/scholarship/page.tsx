import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Scholarship Programs | CLC Foundation',
  description: 'Each year, the centre hands out one-year scholarships as assistant nurses to 25 young people who are orphans or from broken homes and poor.',
};

export default function ScholarshipPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary text-clean py-20 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6">Scholarship</h1>
          <p className="text-xl mb-4 font-medium italic">
            &quot;Each year, the centre hands out one-year scholarships as assistant nurses to 15 young people who are orphans or from broken homes and poor&quot;
          </p>
          <p className="text-sm opacity-80">
            Photo and Content Source: Achara A. (Jan 2017). Bangkok Post: Temple of Dawn offers a beacon of hope
          </p>
        </div>
      </section>

      {/* Main Scholarship Program */}
      <section className="py-16 px-4 bg-clean">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-primary">Assistant Nurse Scholarships</h2>
              <p className="text-lg leading-relaxed mb-6">
                Each year, the center hands out one-year scholarships as assistant nurses to 25 young people who are orphans or from broken homes and poor. Among them are needy youths and children vulnerable to human trafficking or domestic violence.
              </p>
              <p className="text-lg leading-relaxed">
                The center has also introduced state-certified study courses for young people to learn some basic skills like computer work, English, Thai traditional dance, food and soap carving during the weekends.
              </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/scholarship/01.jpg"
                alt="CLC Foundation Scholarship Program"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Course Details */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg md:order-first">
              <Image
                src="/images/scholarship/02.jpg"
                alt="State-certified study courses"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-primary">State-Certified Study Courses</h2>
              <p className="text-lg leading-relaxed mb-4">
                The course runs between 50 and 60 hours and graduates receive a certificate in March every year. The center has been supplied with a list of needy girls by the Ministry of Education.
              </p>
              <p className="text-lg leading-relaxed">
                This year the Ministry of Social Development will also send a similar list to the center.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ms. Darunee's Story */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-primary text-center">Student Success Story</h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-lg p-8 md:p-10 shadow-lg">
              <blockquote className="text-lg italic mb-6 text-primary font-medium">
                &quot;Father [Mr Hartanto] doesn&apos;t solve all our problems for us, but guides us to a solution. We need to think on our own but if we feel helpless, he is there for us to consult and seek advice.&quot;
              </blockquote>

              <div className="space-y-4 text-lg leading-relaxed">
                <blockquote className="italic text-gray-700 border-l-4 border-accent pl-4">
                  <p className="mb-2">
                    &quot;When I was in Mathayom 4, my parents said they couldn&apos;t afford to send me to school anymore. But my teacher helped me get through to the final year of secondary.&quot;
                  </p>
                  <p>
                    &quot;She said there was a place that could help me get educated and it was here,&quot; 
                  </p>
                  <footer className="text-sm text-gray-600 mt-2">— Ms Darunee, who is from a boat-dwelling family in Samut Sakhon</footer>
                </blockquote>

                <p className="text-gray-700">
                  She enrolled in the ninth batch of students at the centre three years ago. After a one-year assistant nursing course at Siam University in collaboration with Thonburi Hospital, she has been working as a nurse at Thonburi 1 Hospital for two years.
                </p>
              </div>

              <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                <p className="italic text-gray-700">
                  &quot;Some were abused or were orphans. The center has helped them to find their feet again, with renewed confidence and independence&quot; said Ms. Darunee (a student)
                </p>
              </div>
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/scholarship/darunee.jpg"
                alt="Ms. Darunee - Scholarship recipient and nurse"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-white font-medium">Ms. Darunee</p>
                <p className="text-white/90 text-sm">Scholarship Recipient & Nurse</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 italic">
              Photo Source: N.A. (March 2016). Flexible Learning Strategies: 127 disadvantaged girls successfully became nurses at a Community Learning Center in a temple (Thailand)
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Scholarship Information */}
      <section className="py-16 px-4 bg-clean">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-primary text-center flex items-center justify-center gap-3">
            🎓 Scholarship Details
          </h2>

          {/* Scholarship Details Table */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-6 py-4 text-left font-semibold">Curriculums</th>
                    <th className="px-6 py-4 text-left font-semibold">Electronic and Electrical</th>
                    <th className="px-6 py-4 text-left font-semibold">Assistant Nursing at Thonburi Hospital (Siam University)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-primary bg-gray-50">Duration</td>
                    <td className="px-6 py-4" colSpan={2}>1 year</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-primary bg-gray-50">Extra Curriculum Subjects</td>
                    <td className="px-6 py-4" colSpan={2}>
                      <ul className="space-y-1">
                        <li>• English Language</li>
                        <li>• Computer</li>
                        <li>• Thai Dessert</li>
                        <li>• Fruit and Soap Carving</li>
                        <li>• Morality, Dhamma and Meditation<br /><span className="text-sm text-gray-600">(Mind & Self-Development)</span></li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-primary bg-gray-50">Other Benefits</td>
                    <td className="px-6 py-4" colSpan={2}>Free Accommodation, Food & Other Expenses</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-primary bg-gray-50">Course Fee</td>
                    <td className="px-6 py-4" colSpan={2}><span className="text-green-600 font-semibold">Free</span></td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-primary bg-gray-50">Yearly Intake</td>
                    <td className="px-6 py-4" colSpan={2}>
                      <ul className="space-y-1">
                        <li><strong>February:</strong> Receive applications</li>
                        <li><strong>March:</strong> Interview</li>
                        <li><strong>April:</strong> Start Boarding</li>
                        <li><strong>May:</strong> Start Curriculum</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-primary bg-gray-50">Qualifications</td>
                    <td className="px-6 py-4" colSpan={2}>
                      <ol className="space-y-1">
                        <li>1. Orphan (No Parents)</li>
                        <li>2. (Very) poor</li>
                        <li>3. Finish High School (or aged 18–21)</li>
                      </ol>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-primary bg-gray-50">Upon Graduation</td>
                    <td className="px-6 py-4" colSpan={2}>
                      <span className="text-green-600 font-semibold">Guaranteed full-time employment at hospitals for Assistant Nursing Curriculum</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-primary bg-gray-50">Options</td>
                    <td className="px-6 py-4" colSpan={2}>
                      <ol className="space-y-2">
                        <li>1. Full Scholarship in Bachelor&apos;s degree in Nursing at Siam University</li>
                        <li>2. Full Scholarship in Bachelor&apos;s degree in Electronic and Electrical or others</li>
                      </ol>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer and Donate Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-primary text-center">Get Involved</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Volunteer Section */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="relative h-48 rounded-lg overflow-hidden shadow-md mb-6">
                <Image
                  src="/images/scholarship/03.jpg"
                  alt="Volunteer opportunities at CLC Foundation"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Volunteer</h3>
              <p className="text-lg leading-relaxed mb-4">
                Our Community Learning Center Wat Arun welcomes volunteer involvement in a variety of areas and capacities.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Volunteers may provide help to such things as: language instructions, cooking class, or helping to run special events.
              </p>
              <Link 
                href="/contact" 
                className="inline-block bg-primary text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors"
              >
                Contact Us for More Details
              </Link>
            </div>

            {/* Donate Section */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="relative h-48 rounded-lg overflow-hidden shadow-md mb-6">
                <Image
                  src="/images/scholarship/04.jpg"
                  alt="Support scholarships through donations"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Donate</h3>
              <p className="text-lg leading-relaxed mb-4">
                More scholarships mean everything for many needy who have a dream but cannot make it due to the financial crisis.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Help them reach their dream.
              </p>
              <Link 
                href="/donate" 
                className="inline-block bg-accent text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-primary text-clean">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Support Our Scholarship Programs</h2>
          <p className="text-lg mb-8">
            Your contribution helps provide educational opportunities and creates lasting change in young lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/donate" 
              className="bg-accent text-clean px-8 py-4 rounded-full hover:bg-opacity-90 transition-colors font-semibold"
            >
              Make a Donation
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent border-2 border-clean text-clean px-8 py-4 rounded-full hover:bg-white/10 transition-colors font-semibold"
            >
              Volunteer With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
