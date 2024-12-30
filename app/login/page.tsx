import Link from "next/link";

export default function LoginPage() {
    return (
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 md:w-1/2 lg:w-1/3 bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Welcome Back
          </h2>
  
          <form action="#" method="POST">
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
            <div className="mb-6">
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
  
            {/* Submit Button */}
            <div className="mb-4">
              <button
                type="submit"
                className="w-full py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Login
              </button>
            </div>
          </form>
  
          {/* Forgot Password Link */}
          <div className="text-center mb-6">
            <Link href="/forgot-password" className="text-indigo-500 hover:underline">
              Forgot your password?
            </Link>
          </div>
  
          {/* Redirect to Register */}
          <div className="text-center">
            <p className="text-gray-600">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="text-indigo-500 hover:underline">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </section>
    );
  }
  