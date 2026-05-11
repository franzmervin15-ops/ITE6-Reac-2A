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
    { id: 1, title: "Activity 1", path: "/activity1", description: "Group Members List" },
    { id: 2, title: "Activity 2", path: "/activity2", description: "Registration Form" },
    { id: 3, title: "Activity 3", path: "/activity3", description: "JSON Data Directory" },
    { id: 4, title: "Activity 4", path: "/activity4", description: "Top Anime Movies API" }
  ];

  return (
    <div className="landing-container">
      <div className="akatsuki-cloud-top"></div>
      
      <header className="landing-header">
        <h1 className="main-title">Compilation of Activities</h1>
        <h2 className="group-name">Group 7</h2>
      </header>

      <section className="members-section">
        <h3>Members</h3>
        <div className="members-list">
          {members.map((member, index) => (
            <span key={index} className="member-tag">{member}</span>
          ))}
        </div>
      </section>

      <nav className="activities-grid">
        {activities.map((activity) => (
          <Link to={activity.path} key={activity.id} className="activity-link-card">
            <div className="card-content">
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
            </div>
            <div className="card-hover-effect"></div>
          </Link>
        ))}
      </nav>

      <div className="akatsuki-cloud-bottom"></div>
    </div>
  );
};

export default MCO;
