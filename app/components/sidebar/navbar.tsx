"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { signOut } from "next-auth/react"; // Import signOut

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-md border-b-sky-200 border-b-2">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/" className="hover:text-indigo-400">DigitalForensics</Link>
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
          <Link
            href="/login"
            className="hover:text-indigo-400 transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition-colors"
          >
            Register
          </Link>
          <Link
            href="/dashboard"
            className="hover:text-indigo-400 transition-colors"
          >
            Dashboard
          </Link>

          {/* Sign Out */}
          <button
            onClick={() => signOut()}
            className="hover:text-indigo-400 transition-colors"
          >
            Sign Out
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <nav className="flex flex-col space-y-2 py-4 px-6">
            <Link
              href="/login"
              className="hover:text-indigo-400 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition-colors"
            >
              Register
            </Link>

            {/* Sign Out (Mobile) */}
            <button
              onClick={() => signOut()}
              className="hover:text-indigo-400 transition-colors"
            >
              Sign Out
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
