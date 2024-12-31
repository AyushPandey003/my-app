import DashboardHeroSection from "../components/dashboard/dashboard";

export default function DashboardPage() {
  return (
    <div>
      {/* Hero Section */}
      <DashboardHeroSection />

      {/* Main Dashboard Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Fraud Report Stats */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Fraud Reports</h2>
            <p className="text-3xl font-bold text-indigo-600">150</p>
            <p className="text-sm text-gray-500">Reports processed this month</p>
          </div>

          {/* Account Stats */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Account Overview</h2>
            <p className="text-3xl font-bold text-indigo-600">Active</p>
            <p className="text-sm text-gray-500">Your account status</p>
          </div>

          {/* Investigations Stats */}
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Ongoing Investigations</h2>
            <p className="text-3xl font-bold text-indigo-600">32</p>
            <p className="text-sm text-gray-500">Active cases being investigated</p>
          </div>
        </div>
      </div>
    </div>
  );
}
