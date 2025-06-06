import React from 'react';
import ImpactStats from './ImpactStats'; // adjust path if needed

function ImpactSection() {
  return (
    <section className="impact-section">
      <div className="impact-container">
        <div className="impact-text">
          <h2><b>Our Community Impact</b></h2>
        </div>
        <ImpactStats />
      </div>
    </section>
  );
}

export default ImpactSection;
