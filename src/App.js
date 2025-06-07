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

import SignInModal from './components/home/SignInModal'; // ✅ Adjust path if needed
import SignUpModal from './components/home/SignUpModal'; // ✅ Adjust path if needed

function App() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <Router>
      {/* 👇 Modals rendered globally so they're always accessible */}
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

      {/* All app routes */}
      <Routes>
        <Route path="/" element={<Layout openSignIn={() => setShowSignIn(true)} />}>
          <Route index element={<HomePage />} />
          <Route path="volunteer" element={<VolunteerPage />} />
          <Route path="partners" element={<PartnersPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactUsPage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="filter" element={<NewFilter />} />
          <Route path="opportunity/:id" element={<OpportunityDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
