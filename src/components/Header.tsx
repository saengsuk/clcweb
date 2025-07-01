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
    <header className="bg-primary text-clean w-full">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="text-xl font-serif font-bold">Hartanto Foundation</div>
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-clean focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} className="h-6 w-6" />
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-clean hover:text-accent transition-colors">
            Home
          </Link>
          <Link href="/mission" className="text-clean hover:text-accent transition-colors">
            Mission
          </Link>
          <Link href="/meditation-center" className="text-clean hover:text-accent transition-colors">
            Meditation Center
          </Link>
          <Link href="/scholarship" className="text-clean hover:text-accent transition-colors">
            Scholarship
          </Link>
          <Link href="/press-media" className="text-clean hover:text-accent transition-colors">
            Press & Media
          </Link>
          <Link href="/contact" className="text-clean hover:text-accent transition-colors">
            Contact
          </Link>
          <Link 
            href="/donate" 
            className="bg-accent text-clean px-4 py-2 rounded-full hover:bg-opacity-90 transition-colors"
          >
            Donate
          </Link>
        </nav>
      </div>

      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 bg-primary z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="text-xl font-serif font-bold">Hartanto Foundation</div>
          </Link>
          <button
            className="text-clean focus:outline-none"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <FontAwesomeIcon icon={faXmark} className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col space-y-4 p-4">
          <Link 
            href="/" 
            className="text-clean hover:text-accent transition-colors text-xl py-2"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link 
            href="/mission" 
            className="text-clean hover:text-accent transition-colors text-xl py-2"
            onClick={toggleMenu}
          >
            Mission
          </Link>
          <Link 
            href="/meditation-center" 
            className="text-clean hover:text-accent transition-colors text-xl py-2"
            onClick={toggleMenu}
          >
            Meditation Center
          </Link>
          <Link 
            href="/scholarship" 
            className="text-clean hover:text-accent transition-colors text-xl py-2"
            onClick={toggleMenu}
          >
            Scholarship
          </Link>
          <Link 
            href="/press-media" 
            className="text-clean hover:text-accent transition-colors text-xl py-2"
            onClick={toggleMenu}
          >
            Press & Media
          </Link>
          <Link 
            href="/contact" 
            className="text-clean hover:text-accent transition-colors text-xl py-2"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <Link 
            href="/donate" 
            className="bg-accent text-clean px-4 py-2 rounded-full hover:bg-opacity-90 transition-colors text-center mt-4"
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