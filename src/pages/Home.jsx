import { useEffect, useRef } from "react";
import MovieCard from "../components/MovieCard";
import { fadeIn } from "../animation/gsapAnimations";
import "../styles/home.css";

export default function Home() {
  const containerRef = useRef();

  const movies = [
    { id: 385687, title: "Fast X" },
    { id: 299054, title: "Expendables" },
    { id: 634649, title: "Spider-Man" },
    { id: 385681, title: "Honor the mother" },
    { id: 1242898 , title: "predator 2025" },
    { id:83533, title:"avatar fire and ash" },
    {id:1311031, title:"demon slayer : infinite castle"},
    {id:965483, title:"parasakthi"},
    {id:1219158, title:"Lover"},
    {id:927342, title:"Amaran"},
    {id:1112564, title:"vaa vaathiyar"},
    {id:24383, title:"villu"},
    {id:412096, title:"maanagaram"},
    {id:631637, title:"OH MY Kadavule"},
    {id:743563, title:"vikram"},
    {id:1118224, title:"maharaja"},
    {id:66352, title:"sasi leelavathi"},
    {id:29811, title:"thalapathi"},
    {id:432139, title:"vikram vedha"},
    {id:47940, title:"padaiyappa"},
    {id:587030, title:"kaithi"},
    {id:425274, title:"now you see me"},
    {id:1083637, title:"kantara"},
    {id:1539104, title:"jjk"},
    { id: 278, title: "The Shawshank Redemption" },
    { id: 238, title: "The Godfather" },
    { id: 424, title: "Schindler's List" },
    { id: 680, title: "Pulp Fiction" },
    { id: 155, title: "The Dark Knight" },
    { id: 122, title: "The Lord of the Rings: The Return of the King" },
    { id: 240, title: "The Godfather Part II" },
    { id: 598, title: "Life Is Beautiful" },
    { id: 13, title: "Forrest Gump" },
    { id: 769, title: "GoodFellas" },
    { id: 550, title: "fight club" },
    { id: 324857, title: "Spider-Man: Into the Spider-Verse" },
    { id: 378064, title: "Silent voice" },
    { id: 569094, title: "Spider man:across the spider verse" },
    { id: 1184918, title: "The wild robot" },




  ];

  useEffect(() => {
    fadeIn(containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="home">
      <div className="hero-section">
        <h1 className="hero-title">Santa Streaming</h1>
        <p className="hero-subtitle">Watch your favorite movies and shows anytime, anywhere.</p>
      </div>

      <div className="movie-grid">
        {movies.map((m) => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </div>
    </div>
  );
}
