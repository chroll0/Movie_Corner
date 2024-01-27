"use client";

import { BiSearchAlt } from "react-icons/bi";

import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import Slides from "../components/Slides";
import { API_URL } from "../constants/Database";

interface MovieProps {
  imdbID: string;
  Year: string;
  Poster: string;
  Title: string;
  Type: string;
}

const Home = () => {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [year, setYear] = useState("");

  const firstFilmYear = 1895;
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = currentYear; i >= firstFilmYear; i--) {
    years.push(i);
  }

  const [type, setType] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      if (searchTerm.trim() !== "") {
        searchMovies(searchTerm);
      }
    }
  };
  useEffect(() => {
    searchMovies("Avengers");
  }, []);

  const searchMovies = async (title: string) => {
    let url = `${API_URL}&s=${title}`;

    if (year) {
      url += `&y=${year}`;
    }
    if (type) {
      url += `&type=${type}`;
    }

    const response = await fetch(url);
    const data = await response.json();
    setMovies(data.Search);
  };

  return (
    <div className="font-poppins hide-scrollbar overflow-x-auto w-full flex flex-col justify-center p-1">
      <h1 className="font-sans text-3xl font-extrabold tracking-wider text-gradient">
        Movie Corner
      </h1>

      <div>
        <Slides />
        <div className="pb-16 max-w-[450px]">
          <h3 className="leading-10 text-xl font-sans italic capitalize tracking-wide font-bold">
            Cinematic Delights Across Eras,
          </h3>
          <h3 className="leading-10 text-xl font-sans italic capitalize tracking-wide font-bold text-end">
            Movies for All Tastes
          </h3>
        </div>
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="w-full flex items-center max-w-[550px]">
          <input
            className="w-full h-10 py-2 px-4 rounded-l-md bg-slate-100 shadow-card border-none outline-none text-gray-600"
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
            className="w-20 h-10 p-2 rounded-md bg-slate-100 border-none text-gray-600 cursor-pointer"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option value="" disabled>
              Year
            </option>
            {years.map((yearOption) => (
              <option key={yearOption} value={yearOption}>
                {yearOption}
              </option>
            ))}
          </select>

          <select
            className="w-24 h-10 p-2 bg-slate-100 cursor-pointer border-none text-gray-600 rounded-md"
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
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default Home;
