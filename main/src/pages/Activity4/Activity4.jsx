import { useState, useEffect } from "react";
import AnimeCard from "../../components/AnimeCard/AnimeCard";
import "./Activity4.css";

const Activity4 = () => {
  const [animeData, setAnimeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const response = await fetch("https://api.jikan.moe/v4/anime/1");
        const jsonResponse = await response.json();
        setAnimeData(jsonResponse.data);
      } catch (error) {
        console.error("Error fetching anime data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnime();
  }, []);

  return (
    <main className="container4">
      <header className="activity-header">
        <h1>Anime Spotlight</h1>
      </header>

      {loading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading Anime Data...</p>
        </div>
      ) : (
        <div className="anime-display">
          <AnimeCard anime={animeData} />
        </div>
      )}
    </main>
  );
};

export default Activity4;
