import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-primary text-clean pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Hartanto Foundation</h3>
            <p className="mb-4">
              Working to combat human trafficking through awareness, education, and rehabilitation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-clean hover:text-accent transition-colors">
                <FontAwesomeIcon icon={faFacebook} className="h-6 w-6" />
              </a>
              <a href="#" className="text-clean hover:text-accent transition-colors">
                <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
              </a>
              <a href="#" className="text-clean hover:text-accent transition-colors">
                <FontAwesomeIcon icon={faInstagram} className="h-6 w-6" />
              </a>
              <a href="#" className="text-clean hover:text-accent transition-colors">
                <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/mission" className="text-clean hover:text-accent transition-colors">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="/meditation-center" className="text-clean hover:text-accent transition-colors">
                  Meditation Center
                </Link>
              </li>
              <li>
                <Link href="/scholarship" className="text-clean hover:text-accent transition-colors">
                  Scholarship Programs
                </Link>
              </li>
              <li>
                <Link href="/press-media" className="text-clean hover:text-accent transition-colors">
                  Press & Media
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/donate" className="text-clean hover:text-accent transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-clean hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-clean hover:text-accent transition-colors">
                  Volunteer
                </a>
              </li>
              <li>
                <a href="#" className="text-clean hover:text-accent transition-colors">
                  Partner With Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-4">Contact</h3>
            <address className="not-italic">
              <p className="mb-2">123 Foundation Way</p>
              <p className="mb-2">Jakarta, Indonesia 12345</p>
              <p className="mb-2">Email: info@hartantofoundation.org</p>
              <p>Phone: +62 123 456 7890</p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Hartanto Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
