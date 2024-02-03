"use client";

import React, { useEffect, useState } from "react";
import MovieCard from "../../../components/MovieCard";

interface MovieProps {
  imdbID: string;
  Year: string;
  Poster: string;
  Title: string;
  Type: string;
}

const Bookmarks = () => {
  const [bookmarkedMovies, setBookmarkedMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    // Check if localStorage is available (client-side)
    if (typeof window !== "undefined") {
      const storedMovies = Object.values(localStorage)
        .map((movie) => {
          try {
            return JSON.parse(movie.trim());
          } catch (error) {
            console.error("Error parsing movie data:");
            return null; // Handle invalid JSON gracefully
          }
        })
        .filter((movie) => movie !== null); // Filter out null values
      setBookmarkedMovies(storedMovies);
    }
  }, []);

  return (
    <>
      {bookmarkedMovies?.length > 1 ? (
        <div className="container">
          {bookmarkedMovies.map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))}
        </div>
      ) : (
        <div>
          <h2>No movies found</h2>
        </div>
      )}
    </>
  );
};

export default Bookmarks;
