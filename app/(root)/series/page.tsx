import { MoviesToWatch, Search, Slides } from "../../../components";
import { BestSeries, SlideSeries } from "../../../constants/Database";

const Series = () => {
  return (
    <div className="font-poppins hide-scrollbar overflow-x-auto w-full flex flex-col justify-center p-1">
      <div className="shadow-slider">
        <div className="pt-8 max-w-full flex justify-center px-4">
          <h3 className="leading-10 text-xl font-semibold font-poppins capitalize tracking-wide text-center">
            Explore the Most
            <span className="text-icons-200 leading-10 text-xl font-semibold font-poppins capitalize tracking-wider">
              {" "}
              Popular{" "}
            </span>
            Series
          </h3>
        </div>
        <Slides dataProp={SlideSeries} />
      </div>
      <div className="px-8 sm:px-0 pt-10">
        <div className="pt-6 max-w-[450px]">
          <h3 className="leading-10 text-xl font-sans italic capitalize tracking-wide">
            Explore Series Hub
          </h3>
          <h3 className="leading-10 text-xl font-sans italic capitalize tracking-wide text-end">
            Search your favorite series here!
          </h3>
        </div>
      </div>
      <Search />

      <div className="py-8">
        <div className="pt-4 max-w-[350px] px-8 sm:px-0">
          <h3 className="leading-10 text-[22px] font-sans capitalize tracking-wide font-semibold">
            Exploring the Best Series
          </h3>
          <p className="mt-2 italic text-sm text-end text-icons-200">
            Find Your Favorite Pick!
          </p>
        </div>
        <MoviesToWatch MovieData={BestSeries} />
      </div>
    </div>
  );
};

export default Series;
