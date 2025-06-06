import MissionSection from '../components/home/MissionSection';
import ImpactSection from '../components/home/ImpactSection';
import SloganSection from '../components/home/SloganSection'
import '../styles/styles.css';
import '../styles/styles-cards.css';

function HomePage() {
  return (
    <>
      <MissionSection />
      <ImpactSection />
      <SloganSection />
    </>
  );
}

export default HomePage;
