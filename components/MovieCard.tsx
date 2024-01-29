import { BsBookmarkPlusFill } from "react-icons/bs";

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
    <div
      className="text-light-50 relative group movie cursor-pointer hover:scale-110 transition-all duration-300"
      key={imdbID}
    >
      <div
        className="opacity-0 px-6 py-4 absolute top-[-74px] group-hover:top-0 
      left-0 w-full transition-all duration-500 ease-in-out group-hover:opacity-100 bg-dark-200"
      >
        <div className="flex items-center justify-between w-full">
          <p className="font-semibold text-base">{Year}</p>
          <BsBookmarkPlusFill className="hover:text-icons-200 text-light-50 transition-all duration-300" />
        </div>
      </div>
      <div className="w-full h-full">
        <img
          src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/300"}
          alt="Movie Poster"
        />
      </div>
      <div className="absolute bottom-0 left-0 p-6 z-10 bg-dark-200 w-full">
        <span className="uppercase text-xs tracking-widest">{Type}</span>
        <h3 className="font-sans text-base font-semibold tracking-wide">
          {Title}
        </h3>
      </div>
    </div>
  );
};
export default MovieCard;
