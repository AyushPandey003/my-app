import Link from "next/link";

export default function Hero() {
    return (
      <main className="bg-gray-100 text-gray-800">
        {/* Hero Section */}
        <section className="flex items-center bg-gray-900 ite text-white py-20 h-[70vh] ">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Uncover the Truth with Digital Forensics
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Empowering investigators with cutting-edge tools to solve financial fraud and tax evasion cases.
            </p>
            <Link
              href="/register"
              className="bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-6 rounded-md text-lg"
            >
              Get Started
            </Link>
          </div>
        </section>
  
        {/* Stats Section */}
        <section className="py-12">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h2 className="text-4xl font-bold text-indigo-500">120+</h2>
              <p className="text-gray-600">Cases Solved</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-indigo-500">30+</h2>
              <p className="text-gray-600">Forensic Tools</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-indigo-500">50+</h2>
              <p className="text-gray-600">Experts on Board</p>
            </div>
          </div>
        </section>
  
        {/* Featured Tools Section */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-8">Explore Our Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg">
                <h3 className="text-xl font-bold mb-4">Tax Evasion Tracker</h3>
                <p className="text-gray-600">
                  Monitor and analyze suspicious financial transactions in real-time.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg">
                <h3 className="text-xl font-bold mb-4">Fraud Detection AI</h3>
                <p className="text-gray-600">
                  Leverage machine learning to uncover hidden fraud patterns.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg">
                <h3 className="text-xl font-bold mb-4">Data Visualization Suite</h3>
                <p className="text-gray-600">
                  Visualize complex datasets with interactive graphs and charts.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Call-to-Action Section */}
        <section className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-6">
              Join thousands of professionals using our tools to combat financial crime.
            </p>
            <Link
              href="/register"
              className="bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-6 rounded-md text-lg"
            >
              Sign Up Now
            </Link>
          </div>
        </section>
      </main>
    );
  }
  