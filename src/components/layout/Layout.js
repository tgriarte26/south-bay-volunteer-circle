import { useState } from 'react';
import Header from '../home/Header';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import SignInModal from '../home/SignInModal';
import SignUpModal from '../home/SignUpModal';

const Layout = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const openSignIn = () => {
    setShowSignIn(true);
    setShowSignUp(false);
  };

  const openSignUp = () => {
    setShowSignUp(true);
    setShowSignIn(false);
  };

  return (
    <div>
      <Header openSignIn={openSignIn} />
      <Navbar />
      <main>
        <Outlet />
      </main>

      <SignInModal
        isOpen={showSignIn}
        onClose={() => setShowSignIn(false)}
        onOpenSignUp={openSignUp}
      />

      <SignUpModal
        isOpen={showSignUp}
        onClose={() => setShowSignUp(false)}
        onOpenSignIn={openSignIn}
      />
    </div>
  );
};

export default Layout;
