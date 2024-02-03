import Slides from "../../../components/Slides";
import { SlideBestSeries, SlideSeries } from "../../../constants/Database";

const Series = () => {
  return (
    <div className="font-poppins hide-scrollbar overflow-x-auto w-full flex flex-col justify-center p-1">
      <div>
        <div className="pt-12 max-w-[450px]">
          <h3 className="leading-10 text-xl font-sans italic capitalize tracking-wide">
            Cinematic Delights Across Eras,
          </h3>
          <h3 className="leading-10 text-xl font-sans italic capitalize tracking-wide text-end">
            Movies for All Tastes
          </h3>
        </div>
        <Slides dataProp={SlideSeries} />
      </div>
      <div>
        <div className="pt-12 max-w-[450px]">
          <h3 className="leading-10 text-xl font-sans italic capitalize tracking-wide">
            Cinematic Delights Across Eras,
          </h3>
          <h3 className="leading-10 text-xl font-sans italic capitalize tracking-wide text-end">
            Movies for All Tastes
          </h3>
        </div>
        <Slides dataProp={SlideBestSeries} />
      </div>
    </div>
  );
};

export default Series;
