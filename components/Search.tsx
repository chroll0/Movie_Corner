"use client";

import { BiSearchAlt } from "react-icons/bi";
import MovieCard from "./MovieCard";
import { API_URL } from "../constants/Database";
import { useState } from "react";
import { MovieProps } from "../types";

const Search = () => {
  const [type, setType] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [year, setYear] = useState("");

  const firstFilmYear = 1895;
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = currentYear; i >= firstFilmYear; i--) {
    years.push(i);
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      searchMovies(searchTerm);
    }
  };
  const searchMovies = async (title: string) => {
    let url = `${API_URL}&s=${title}`;

    if (year) {
      url += `&y=${year}`;
    }
    if (type) {
      url += `&type=${type}`;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.Search || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setMovies([]);
    }
  };
  return (
    <div className="px-8 sm:px-0">
      <form onSubmit={(e) => e.preventDefault()} className="py-8">
        <div className="w-full flex items-center max-w-[550px]">
          <input
            className="w-full h-10 py-2 px-4 rounded-l-md bg-light-50 shadow-card border-none outline-none text-gray-600"
            placeholder="Search for movies"
            required
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            onKeyDown={handleKeyDown}
          />
          <button
            className="text-base h-10 px-2 cursor-pointer text-gray-700 flex items-center 
          rounded-r-md shadow-card bg-blue-200 hover:bg-blue-400 transition-all 
          duration-200"
            type="button"
            onClick={() => searchMovies(searchTerm)}
          >
            Search
            <BiSearchAlt className="text-xl h-full ml-2" />
          </button>
        </div>

        <div className="flex items-center my-5 gap-8">
          <select
            className="w-20 h-10 p-2 rounded-md bg-light-50 border-none text-gray-600 cursor-pointer"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option value="">Year</option>
            {years.map((yearOption) => (
              <option key={yearOption} value={yearOption}>
                {yearOption}
              </option>
            ))}
          </select>

          <select
            className="w-24 h-10 p-2 bg-light-50 cursor-pointer border-none text-gray-600 rounded-md"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">All</option>
            <option value="movie">Movie</option>
            <option value="series">Series</option>
          </select>
        </div>
      </form>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie: MovieProps) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
        </div>
      ) : (
        <div>
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default Search;
