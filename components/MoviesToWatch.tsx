"use client";

import MovieCard from "./MovieCard";
import React, { useEffect, useState } from "react";
import { API_URL } from "../constants/Database";
import { MovieProps, MovieSearchResponse, Props } from "../types";

const MoviesToWatch = ({ MovieData }: Props) => {
  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const fetchedMovies: MovieProps[] = [];
      for (const movie of MovieData) {
        const title = movie.title;
        const url = `${API_URL}&s=${title}`;

        try {
          const response = await fetch(url);
          const data: MovieSearchResponse = await response.json();
          if (data.Search && data.Search.length > 0) {
            const firstMovie = data.Search[0];
            fetchedMovies.push(firstMovie);
          }
        } catch (error) {
          console.error("Error fetching movies:", error);
        }
      }
      setMovies(fetchedMovies);
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <div className="container">
        {movies.map((movie: MovieProps) => (
          <MovieCard movie={movie} key={movie.imdbID} />
        ))}
      </div>
    </div>
  );
};

export default MoviesToWatch;
