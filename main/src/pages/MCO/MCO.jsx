import { Link } from 'react-router-dom';
import './MCO.css';

const MCO = () => {
  const members = [
    "Jonuel Ortiz",
    "Jane Rose Repaja",
    "Loui Legatuna",
    "Franz Mervin Dela Cruz"
  ];

  const activities = [
    { id: 1, title: "Activity 1", path: "/activity1", description: "GROUP MEMBER" },
    { id: 2, title: "Activity 2", path: "/activity2", description: "REGISTRATION FORM" },
    { id: 3, title: "Activity 3", path: "/activity3", description: "JSON FILE" },
    { id: 4, title: "Activity 4", path: "/activity4", description: "API LINK" }
  ];

  return (
    <div className="tech-container">
      <div className="grid-overlay"></div>
      <div className="scanline"></div>
      
      <main className="tech-main">
        <header className="tech-header">
          <div className="status-bar">
            <span className="blink">●</span> SYSTEM_ONLINE | PORT: 3000
          </div>
          <h1 className="tech-title" data-text="GROUP_07">GROUP 7</h1>
          <div className="tech-divider"></div>
          <p className="tech-subtitle">COMPILATION OF ACTIVITIES</p>
        </header>

        <section className="tech-members">
          <h2 className="tech-label">MEMBERS  </h2>
          <div className="tech-member-list">
            {members.map((member, index) => (
              <div key={index} className="tech-member-item">
                <span className="member-id">ID_0{index + 1}</span>
                <span className="member-name">{member}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="tech-activities">
          <h2 className="tech-label">ACTIVITIES</h2>
          <div className="tech-grid">
            {activities.map((activity) => (
              <Link to={activity.path} key={activity.id} className="tech-card">
                <div className="tech-card-header">
                  <span className="module-tag">MOD_0{activity.id}</span>
                  <div className="corner-decor"></div>
                </div>
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
                <div className="tech-btn">ACCESS_MODULE</div>
              </Link>
            ))}
          </div>
        </section>

        <footer className="tech-footer">
          <div className="footer-line"></div>
          <p>ITE6-REACT BSIT2A</p>
        </footer>
      </main>
    </div>
  );
};

export default MCO;
