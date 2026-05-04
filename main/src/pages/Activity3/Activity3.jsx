import { useState, useEffect } from 'react';
import UserCard from '../../components/UserCard/UserCard';
import './Activity3.css';

const Activity3 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data.json');
      const jsonData = await response.json();
      setData(jsonData);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <main className="container3">
      <h1>Members</h1>
      <div className="card-grid">
        {data.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </main>
  );
};

export default Activity3;
