import { useParams } from "react-router-dom";
import { useState } from "react";
import { allOpportunities } from './AllOpportunities';

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
        </div>

          <div className="border-t-15 border-white w-full"></div>
          <div className="border-t-1 border-[#ccc] w-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-6">
            {/* Left Column: Description */}
            <div className="text-center">
              <h3 className="font-bold text-3xl mb-5 text-[#5372f0] underline decoration-[#5372f0] decoration-2 underline-offset-4" style={{marginTop: '1rem'}}>Description</h3>
              <p
                className="text-base font-bold text-gray-700 leading-relaxed"
                style={{ padding: '0 1rem', whiteSpace: 'pre-line' }}
              >
                {opportunity.description}
              </p>

              <h3 className="font-bold text-3xl mb-5 text-[#5372f0] underline decoration-[#5372f0] decoration-2 underline-offset-4" style={{marginTop: '1rem'}}>Requirements</h3>
              <p
                className="text-base font-bold text-gray-700 leading-relaxed"
                style={{ padding: '0 1rem', whiteSpace: 'pre-line' }}
              >
                {opportunity.requirements}
              </p>
            </div>

            {/* Right Column: Info with dividing line */}
            <div className="border-l border-[#ccc] text-center items-center">
              <div>
                <h3 className="font-bold text-3xl mb-1 text-[#5372f0] underline decoration-[#5372f0] decoration-2 underline-offset-4" style={{marginTop: '1rem'}}> City </h3>
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
                <h3 className="font-bold text-3xl mb-1 text-[#5372f0] underline decoration-[#5372f0] decoration-2 underline-offset-4"> Website </h3>
                <p
                  href={opportunity.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-bold text-gray-700"
                  style={{ fontSize: '25px', fontWeight: 'bold'}}
                >
                  {opportunity.website.replace(/^https?:\/\//, "")}
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
        <div className="border-t-1 border-[#ccc] w-full"></div>
        <div className="border-t-15 border-white w-full"></div>
        <form
          action="https://formspree.io/f/xdkzeyao"
          method="POST"
          className="flex flex-col items-center space-y-4 my-6"
          >
          {/* Hidden Opportunity Field */}
          <input type="hidden" name="opportunity" value={opportunity.title} />
          <input type="hidden" name="organization" value={opportunity.organization} />

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            className="border-3 border-[#5372f0] rounded px-4 py-2 w-full max-w-md"
            style={{padding:'0.3rem', marginBottom: '0.5rem'}}
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="border-3 border-[#5372f0] rounded px-4 py-2 w-full max-w-md"
            style={{padding:'0.3rem', marginBottom: '0.5rem'}}
          />

          {/* City */}
          <input
            type="text"
            name="city"
            placeholder="Your City"
            className="border-3 border-[#5372f0] rounded px-4 py-2 w-full max-w-md"
            style={{padding:'0.3rem', marginBottom: '0.5rem'}}
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Tell us why you're interested in this opportunity..."
            required
            className="border-3 border-[#5372f0] rounded px-4 py-2 w-full max-w-md"
            style={{padding:'0.5rem', marginBottom: '0.5rem'}}
          />

          {/* Submit */}
          <button
            type="submit"
            style={{
              backgroundColor: isHovered ? '#3e5dcc' : '#5372f0',
              color: 'white',
              fontWeight: '600',
              padding: '0.5rem 1rem',
              marginBottom: '0.5rem',
              borderRadius: '0.5rem',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease-in-out',
              
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            I Want To Help
          </button>
        </form>
      </div>
    </div>
  );
};

export default OpportunityDetail;
