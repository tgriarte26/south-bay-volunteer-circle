import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

function ImpactStats() {
    const { ref, inView } = useInView({
      triggerOnce: true, // only trigger once
      threshold: 0.3     // percent of component visible to trigger
    });
  
    return (  
      <div className="impact-stats" ref={ref}>
        <div className="stat">
          <h3>{inView && <CountUp end={5} duration={2.5} />}
          <span className="plus-black">+</span>
          </h3>
          <p>Volunteer Opportunities</p>
        </div>
        <div className="stat">
          <h3>{inView && <CountUp end={10} duration={2.5} />}
          <span className="plus-black">+</span>
          </h3>
          <p>Volunteer Hours</p>
        </div>
        <div className="stat">
          <h3>{inView && <CountUp end={5} duration={2.5} />}
          <span className="plus-black">+</span>
          </h3>
          <p>Student Volunteers</p>
        </div>
        <div className="stat">
          <h3>{inView && <CountUp end={1} duration={2.5} />}
          <span className="plus-black">+</span>
          </h3>
          <p>Partner Organizations</p>
        </div>
      </div>
    );
  }
  
  export default ImpactStats;
  