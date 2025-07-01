'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-clean text-primary w-full shadow-md border-b border-border">
      <div className="container mx-auto px-4 py-6">
        {/* Desktop Layout */}
        <div className="hidden md:flex md:flex-col md:items-center">
          {/* Logo and title centered at the top */}
          <Link href="/" className="flex flex-col items-center mb-6">
            <div className="flex items-center space-x-4 mb-2">
              <Image 
                src="/images/logo.png" 
                alt="Hartanto Foundation Logo" 
                width={320} 
                height={90} 
                className="h-24 w-auto"
              />
              <div className="text-center">
                <h1 className="text-2xl font-bold text-primary font-serif leading-tight">
                  Community Learning Center
                </h1>
                <p className="text-lg text-primary font-medium opacity-90">
                  CLC Foundation for Human Development
                </p>
              </div>
            </div>
          </Link>

          {/* Navigation menu centered below logo */}
          <div className="flex items-center justify-center space-x-8">
            <Link href="/" className="text-primary hover:text-accent transition-colors py-2 font-medium">
              Home
            </Link>
            <Link href="/mission" className="text-primary hover:text-accent transition-colors py-2 font-medium">
              Mission
            </Link>
            <Link href="/meditation-center" className="text-primary hover:text-accent transition-colors py-2 font-medium">
              Meditation Center
            </Link>
            <Link href="/scholarship" className="text-primary hover:text-accent transition-colors py-2 font-medium">
              Scholarship
            </Link>
            <Link href="/press-media" className="text-primary hover:text-accent transition-colors py-2 font-medium">
              Press & Media
            </Link>
            <Link href="/contact" className="text-primary hover:text-accent transition-colors py-2 font-medium">
              Contact
            </Link>
            
            {/* Donate button integrated in navigation */}
            <Link 
              href="/donate" 
              className="bg-accent text-clean px-8 py-3 rounded-full hover:bg-opacity-90 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl ml-4"
            >
              Donate
            </Link>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/images/logo.png" 
              alt="Hartanto Foundation Logo" 
              width={170} 
              height={45} 
              className="h-12 w-auto"
            />
            <div className="text-left">
              <h1 className="text-sm font-bold text-primary font-serif leading-tight">
                Community Learning Center
              </h1>
              <p className="text-xs text-primary font-medium opacity-90">
                CLC Foundation
              </p>
            </div>
          </Link>

          {/* Mobile menu button */}
          <button
            className="text-primary focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 bg-clean z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden shadow-lg`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center border-b border-border">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/images/logo.png" 
              alt="Hartanto Foundation Logo" 
              width={160} 
              height={40} 
              className="h-10 w-auto"
            />
            <div className="text-left">
              <h1 className="text-sm font-bold text-primary font-serif leading-tight">
                Community Learning Center
              </h1>
              <p className="text-xs text-primary font-medium opacity-90">
                CLC Foundation
              </p>
            </div>
          </Link>
          <button
            className="text-primary focus:outline-none"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <FontAwesomeIcon icon={faXmark} className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col space-y-4 p-6">
          <Link 
            href="/" 
            className="text-primary hover:text-accent transition-colors text-lg py-2 border-b border-border"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link 
            href="/mission" 
            className="text-primary hover:text-accent transition-colors text-lg py-2 border-b border-border"
            onClick={toggleMenu}
          >
            Mission
          </Link>
          <Link 
            href="/meditation-center" 
            className="text-primary hover:text-accent transition-colors text-lg py-2 border-b border-border"
            onClick={toggleMenu}
          >
            Meditation Center
          </Link>
          <Link 
            href="/scholarship" 
            className="text-primary hover:text-accent transition-colors text-lg py-2 border-b border-border"
            onClick={toggleMenu}
          >
            Scholarship
          </Link>
          <Link 
            href="/press-media" 
            className="text-primary hover:text-accent transition-colors text-lg py-2 border-b border-border"
            onClick={toggleMenu}
          >
            Press & Media
          </Link>
          <Link 
            href="/contact" 
            className="text-primary hover:text-accent transition-colors text-lg py-2 border-b border-border"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <Link 
            href="/donate" 
            className="bg-accent text-clean px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors text-center mt-6 inline-block"
            onClick={toggleMenu}
          >
            Donate
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
