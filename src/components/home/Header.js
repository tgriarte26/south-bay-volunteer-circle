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
          <a className="sign-in" href="#"><button>Sign In</button></a>
          <a className="donate" href="#"><button>Donate</button></a>
        </div>
      </div>
    </header>
  );
}

export default Header;
