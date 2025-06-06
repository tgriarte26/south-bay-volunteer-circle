import { Link } from 'react-router-dom';

function SloganSection() {
  return (
    <section className="slogan-section">
      <div className="slogan-container">
        <div className="slogan-text">
          <h2><b>Connecting South Bay Hearts Through Service.</b></h2>
          <p>
            Join a growing movement of service-minded individuals and organizations
            making a difference in the South Bay. Whether you're looking to give your
            time or collaborate as a partner, your impact starts here.
          </p>
        </div>
        <div className="center-buttons">
          <Link className="for-volunteers" to="/volunteer">
            <button>Become a Volunteer</button>
          </Link>
          <Link className="for-organizations" to="/partners">
            <button>Become a Partner</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SloganSection;
