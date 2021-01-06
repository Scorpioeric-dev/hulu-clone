import React, { useState,useEffect } from "react";
import "../CSS/Results.css";
import { VideoCard } from "./VideoCard";

export const Results = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
      
  }, [])

  return (
    <div className="results">
      {movies.map((movie) => (
        <VideoCard />
      ))}
    </div>
  );
};
