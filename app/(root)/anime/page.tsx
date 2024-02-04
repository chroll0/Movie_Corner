"use client";

import { BiSearchAlt } from "react-icons/bi";

import { useState, useEffect } from "react";
import MovieCard from "../../../components/MovieCard";
import Slides from "../../../components/Slides";

import { SlideAnime, TopAnime } from "../../../constants/Database";
import Search from "../../../components/Search";
import MoviesToWatch from "../../../components/MoviesToWatch";

interface MovieProps {
  imdbID: string;
  Year: string;
  Poster: string;
  Title: string;
  Type: string;
}

const Anime = () => {
  return (
    <div className="font-poppins hide-scrollbar overflow-x-auto w-full flex flex-col justify-center p-1">
      <div className="shadow-slider">
        <div className="pt-8 max-w-full flex justify-center px-4">
          <h3 className="leading-10 text-xl font-semibold font-poppins capitalize tracking-wide text-center">
            Dive into the Newest
            <span className="text-icons-200 leading-10 text-xl font-semibold font-poppins capitalize tracking-wider">
              {" "}
              Anime{" "}
            </span>
            Trends
          </h3>
        </div>
        <Slides dataProp={SlideAnime} />
      </div>

      <div className="px-8 sm:px-0 pt-10">
        <div className="pt-6 max-w-[450px]">
          <h3 className="leading-10 text-xl font-sans italic capitalize tracking-wide">
            Discover anime world
          </h3>
          <h3 className="leading-10 text-xl font-sans italic capitalize tracking-wide text-end">
            Search your favorite anime here!
          </h3>
        </div>
      </div>

      <Search />

      <div className="py-8">
        <div className="pt-4 max-w-[280px] px-8 sm:px-0">
          <h3 className="leading-10 text-[22px] font-sans capitalize tracking-wide font-semibold">
            Mark your best one
          </h3>
          <p className="mt-2 italic text-sm text-end text-icons-200">
            Best Series Ever!
          </p>
        </div>
        <MoviesToWatch MovieData={TopAnime} />
      </div>
    </div>
  );
};

export default Anime;
