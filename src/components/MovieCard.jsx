import { useNavigate } from "react-router-dom";

export default function MovieCard({ movie }) {
  const navigate = useNavigate();

  return (
    <div
      className="movie-card"
      onClick={() => navigate(`/watch/${movie.id}`)}
    >
      <h3>{movie.title}</h3>
    </div>
  );
}
