import '../styles/styles.css';
import '../styles/styles-cards.css';
import NewFilter from "../components/ui/NewFilter.js"

function VolunteerPage() {
  return (
    <>
      <section className="slogan-section">
        <div className="slogan-container">
          <div className="slogan-text">
            <h2><b>Make a Difference in the South Bay.</b></h2>
            <p>
            Find meaningful volunteer and internship opportunities that match your interests, skills, and schedule.
            </p>
          </div>
        </div>
      </section>
      <NewFilter />
    </>
  );
}

export default VolunteerPage;
