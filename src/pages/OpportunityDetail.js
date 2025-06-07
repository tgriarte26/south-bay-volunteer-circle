import { useParams } from "react-router-dom";
import { useState } from "react";

const allOpportunities = [
  {
    id: "volunteer-coach",
    title: "High School Volunteer Coach",
    organization: "United States Youth Volleyball League",
    location: ["Torrance", "Manhattan Beach"],
    address: "1601 Manhattan Beach Blvd, Manhattan Beach, CA 90266",
    major: ["Sports Medicine"],
    focusArea: ["Education", "Youth"],
    type: ["One-time"],
    image: "/images/usyvl.png",
    description: "Help coach youth volleyball and inspire the next generation of athletes!",
    datePosted: "June 3, 2025"
  },
  {
    /*
    id: "stem-president",
    title: "Chapter President",
    organization: "STEMforOthers",
    location: ["San Jose"],
    address: "1234 STEM Street, San Jose, CA 95112",
    major: ["Sports Medicine"],
    focusArea: ["Education", "Youth"],
    type: ["One-time"],
    image: "/images/stemforothers.png",
    description: "Lead and manage a STEMforOthers chapter to encourage youth in STEM careers.",
    datePosted: "June 3, 2025"
    */
  },
];

const OpportunityDetail = () => {
  const { id } = useParams();
  const opportunity = allOpportunities.find((item) => item.id === id);
  const [isHovered, setIsHovered] = useState(false);

  if (!opportunity)
    return (
      <div className="flex justify-center items-center h-screen text-gray-500">
        Opportunity not found.
      </div>
    );

  return (
    <div className="flex justify-center items-center min-h-screen px-4 py-8">
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden border-7 border-[#5372f0]">
        {/* Banner Image */}
        <div className="w-full h-64 bg-gray-200 overflow-hidden">
          <img
            src={opportunity.image}
            alt={opportunity.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text content */}
        <div className="p-8 sm:p-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">{opportunity.title}</h1>
          <h2 className="text-2xl text-gray-600 mt-1 mb-4">{opportunity.organization}</h2>
          <div className="flex justify-center items-center my-6">
          <a
              className="want-to-help"
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/"
            >
              <button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                  backgroundColor: isHovered ? '#3e5dcc' : '#5372f0',
                  color: 'white',
                  fontWeight: '600',
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease-in-out',
                  display: 'inline-block',
                  textAlign: 'center',
                }}
              >
                I Want To Help
              </button>
            </a>
        </div>

          
          <div className="border-t-15 border-white w-full"></div>
          <div className="border-t-1 border-[#ccc] w-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-6">
            {/* Left Column: Description */}
            <div className="text-center">
              <h3 className="font-bold text-3xl mb-5 text-[#5372f0] underline decoration-[#5372f0] decoration-2 underline-offset-4">Description</h3>
              <p className="text-base font-bold text-gray-700 leading-relaxed" style={{padding: '0 1rem'}}>
                {opportunity.description}
              </p>
            </div>

            {/* Right Column: Info with dividing line */}
            <div className="border-l border-[#ccc] text-center items-center">
              <div>
                <h3 className="font-bold text-3xl mb-1 text-[#5372f0] underline decoration-[#5372f0] decoration-2 underline-offset-4"> City </h3>
                <p className="text-xl font-bold text-gray-700" style={{padding: '0 1rem'}}>
                  {opportunity.location.join(", ")}
                </p>
              </div>
              <div>
                <h3 className="font-bold text-3xl mb-1 text-[#5372f0] underline decoration-[#5372f0] decoration-2 underline-offset-4"> Address </h3>
                <p className="text-xl font-bold text-gray-700" style={{padding: '0 1rem'}}>
                  {opportunity.address}
                </p>
              </div>
              <div>
                <h3 className="font-bold text-3xl mb-1 text-[#5372f0] underline decoration-[#5372f0] decoration-2 underline-offset-4"> Focus Areas </h3>
                <p className="text-xl font-bold text-gray-700" style={{padding: '0 1rem'}}>
                  {opportunity.focusArea.join(", ")}
                </p>
              </div>
              <div>
                <h3 className="font-bold text-3xl mb-1 text-[#5372f0] underline decoration-[#5372f0] decoration-2 underline-offset-4"> Preferred Majors </h3>
                <p className="text-xl font-bold text-gray-700" style={{padding: '0 1rem'}}>
                  {opportunity.major.join(", ")}
                </p>
              </div>
              <div>
                <h3 className="font-bold text-3xl mb-1 text-[#5372f0] underline decoration-[#5372f0] decoration-2 underline-offset-4"> Opportunity Type </h3>
                <p className="text-xl font-bold text-gray-700" style={{padding: '0 1rem'}}>
                  {opportunity.type.join(", ")}
                </p>
              </div>
              <div>
                <h3 className="font-bold text-3xl mb-1 text-[#5372f0] underline decoration-[#5372f0] decoration-2 underline-offset-4"> Date Posted </h3>
                <p className="text-xl font-bold text-gray-700" style={{padding: '0 1rem'}}>
                  {opportunity.datePosted}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunityDetail;
