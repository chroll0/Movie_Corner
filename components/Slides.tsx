"use client";

import { useEffect, useState, useRef } from "react";
import { API_URL } from "../constants/Database";

interface MovieProps {
  imdbID: string;
  Year: string;
  Poster: string;
  Title: string;
  Type: string;
}
interface SlideData {
  title: string;
  year?: string;
}

interface SlidesProps {
  dataProp: SlideData[];
}

const Slides = ({ dataProp }: SlidesProps) => {
  const [firstMovies, setFirstMovies] = useState<MovieProps[]>([]);
  const sliderRef = useRef<HTMLDivElement>(null);

  const searchMoviesForSlideMovies = async () => {
    const moviesPromises = dataProp.map(async (slide) => {
      const url = `${API_URL}&s=${slide.title}&y=${slide.year}`;
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

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      let interval: NodeJS.Timeout;

      const handleAnimation = () => {
        const firstChild = slider.children[0] as HTMLElement; // Type assertion
        if (firstChild) {
          const width = firstChild.offsetWidth + 64;
          slider.style.transition = "transform 9s linear"; // Adjust the transition duration to control the speed
          slider.style.transform = `translateX(-${width}px)`; // Move the slider slowly to the left
          const transitionEndHandler = () => {
            slider.appendChild(firstChild);
            slider.style.transition = "none";
            slider.style.transform = "translateX(0)";
            slider.removeEventListener("transitionend", transitionEndHandler);
            interval = setTimeout(handleAnimation, 0); // Restart sliding after 5 seconds
          };
          slider.addEventListener("transitionend", transitionEndHandler);
        }
      };

      interval = setTimeout(handleAnimation, 2000); // Start sliding after 5 seconds initially

      const clearAnimation = () => clearInterval(interval);

      return clearAnimation;
    }
  }, [firstMovies]);

  return (
    <div className="py-16 px-1 scrollbar overflow-x-auto w-full">
      <div ref={sliderRef} className="flex gap-16">
        {firstMovies.map((movie, index) => (
          <div
            key={index}
            className="min-w-[230px] max-w-[260px] hide-scrollbar flex flex-col"
          >
            <div className="h-[340px] bg-gray-300 overflow-y-hidden rounded-lg shadow-slide">
              <img
                className="h-full w-full"
                src={movie.Poster}
                alt={movie.Title}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slides;
