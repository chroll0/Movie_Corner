import Slides from "../../../components/Slides";
import { SlideBestSeries, SlideSeries } from "../../../constants/Database";

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
    </div>
  );
};

export default Series;
