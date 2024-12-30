export default function HeroSection() {
    return (
      <section className="relative bg-gray-900 text-white">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage:
              'url("https://via.placeholder.com/1920x1080?text=Digital+Forensics")',
          }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  
        {/* Content */}
        <div className="relative container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Uncover Financial Fraud with Precision
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Empower your investigations with advanced digital forensics tools and
            analytics.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/register"
              className="bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-6 rounded-md text-lg"
            >
              Get Started
            </a>
            <a
              href="/learn-more"
              className="bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-md text-lg"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    );
  }
  