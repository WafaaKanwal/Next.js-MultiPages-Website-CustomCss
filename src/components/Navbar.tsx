'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
      <div className="container">
        
        {/* Logo */}
        <div className="logo">
          <Image
            src="/images/wkk.png"
            alt="WK Beauty Salon"
            width={80}
            height={80}
          />
          <span>WK Beauty Salon</span>
        </div>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          <Link href="/" className="menu-item">Home</Link>
          <Link href="/services" className="menu-item">Services</Link>
          <Link href="/products" className="menu-item">Products</Link>
          <Link href="/about" className="menu-item">About</Link>
          <Link href="/contact" className="menu-item">Contact</Link>
        </div>

        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
          />
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 0l4.5 4.5" />
            </svg>
          </button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link href="/" className="menu-item">Home</Link>
          <Link href="/services" className="menu-item">Services</Link>
          <Link href="/products" className="menu-item">Products</Link>
          <Link href="/about" className="menu-item">About</Link>
          <Link href="/contact" className="menu-item">Contact</Link>
        </div>
      )}
    </nav>
  );
}
