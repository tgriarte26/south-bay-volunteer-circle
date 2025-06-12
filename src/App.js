import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import VolunteerPage from './pages/VolunteerPage';
import PartnersPage from './pages/PartnersPage';
import AboutPage from './pages/AboutPage';
import ContactUsPage from './pages/ContactUsPage';
import SearchResultsPage from './pages/SearchResultsPage';
import AccountPage from './pages/AccountPage';
import NewFilter from './components/ui/NewFilter';
import OpportunityDetail from './pages/OpportunityDetail';

import ProtectedVolunteerPage from './components/home/ProtectedVolunteerPage';
import SignInModal from './components/home/SignInModal';
import SignUpModal from './components/home/SignUpModal';
import { AuthProvider, useAuth } from './components/utils/AuthContext';

function AppRoutes({ setShowSignIn }) {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Layout openSignIn={() => setShowSignIn(true)} />}>
        <Route index element={<HomePage />} />
        <Route
          path="volunteer"
          element={
            user ? (
              <VolunteerPage />
            ) : (
              <ProtectedVolunteerPage openSignIn={setShowSignIn} />
            )
          }
        />
        <Route path="partners" element={<PartnersPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactUsPage />} />
        <Route path="/search" element={<SearchResultsPage />} />
        <Route path="account" element={<AccountPage />} />
        <Route path="filter" element={<NewFilter />} />
        <Route path="opportunity/:id" element={<OpportunityDetail />} />
        
      </Route>
    </Routes>
  );
}

function App() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile(); // Check on mount
    window.addEventListener('resize', checkMobile); // Update on resize
    return () => window.removeEventListener('resize', checkMobile); // Cleanup
  }, []);

  if (isMobile) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Sorry, this website is not accessible on mobile devices yet.</h1>
        <p>Please use a desktop or tablet for the best experience. Thank you.</p>
      </div>
    );
  }

  return (
    <AuthProvider>
      <Router>
        {/* Sign-In Modal */}
        <SignInModal
          isOpen={showSignIn}
          onClose={() => setShowSignIn(false)}
          onOpenSignUp={() => {
            setShowSignIn(false);
            setShowSignUp(true);
          }}
        />

        {/* Sign-Up Modal */}
        <SignUpModal
          isOpen={showSignUp}
          onClose={() => setShowSignUp(false)}
          onOpenSignIn={() => {
            setShowSignUp(false);
            setShowSignIn(true);
          }}
        />

        {/* App Routes */}
        <AppRoutes setShowSignIn={setShowSignIn} />
      </Router>
    </AuthProvider>
  );
}

export default App;
