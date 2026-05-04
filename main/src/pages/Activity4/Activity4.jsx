import { useState, useEffect } from "react";
import AnimeCard from "../../components/AnimeCard/AnimeCard";
import "./Activity4.css";

const Activity4 = () => {
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTopMovies = async () => {
      try {
        const response = await fetch("https://api.jikan.moe/v4/top/anime?type=movie");
        const jsonResponse = await response.json();
        setAnimeList(jsonResponse.data);
      } catch (error) {
        console.error("Error fetching top anime movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopMovies();
  }, []);

  return (
    <main className="container4">
      <header className="activity-header">
        <h1>Top Anime Movies (Activity 4)</h1>
        <p>Displaying top-rated anime movies using <code>async/await</code> and <code>useEffect</code>.</p>
      </header>

      {loading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading Movies...</p>
        </div>
      ) : (
        <div className="anime-grid">
          {animeList.map((anime) => (
            <AnimeCard key={anime.mal_id} anime={anime} />
          ))}
        </div>
      )}
    </main>
  );
};

export default Activity4;
