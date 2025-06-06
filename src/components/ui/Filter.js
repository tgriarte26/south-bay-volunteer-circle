const Filter = () => {
  return (
    <div className="bg-white p-6 rounded-2xl border shadow-lg w-full max-w-6xl mx-auto mt-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Side Filters */}
        <div className="w-full md:w-1/3 space-y-5">
          <div>
            <label className="text-sm font-semibold text-gray-700 block mb-1">Category</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none">
              <option>All Categories</option>
              <option>Education</option>
              <option>Health</option>
              <option>Environment</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-700 block mb-1">Location</label>
            <input
              type="text"
              placeholder="Enter city name..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-700 block mb-1">Time Commitment</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none">
              <option>Any Time Commitment</option>
              <option>One-time</option>
              <option>Weekly</option>
              <option>Monthly</option>
            </select>
          </div>

          <div>
            <button className="text-sm text-blue-600 font-medium hover:underline">Less filters</button>
          </div>
        </div>

        {/* Right Side Search Input */}
        <div className="w-full md:w-2/3 flex flex-col justify-center">
          <label className="text-sm font-semibold text-gray-700 mb-2">Search Opportunities</label>
          <div className="relative">
            <input
              type="text"
              placeholder="Search for volunteer opportunities..."
              className="w-full px-4 pl-11 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
            />
            <div className="absolute left-4 top-3.5 text-gray-400 text-base">
              🔍
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
