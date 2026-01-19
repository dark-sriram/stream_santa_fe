import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";

export default function Watch() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get(`/api/movies/${id}`)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load movie");
      });
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!movie) return <p>Loading...</p>;

  return (
    <div style={{ background: "black", minHeight: "100vh", padding: "20px" }}>
      <h2 style={{ color: "white" }}>{movie.title}</h2>

      <iframe
        src={movie.embedUrl}
        title="movie-player"
        allow="autoplay; fullscreen"
        allowFullScreen
        frameBorder="0"
        style={{
          width: "100%",
          height: "80vh",
          borderRadius: "12px",
        }}
      />
    </div>
  );
}
