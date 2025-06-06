import { useState } from 'react';
import SignInModal from './SignInModal'; // Adjust path if needed

function Header() {
  const [showModal, setShowModal] = useState(false);
  const [hoverSignIn, setHoverSignIn] = useState(false);

  return (
    <>
      <header className="top-header">
        <div className="top-bar">
          <img className="logo" src="/images/Volunteer.png" alt="logo" />

          <div className="search-container">
            <input type="text" placeholder="Search..." className="search-input" />
          </div>

          <div className="header-buttons">
            {/* Sign In button with inline hover effect */}
            <button
              style={{
                padding: '9px 25px',
                fontWeight: 800,
                backgroundColor: hoverSignIn ? '#f5f5dc' : '#f5f5dc',
                color: hoverSignIn ? '#ff3131' : 'black',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease, color 0.3s ease',
              }}
              onClick={() => setShowModal(true)}
              onMouseEnter={() => setHoverSignIn(true)}
              onMouseLeave={() => setHoverSignIn(false)}
            >
              Sign In
            </button>

            <a className="donate" target="_blank" rel="noreferrer" href="https://www.youtube.com/">
              <button>Donate</button>
            </a>
          </div>
        </div>
      </header>

      {/* Modal Component */}
      <SignInModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}

export default Header;
