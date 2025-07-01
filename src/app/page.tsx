import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroCarousel />

      {/* About Section */}
      <section className="py-16 px-4 bg-clean">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-primary">
              The Hartanto Foundation
            </h2>
            <p className="text-lg mb-8">
              The Hartanto Foundation is dedicated to combating human trafficking through awareness, education, and rehabilitation programs. We work tirelessly to create a world where every person can live with dignity and freedom.
            </p>
            <Link 
              href="/mission" 
              className="inline-block bg-primary text-clean px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors"
            >
              Our Mission
            </Link>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center text-primary">
            Our Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Meditation Center */}
            <div className="bg-clean p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif font-bold mb-4 text-primary">Meditation Center</h3>
              <p className="mb-4">A sanctuary for healing and inner transformation, providing survivors with tools for recovery and peace.</p>
              <Link 
                href="/meditation-center" 
                className="text-accent font-medium hover:underline"
              >
                Learn More →
              </Link>
            </div>

            {/* Scholarship Programs */}
            <div className="bg-clean p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif font-bold mb-4 text-primary">Scholarship Programs</h3>
              <p className="mb-4">Educational opportunities for survivors to rebuild their lives and create sustainable futures.</p>
              <Link 
                href="/scholarship" 
                className="text-accent font-medium hover:underline"
              >
                Learn More →
              </Link>
            </div>

            {/* Awareness Campaigns */}
            <div className="bg-clean p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif font-bold mb-4 text-primary">Awareness Campaigns</h3>
              <p className="mb-4">Public education initiatives to prevent trafficking and promote community involvement.</p>
              <Link 
                href="/press-media" 
                className="text-accent font-medium hover:underline"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-clean text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Join Our Mission Today
          </h2>
          <p className="text-lg mb-8">
            Your support helps us continue our vital work in combating human trafficking and supporting survivors.
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
