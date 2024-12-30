import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p className="text-gray-400">
            DigitalForensics is your partner in combating financial fraud and tax evasion with cutting-edge tools and analytics.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <nav className="flex flex-col space-y-2">
            <a href="/" className="hover:text-indigo-400">Home</a>
            <a href="/tools" className="hover:text-indigo-400">Tools</a>
            <a href="/about" className="hover:text-indigo-400">About</a>
            <a href="/contact" className="hover:text-indigo-400">Contact</a>
          </nav>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://twitter.com" className="hover:text-indigo-400">
              <FaTwitter size={24} />
            </a>
            <a href="https://linkedin.com" className="hover:text-indigo-400">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com" className="hover:text-indigo-400">
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-500">
        &copy; {new Date().getFullYear()} DigitalForensics. All Rights Reserved.
      </div>
    </footer>
  );
}
