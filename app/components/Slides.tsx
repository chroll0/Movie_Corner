"use client";

import { useEffect, useState } from "react";
import { API_URL, SlideMovies } from "../constants/Database";

interface MovieProps {
  imdbID: string;
  Year: string;
  Poster: string;
  Title: string;
  Type: string;
}

const Slides = ({ currentTheme }: { currentTheme: string }) => {
  const [firstMovies, setFirstMovies] = useState<MovieProps[]>([]);

  const searchMoviesForSlideMovies = async () => {
    const moviesPromises = SlideMovies.map(async (slide) => {
      const url = `${API_URL}&s=${slide.title}`;
      const response = await fetch(url);
      const data = await response.json();
      return data.Search ? data.Search[0] : null;
    });

    const fetchedMovies = await Promise.all(moviesPromises);
    setFirstMovies(fetchedMovies.filter((movie) => movie !== null));
  };

  useEffect(() => {
    searchMoviesForSlideMovies();
  }, []);

  return (
    <div className="py-16 px-1 hide-scrollbar overflow-x-auto w-full flex gap-16">
      {firstMovies.map((movie, index) => (
        <div
          key={index}
          className="min-w-[230px] max-w-[260px] hide-scrollbar flex flex-col"
        >
          <div
            className={`h-[310px] bg-gray-300 overflow-y-hidden rounded-lg shadow-slide  ${
              currentTheme === "dark" ? "dark_elements" : "light_elements"
            }`}
          >
            <img src={movie.Poster} alt={movie.Title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slides;
