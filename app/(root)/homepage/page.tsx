"use client";

import { BiSearchAlt } from "react-icons/bi";

import { useState, useEffect } from "react";
import MovieCard from "../../../components/MovieCard";
import Slides from "../../../components/Slides";
import {
  API_URL,
  SlideClassicMovie,
  SlideMovies,
} from "../../../constants/Database";

interface MovieProps {
  imdbID: string;
  Year: string;
  Poster: string;
  Title: string;
  Type: string;
}

const HomePage = () => {
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
      <h1 className="font-sans text-[38px] font-extrabold tracking-wider text-gradient">
        Movie Corner
      </h1>

      <div>
        <div className="pt-12 max-w-[450px]">
          <h3 className="leading-10 text-xl font-sans italic capitalize tracking-wide">
            Cinematic Delights Across Eras,
          </h3>
          <h3 className="leading-10 text-xl font-sans italic capitalize tracking-wide text-end">
            Movies for All Tastes
          </h3>
        </div>
        <Slides dataProp={SlideMovies} />
      </div>

      <div>
        <div className="pt-6 max-w-[200px]">
          <h3 className="leading-10 text-[22px] font-sans capitalize tracking-wide font-semibold">
            Oscar Winners
          </h3>
          <p className="mt-2 italic text-sm text-end text-icons-200">
            Best Picture Category
          </p>
        </div>
        <Slides dataProp={SlideClassicMovie} />
      </div>

      <div className="pt-6 max-w-[450px]">
        <h3 className="leading-10 text-xl font-sans italic capitalize tracking-wide">
          Discover cinematic magic
        </h3>
        <h3 className="leading-10 text-xl font-sans italic capitalize tracking-wide text-end">
          Search your favorite movie here!
        </h3>
      </div>

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
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default HomePage;
