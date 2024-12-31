"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function DashboardHeroSection() {
    const session=useSession();
    if(session.status==="loading"){
        return <p>Loading...</p>
    }
    if(session.status==="unauthenticated"){
        return <p>Unauthenticated</p>
    }
    return (
      <section className="relative bg-gray-900 text-white">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage:
              'url("https://via.placeholder.com/1920x1080?text=Digital+Forensics+Dashboard")',
          }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  
        {/* Content */}
        <div className="relative container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Your Digital Forensics Dashboard
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Uncover financial fraud, analyze data, and make informed decisions.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/reports"
              className="bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-6 rounded-md text-lg"
            >
              View Reports
            </Link>
            <Link
              href="/tax-calculator"
              className="bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-md text-lg"
            >
              Calculate Tax
            </Link>
          </div>
        </div>
      </section>
    );
  }
  