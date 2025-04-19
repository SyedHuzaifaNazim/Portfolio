'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md z-50 sticky top-0">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center py-4 px-4">
        
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold text-gray-900">
            Huzaifa
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-sm text-gray-700"
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>

        {/* Nav Menu */}
        <nav
          className={`${
            menuOpen ? 'block' : 'hidden'
          } md:flex space-x-6 items-center`}
        >
          <Link href="/About" className="text-gray-700 hover:text-orange-600">
          {/* <div id="preloader">
            <div id="loader" className="dots-fade">
                <div></div>
                <div></div>
                <div></div>
            </div>
          </div> */}
            About
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-orange-600">
            Services
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-orange-600">
            Journal
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-orange-600">
            Contact
          </Link>
          <Link
            href="/contact"
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
          >
            Let's Work Together
          </Link>
        </nav>
      </div>
    </header>
  );
}
