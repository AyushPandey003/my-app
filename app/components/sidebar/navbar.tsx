"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-md border-b-sky-200 border-b-2">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/" className="hover:text-indigo-400">DigitalForensics</a>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center flex-1 mx-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Links (Desktop) */}
        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="/login"
            className="hover:text-indigo-400 transition-colors"
          >
            Sign In
          </a>
          <a
            href="/register"
            className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition-colors"
          >
            Register
          </a>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <nav className="flex flex-col space-y-2 py-4 px-6">
            <a
              href="/login"
              className="hover:text-indigo-400 transition-colors"
            >
              Sign In
            </a>
            <a
              href="/register"
              className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition-colors"
            >
              Register
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
