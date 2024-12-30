import Link from "next/link";

export default function RegisterPage() {
    return (
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 md:w-1/2 lg:w-1/3 bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Create an Account
          </h2>
  
          <form action="#" method="POST">
            {/* Name Input */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
  
            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="youremail@example.com"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
  
            {/* Password Input */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-semibold">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="********"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
  
            {/* Confirm Password Input */}
            <div className="mb-6">
              <label htmlFor="confirm-password" className="block text-gray-700 font-semibold">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                placeholder="********"
                className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
  
            {/* Submit Button */}
            <div className="mb-4">
              <button
                type="submit"
                className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Create Account
              </button>
            </div>
          </form>
  
          {/* Redirect to Login */}
          <div className="text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="text-indigo-500 hover:underline">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </section>
    );
  }
  