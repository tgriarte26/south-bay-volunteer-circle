import { useState } from 'react';

function AboutPage() {
  const [openIndex, setOpenIndex] = useState(null);

const faqs = [
  {
    question: "Who can join South Bay Volunteer Circle?",
    answer: (
      <>
        Any <strong>high school student</strong> in the South Bay area who is looking to make a positive impact in their community through volunteering or internships.
      </>
    ),
  },
  {
    question: "How do I find opportunities?",
    answer: (
      <>
        You can browse the <strong>'Volunteer' tab</strong> for categorized volunteer and internship opportunities based on location, focus area, and major. Sign in for free to access it.
      </>
    ),
  },
  {
    question: "Is there a cost to join?",
    answer: (
      <>
        No, <strong>South Bay Volunteer Circle</strong> is completely free for all students.
      </>
    ),
  },
  {
    question: "How do I know if an opportunity is safe or legitimate?",
    answer: (
      <>
        We review each opportunity before posting. Still, we encourage students and parents to <strong>research organizations and reach out with questions</strong> before committing.
      </>
    ),
  },
  {
    question: "How often is the site updated with new opportunities?",
    answer: (
      <>
        We update the site weekly to include the latest opportunities available to students. <strong>Last updated: June 9, 2025</strong>
      </>
    ),
  },
];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Top section */}
      <div className="text-center p-10 max-w-4xl w-full mb-16">
        <h1 className="text-4xl font-bold text-[#5372f0] mb-4">About Us</h1>
        <p className="text-lg text-gray-700 mb-6">
          <span className="text-[#5372f0] font-bold">South Bay Volunteer Circle</span> is a student-led organization 
          committed to empowering high school students across the South Bay by connecting them with meaningful 
          volunteer and internship opportunities. Founded in April 2025 by Trevor Griarte and Arvin Costes, students
          at Bishop Montgomery High School, our mission is to inspire youth to create positive change in their 
          communities through accessible and impactful experiences.
        </p>

      </div>

      {/* Divider */}
      <hr className="w-full border-t-20 border-[#f5f5dc] mb-12" />
      <hr className="w-full border-t-1 border-[#ccc] mb-12" />

      {/* FAQ Section */}
      <div className="max-w-6xl w-full px-6 sm:px-10 pb-24">
  <h2 className="text-5xl font-extrabold text-[#5372f0] mb-14 text-center pb-6" style={{margin: '1rem'}}>
    Frequently Asked Questions
  </h2>

  <div className="space-y-10">
    {faqs.map((faq, index) => (
      <div
        key={index}
        className="border-4 border-[#5372f0] rounded-lg bg-white overflow-hidden" style={{padding: '0.5rem', margin: '1rem'}}
      >
        <button
          className="w-full flex justify-between items-center text-left text-gray-900 hover:bg-[#f0f6ff] transition-colors duration-200 px-10 py-8"
          onClick={() => toggleFAQ(index)}
        >
          <span className="text-2xl sm:text-3xl font-semibold pr-4 " style={{margin: '1rem'}}>
            {faq.question}
          </span>
          <span className="text-4xl font-bold text-[#5372f0]">
            {openIndex === index ? '−' : '+'}
          </span>
        </button>
        <div
            className={`transition-all duration-300 ease-in-out border-t border-gray-200 ${
                openIndex === index
                ? 'max-h-[500px] py-6 opacity-100'
                : 'max-h-0 py-0 opacity-0 overflow-hidden'
            }`}
            >
            <div className="pl-10 pr-10 text-gray-700 text-lg sm:text-xl" style={{margin: '1rem'}}>
                {faq.answer}
            </div>
            </div>
      </div>
    ))}
  </div>
</div>

    </div>
  );
}

export default AboutPage;
