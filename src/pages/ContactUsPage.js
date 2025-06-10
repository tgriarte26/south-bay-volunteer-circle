import { useState } from 'react';

function ContactUsPage() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="text-center p-10 max-w-2xl w-full mb-12">
        <h1 className="text-4xl font-bold text-[#5372f0] mb-4">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-6" style={{ marginBottom: '2rem' }}>
          Have questions, ideas, or opportunities to share? We're excited to hear from you! Whether you're a student, organization, or community member, feel free to reach out to learn more about how you can get involved with the <span className="text-[#5372f0] font-bold">South Bay Volunteer Circle</span>.
        </p>
      </div>

      {/* Form section */}
      <form
        action="https://formspree.io/f/xjkryjrb" // Replace with your own Formspree form ID
        method="POST"
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-3xl border-5 border-[#5372f0]"
      >
        <div className="mb-6" style={{ padding: '1rem' }}>
          <label className="block text-xl font-semibold text-gray-800 mb-2" htmlFor="email">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="you@example.com"
            className="w-full px-4 py-3 border-3 border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-300"
            style={{ paddingLeft: '0.5rem' }}
          />
        </div>

        <div className="mb-6" style={{ padding: '0 1rem 1.5rem' }}>
          <label className="block text-xl font-semibold text-gray-800 mb-2" htmlFor="message">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Type your message here..."
            rows="6"
            className="w-full px-4 py-3 border-3 border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-1 focus:ring-gray-300"
            style={{ padding: '0.5rem' }}
          ></textarea>
        </div>

        <div style={{ padding: '0 1rem 1.5rem' }}>
          <button
            type="submit"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              width: '100%',
              backgroundColor: isHovered ? '#3e5dcc' : '#5372f0',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              transition: 'background-color 0.2s ease-in-out',
              fontWeight: '600',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactUsPage;
