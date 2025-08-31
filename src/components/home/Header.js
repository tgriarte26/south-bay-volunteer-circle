import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';

function Header({ openSignIn }) {
  const [hoverSignIn, setHoverSignIn] = useState(false);
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      navigate(`/search?q=${encodeURIComponent(searchText)}`);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  const getInitials = (user) => {
    if (!user) return ''; // no user at all

    if (user.displayName) {
      // get initials from displayName
      return user.displayName
        .split(' ')
        .map(part => part[0])
        .join('')
        .toUpperCase();
    }

    if (user.email) {
      // fallback to first letter of email before '@'
      return user.email[0].toUpperCase();
    }

    return ''; // nothing else to show
  };

  return (
    <header className="top-header">
      <div className="top-bar">
        <img
          className="logo"
          src="/images/Volunteer.png"
          alt="logo"
          style={{ cursor: 'pointer' }}
          onClick={() => navigate('/')}
        />
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
          {user ? (
            <Menu
              as="div"
              className="relative inline-block text-left"
              style={{
                padding: '9px 25px',
              }}
            >
              <MenuButton
                className="flex items-center gap-2 px-3 py-2 rounded-lg transition font-semibold"
                style={{ paddingTop: '0.2rem', backgroundColor: 'transparent' }}
                // Removed any hover styles so background won't change on hover
              >
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="profile"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 flex items-center justify-center bg-gray-400 text-white rounded-full text-sm font-bold">
                    {getInitials(user)}
                  </div>
                )}
                <ChevronDown className="w-4 h-4" />
              </MenuButton>
             <MenuItems className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-md shadow-lg z-50 translate-x-3">
              <div className="py-1">
                <MenuItem>
                  {({ active }) => (
                    <button
                      onClick={() => navigate('/account')}
                      className="w-full text-center px-4 py-2 text-sm"
                      style={{
                        backgroundColor: active ? 'black' : 'transparent',
                        color: active ? 'white' : 'black',
                        border: 'none',
                        outline: 'none',
                        cursor: 'pointer',
                      }}
                    >
                      My Account
                    </button>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <button
                      onClick={handleLogout}
                      className="w-full text-center px-4 py-2 text-sm"
                      style={{
                        backgroundColor: active ? 'black' : 'transparent',
                        color: active ? 'white' : '#dc2626',
                        border: 'none',
                        outline: 'none',
                        cursor: 'pointer',
                      }}
                    >
                      Log Out
                    </button>
                  )}
                </MenuItem>
              </div>
            </MenuItems>

            </Menu>
          ) : (
            <button
              style={{
                padding: '9px 25px',
                fontWeight: 800,
                backgroundColor: '#f5f5dc',
                color: hoverSignIn ? '#ff3131' : 'black',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                transition: 'color 0.3s ease',
              }}
              onClick={openSignIn}
              onMouseEnter={() => setHoverSignIn(true)}
              onMouseLeave={() => setHoverSignIn(false)}
            >
              Sign In
            </button>
          )}

          <a className="donate" target="_blank" rel="noreferrer" href="https://youtu.be/dQw4w9WgXcQ?si=DoXUAEgobJBZBAiC">
            <button>Donate</button>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
