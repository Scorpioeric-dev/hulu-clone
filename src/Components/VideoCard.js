import React from "react";
import "../CSS/VideoCard.css";
import StarRate from "@material-ui/icons/StarRate";
// import TextTruncate from 'react-text-truncate'

const base_url = "https://image.tmdb.org/t/p/original/";

export const VideoCard = ({ movie }) => {
  return (
    <div className="videoCard">
      <img
        src={`${base_url}${movie.backdrop_path || movie.poster_path} `}
        alt=" movie poster"
      />
      <p>{movie.overview}</p>
      <h2>{movie.title || movie.original_name}</h2>
      <p className="videoCard_stats">
      {movie.media_type && ` ${movie.media_type} . `}
      {movie.release_date || movie.first_air_date} .
         <StarRate/>{" "}
        {movie.vote_count}
      </p>
    </div>
  );
};
