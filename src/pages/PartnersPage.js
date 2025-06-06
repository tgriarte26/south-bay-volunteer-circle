const partners = [
  {
    name: 'United States Youth Volleyball League',
    logo: "../images/usyvl.png",
    link: "https://www.usyvl.org/",
  },
  {
    name: 'STEMForOthers',
    logo: "../images/stemforothers.png",
    link: "https://www.stemforothers.org/",
  },
];


function PartnersPage() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Top section */}
      <div className="text-center p-10 max-w-2xl w-full mb-16">
        <h1 className="text-4xl font-bold text-[#5372f0] mb-4">For Partners</h1>
        <p className="text-lg text-gray-700 mb-6">
          We’re always looking to collaborate with organizations that believe in empowering students and creating positive change in our communities.
          If you’re interested in partnering with us, we’d love to hear from you.
        </p>

        <a
          href="https://forms.gle/gnapX6AhZWqkkKWo8"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#5372f0] text-white font-semibold py-4 px-8 rounded-lg hover:bg-[#3e5dcc] transition-colors duration-200 inline-block text-center"
          style={{ padding: '0.5rem 2rem', color: 'white' }}
        >
          Fill Out Partner Interest Form
        </a>

      </div>

      {/* Divider */}
      <hr className="w-full border-t-30 border-[#f5f5dc] mb-12" />
      <hr className="w-full border-t-1 border-[#ccc] mb-12" />

      {/* Logos section */}
      <div className="text-center p-6 max-w-5xl w-full">
        <h2 className="text-xl font-bold text-[#5372f0] mb-4">Our Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:opacity-80 transition-opacity"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-24 object-contain mb-2"
              />
              <p className="text-sm font-medium text-gray-700 text-center">{partner.name}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PartnersPage;
