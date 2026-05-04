import "./AnimeCard.css";

const AnimeCard = ({ anime }) => {
  if (!anime) return null;

  return (
    <div className="anime-card">
      <div className="anime-image">
        <img src={anime.images?.jpg?.large_image_url} alt={anime.title} />
      </div>
      <div className="anime-info">
        <h3>{anime.title}</h3>
        <p className="anime-type"><strong>Type:</strong> {anime.type}</p>
        <p className="anime-episodes"><strong>Episodes:</strong> {anime.episodes}</p>
        <p className="anime-status"><strong>Status:</strong> {anime.status}</p>
        <p className="anime-score"><strong>Score:</strong> ⭐ {anime.score}</p>
        <div className="anime-synopsis">
          <strong>Synopsis:</strong>
          <p>{anime.synopsis?.substring(0, 200)}...</p>
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
