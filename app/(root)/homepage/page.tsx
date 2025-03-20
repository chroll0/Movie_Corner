import { MoviesToWatch, Search, Slides } from "../../../components";
import AddMessageForm from "../../../components/AddMessageForm";
import { ClassicMovie, SlideMovies } from "../../../constants/Database";

const HomePage = () => {
  return (
    <div className="font-poppins hide-scrollbar overflow-x-auto w-full flex flex-col justify-center p-1">
      <div className="shadow-slider">
        <div className="pt-12 max-w-full flex justify-center px-4">
          <h3 className="leading-10 text-xl font-semibold font-poppins capitalize tracking-wide text-center">
            <span className="text-icons-200 leading-10 text-xl font-semibold font-poppins capitalize tracking-wider">
              2024{" "}
            </span>
            - Big Releases Incoming
          </h3>
        </div>
        <Slides dataProp={SlideMovies} />
      </div>

      <div className="px-8 sm:px-0 pt-10">
        <div className="pt-6 max-w-[450px]">
          <h3 className="leading-10 text-xl font-sans italic capitalize tracking-wide">
            Discover cinematic magic
          </h3>
          <h3 className="leading-10 text-xl font-sans italic capitalize tracking-wide text-end">
            Search your favorite movie here!
          </h3>
        </div>
      </div>

      <Search />

      <div className="py-8">
        <div className="pt-4 sm:max-w-[250px] max-w-[300px] px-8 sm:px-0">
          <h3 className="leading-10 text-[22px] font-sans capitalize tracking-wide font-semibold">
            Oscar Winners
          </h3>
          <p className="mt-2 italic text-sm text-end text-icons-200">
            Best Picture Category
          </p>
        </div>
        <MoviesToWatch MovieData={ClassicMovie} />
      </div>
      <AddMessageForm />
    </div>
  );
};

export default HomePage;
