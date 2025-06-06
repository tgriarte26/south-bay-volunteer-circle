import React from 'react';

function Header() {
  return (
    <header className="top-header">
      <div className="top-bar">
        <img className="logo" src="/images/Volunteer.png" alt="logo" />
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
        </div>
        <div className="header-buttons">
          <a className="sign-in" target="_blank" rel="noreferrer" href="https://www.youtube.com/"><button>Sign In</button></a>
          <a className="donate" target="_blank" rel="noreferrer" href="https://www.youtube.com/"><button>Donate</button></a>
        </div>
      </div>
    </header>
  );
}

export default Header;
