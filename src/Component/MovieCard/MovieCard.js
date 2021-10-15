import React from "react";

import "./MovieCard.css";

import Rating from "@material-ui/lab/Rating";
import { Box } from "@material-ui/core";

import Button from "@restart/ui/esm/Button";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="card">
      <div className="card_left">
        <img src={movie.image} alt="poster" />
      </div>
      <div className="card_right">
        <h1>{movie.name}</h1>
        <div className="card_right__details">
          <ul>
            <li>{movie.date}</li>
            <li>||</li>
            <li>{movie.type}</li>
          </ul>
        </div>
        <div className="card_right__rating">
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Rating name="read-only" value={movie.rating} readOnly />
          </Box>
        </div>
        <div className="card_right__review">
          <p>{movie.description}</p>
          <a href="https://www.imdb.com/?ref_=nv_home">Read More</a>
        </div>
        <div className="card_right__button">
          <Link to={`/movie/${movie.id}`}>
            <Button>WATCH</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
