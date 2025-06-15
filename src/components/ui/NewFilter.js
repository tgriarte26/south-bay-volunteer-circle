import { useState } from "react";
import { CircleArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";
import { allOpportunities } from "../../pages/AllOpportunities";

const NewFilter = () => {
  const [filters, setFilters] = useState({
    location: [],
    major: [],
    focusArea: [],
    type: [],
  });

  const [searchTerm, setSearchTerm] = useState(""); // 🔹 Track search input

  const handleCheckboxChange = (category, value) => {
    setFilters((prev) => {
      const isSelected = prev[category].includes(value);
      return {
        ...prev,
        [category]: isSelected
          ? prev[category].filter((item) => item !== value)
          : [...prev[category], value],
      };
    });
  };

  const matchesFilter = (itemTags, selectedFilters) => {
    return selectedFilters.length === 0 || selectedFilters.some(f => itemTags.includes(f));
  };

  const filteredOpportunities = allOpportunities.filter((opp) => {
  const matchesText = (
    opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    opp.organization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
      matchesText &&
      matchesFilter(opp.location, filters.location) &&
      matchesFilter(opp.major, filters.major) &&
      matchesFilter(opp.focusArea, filters.focusArea) &&
      matchesFilter(opp.type, filters.type)
    );
  });

  return (
    <div className="flex justify-center min-h-screen p-8">
      <div className="flex gap-10 max-w-[1500px] w-full">
        {/* Sidebar */}
        <aside className="sidebar">
          <h2 className="text-2xl font-bold text-[#5372f0] mb-6">Filters</h2>

          {/* Location Filter */}
          <label className="block text-lg font-bold mb-2 text-gray-700">Location</label>
          <div className="space-y-2">
            {["Campbell", "Carson", "Cupertino", "El Segundo", "Gardena", "Gilroy", "Hawthorne", "Hermosa Beach", "LA County",
              "Lawndale", "Lomita", "Los Altos", "Los Gatos", "Manhattan Beach", "Milpitas", "Mountain View", "Redondo Beach",
              "San Jose", "Santa Clara", "Sunnyvale", "Torrance", "Wilmington"
            ].map((location) => (
              <div key={location} className="flex items-center">
                <input
                  type="checkbox"
                  id={location}
                  value={location}
                  checked={filters.location.includes(location)}
                  onChange={() => handleCheckboxChange("location", location)}
                  className="checkbox-spacing"
                />
                <label htmlFor={location} className="text-gray-700 ml-2">{location}</label>
              </div>
            ))}
          </div>

          {/* Major Filter */}
          <label className="block text-lg font-bold mb-2 text-gray-700 mt-6">
            Major
          </label>
          <div className="space-y-2">
            {["Biology","Business","Communications","Computer Science","Engineering","Environmental Science",
            "Kinesiology","Nursing","Political Science","Psychology", "Sports Medicine"
            ].map((major) => (
              <div key={major} className="flex items-center">
                <input
                  type="checkbox"
                  id={major}
                  value={major}
                  checked={filters.major.includes(major)}
                  onChange={() => handleCheckboxChange("major", major)}
                  className="checkbox-spacing"
                />
                <label htmlFor={major} className="text-gray-700 ml-2">
                  {major}
                </label>
              </div>
            ))}
          </div>

          {/* Focus Area Filter */}
          <label className="block text-lg font-bold mb-2 text-gray-700 mt-6">Focus Area</label>
          <div className="space-y-2">
            {["Animals", "Arts & Culture", "Children & Youth", "Community", "Education", "Health & Medicine", "Hunger", 
            "International", "Media & Broadcasting", "People With Disabilities", "Seniors", "Sports & Recreation", 
            "Technology", "Veterans & Military Families" ].map((area) => (
              <div key={area} className="flex items-center">
                <input
                  type="checkbox"
                  id={area}
                  value={area}
                  checked={filters.focusArea.includes(area)}
                  onChange={() => handleCheckboxChange("focusArea", area)}
                  className="checkbox-spacing"
                />
                <label htmlFor={area} className="text-gray-700 ml-2">{area}</label>
              </div>
            ))}
          </div>

          {/* Type Filter */}
          <label className="block text-lg font-bold mb-2 text-gray-700 mt-6">Type</label>
          <div className="space-y-2">
            {["One-time", "Recurring"].map((type) => (
              <div key={type} className="flex items-center">
                <input
                  type="checkbox"
                  id={type}
                  value={type}
                  checked={filters.type.includes(type)}
                  onChange={() => handleCheckboxChange("type", type)}
                  className="checkbox-spacing"
                />
                <label htmlFor={type} className="text-gray-700 ml-2">{type}</label>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <section className="filter-search-container">
            <input
              type="text"
              placeholder="Search volunteer opportunities..."
              className="filter-search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </section>


          <hr className="border-t-20 border-[#f5f5dc] mb-10" />

          <section className="space-y-10">
            {filteredOpportunities.map((opportunity, index) => (
              <div
                key={index}
                className="opportunity-card bg-white rounded-xl shadow-md p-6 transition-transform hover:scale-[1.02] flex items-stretch gap-6 relative"
              >
                {/* Numbered Circle */}
                <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-[#5372f0] text-white flex items-center justify-center font-bold text-sm shadow-md">
                  {index + 1}
                </div>

                {/* Image */}
                <img
                  src={opportunity.image}
                  alt="Opportunity"
                  className="w-40 h-40 object-cover rounded-md"
                />

                {/* Main Content */}
                <div className="flex-1">
                  <h3 className="font-bold text-3xl mb-1">{opportunity.title}</h3>
                  <h3 className="text-gray-600 text-xl mb-1">{opportunity.organization}</h3>
                  <h3 className="text-gray-600 text-lg">{opportunity.location.join(" | ")}</h3>
                </div>

                {/* Divider */}
                <div className="border-l border-gray-300 h-[80%]" />

                {/* Tags */}
                <div className="flex flex-col justify-center gap-3 pr-6 flex-1">
                  <div className="flex flex-wrap gap-2">
                    {opportunity.focusArea.map((tag, i) => (
                      <span key={i} className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full min-w-[110px] text-center flex justify-center items-center">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {opportunity.type.map((tag, i) => (
                      <span key={i} className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full min-w-[110px] text-center flex justify-center items-center">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">

                    {opportunity.major.map((tag, i) => (
                      <span key={i} className="text-sm bg-purple-100 text-purple-800 px-3 py-1 rounded-full min-w-[110px] text-center flex justify-center items-center">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <Link to={`/opportunity/${opportunity.id}`}>
                  <button
                    className="absolute bottom-4 right-4 bg-white group p-2 rounded-full transition-colors duration-300"
                    aria-label="More details"
                  >
                    <CircleArrowRight
                      size={50}
                      className="text-[#5372f0] hover:text-white hover:bg-[#5372f0] rounded-full transition-colors duration-300"
                    />
                    <span className="absolute inset-0 rounded-full group-hover:bg-[#5372f0] transition-colors duration-300 z-[-1]" />
                  </button>
                </Link>

              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
};

export default NewFilter;
