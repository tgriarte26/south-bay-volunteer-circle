import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import VolunteerPage from './pages/VolunteerPage';
import PartnersPage from './pages/PartnersPage';
import AboutPage from './pages/AboutPage';
import ContactUsPage from './pages/ContactUsPage';
import SearchResultsPage from './pages/SearchResultsPage';
import NewFilter from './components/ui/NewFilter';
import OpportunityDetail from './pages/OpportunityDetail';

import ProtectedVolunteerPage from './components/home/ProtectedVolunteerPage';
import SignInModal from './components/home/SignInModal';
import SignUpModal from './components/home/SignUpModal';
import { AuthProvider, useAuth } from './components/utils/AuthContext'; // ✅

function AppRoutes({ showSignIn, setShowSignIn }) {
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
        <Route path="filter" element={<NewFilter />} />
        <Route path="opportunity/:id" element={<OpportunityDetail />} />
      </Route>
    </Routes>
  );
}

function App() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <AuthProvider>
      <Router>
        {/* Modals rendered globally */}
        <SignInModal
          isOpen={showSignIn}
          onClose={() => setShowSignIn(false)}
          onOpenSignUp={() => {
            setShowSignIn(false);
            setShowSignUp(true);
          }}
        />
        <SignUpModal
          isOpen={showSignUp}
          onClose={() => setShowSignUp(false)}
          onOpenSignIn={() => {
            setShowSignUp(false);
            setShowSignIn(true);
          }}
        />

        {/* Routes */}
        <AppRoutes showSignIn={showSignIn} setShowSignIn={setShowSignIn} />
      </Router>
    </AuthProvider>
  );
}

export default App;
