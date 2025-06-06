import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout'; // ✅ Your wrapper
import HomePage from './pages/HomePage';
import VolunteerPage from './pages/VolunteerPage';
import PartnersPage from './pages/PartnersPage';
import AboutPage from './pages/AboutPage';
import ContactUsPage from './pages/ContactUsPage';
import NewFilter from './components/ui/NewFilter';
import OpportunityDetail from './pages/OpportunityDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* All pages below will include Header & Navbar */}
          <Route index element={<HomePage />} />
          <Route path="volunteer" element={<VolunteerPage />} />
          <Route path="partners" element={<PartnersPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactUsPage />} />
          <Route path="filter" element={<NewFilter />} />
          <Route path="opportunity/:id" element={<OpportunityDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
