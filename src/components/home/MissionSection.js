import { Link } from 'react-router-dom';

function MissionSection() {
  return ( 
  <section className="mission-section">
    <img src="/images/redondobeach.jpg" alt="Background" className="mission-background" />
  <div className="mission-container">  
    <div className="mission-text">
      <h2><b>OUR MISSION</b></h2>
      <p>
        Connecting high school students across the South Bay with meaningful volunteer 
        and internship opportunities to drive positive change in their communities.
      </p>
      <Link className="for-about" to="/about">
            <button>Learn More</button>
      </Link>
    </div>
  </div>
</section>
  );
}

export default MissionSection;
