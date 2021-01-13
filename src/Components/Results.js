import React, { useState, useEffect } from "react";
import "../CSS/Results.css";
import requests from "./requests";
import { VideoCard } from "./VideoCard";
import axios from "../axios";
import FlipMove from "react-flip-move";

export const Results = ({ selectedOption }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(selectedOption);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [selectedOption]);

  return (
    <div className="results">
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
};
