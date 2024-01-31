import Slides from "../../../components/Slides";
import { SlideSeries } from "../../../constants/Database";

const Serials = () => {
  return (
    <div className="font-poppins hide-scrollbar overflow-x-auto w-full flex flex-col justify-center p-1">
      <Slides dataProp={SlideSeries} />
    </div>
  );
};

export default Serials;
