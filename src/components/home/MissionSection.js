import React from 'react';

function MissionSection() {
  return ( 
  <section className="mission-section">
    <img src="/images/redondobeach.jpg" alt="Background" className="mission-background" />
  <div className="mission-container">  
    <div className="mission-text">
      <h2><b>OUR MISSION</b></h2>
      <p>
        To connect high school students in the South Bay
        with meaningful volunteer opportunities to make a
        difference in their communities.
      </p>
      <a href="/about" className="mission-button">Learn More</a>
    </div>
  </div>
</section>
  );
}

export default MissionSection;
