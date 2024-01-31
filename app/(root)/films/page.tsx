"use client";

import { BiSearchAlt } from "react-icons/bi";

import { useState, useEffect } from "react";
import MovieCard from "../../../components/MovieCard";
import Slides from "../../../components/Slides";

import { SlideAnime } from "../../../constants/Database";

interface MovieProps {
  imdbID: string;
  Year: string;
  Poster: string;
  Title: string;
  Type: string;
}

const Films = () => {
  return (
    <div className="font-poppins hide-scrollbar overflow-x-auto w-full flex flex-col justify-center p-1">
      <Slides dataProp={SlideAnime} />
    </div>
  );
};

export default Films;
