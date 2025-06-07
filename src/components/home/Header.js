import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Header({ openSignIn }) {
  const [hoverSignIn, setHoverSignIn] = useState(false);
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      navigate(`/search?q=${encodeURIComponent(searchText)}`);
    }
  };

  return (
    <header className="top-header">
      <div className="top-bar">
        <img className="logo" src="/images/Volunteer.png" alt="logo" />

        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>

        <div className="header-buttons">
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
            onClick={openSignIn}
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
  );
}

export default Header;
