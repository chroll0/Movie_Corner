interface MovieCardProps {
  movie: {
    imdbID: string;
    Year: string;
    Poster: string;
    Title: string;
    Type: string;
  };
}

const MovieCard = ({
  movie: { imdbID, Year, Poster, Title, Type },
}: MovieCardProps) => {
  return (
    <div className="movie text-orange-200" key={imdbID}>
      <div className=" opacity-0 p-6 absolute top-0 left-0 w-full">
        <p>{Year}</p>
      </div>
      <div className="w-full h-full">
        <img
          src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/300"}
          alt="Movie Poster"
        />
      </div>
      <div className="absolute bottom-0 left-0 p-6 z-10 bg-dark-50 w-full">
        <span className="uppercase text-xs tracking-widest">{Type}</span>
        <h3 className="font-sans text-base font-semibold tracking-wide">
          {Title}
        </h3>
      </div>
    </div>
  );
};
export default MovieCard;
