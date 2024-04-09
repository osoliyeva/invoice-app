import nextIcon from "/assets/next-icon.svg";
import Status from "./Status";
import { useNavigate } from "react-router-dom";

export default function Card({ code, owner, price, status, date, id }) {
  const navigate = useNavigate();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div
      onClick={() => navigate(`/details/${id}`)}
      className="flex cursor-pointer items-center justify-between rounded-lg border border-transparent px-8 py-4 shadow-lg transition-colors hover:border-primary dark:bg-raisin-black tablet:w-full mobile:h-[134px] mobile:w-[327px]"
    >
      <div className=" flex gap-11 mobile:flex-col mobile:gap-0">
        <h4 className="font-spartan text-base font-bold dark:text-white mobile:mb-6 ">
          <span className="text-light-slate-blue">#</span>
          {code}
        </h4>
        <span className="font-spartan text-xs font-medium text-light-slate-blue dark:text-white mobile:mb-[9px]">
          Due {new Date(date).toLocaleDateString("en-US", options)}
        </span>
        <span className="font-spartan text-xs font-medium text-light-slate-blue dark:text-white">
          {owner}
        </span>
      </div>
      <div className="flex items-center gap-10 mobile:flex-col mobile:gap-6">
        <h4 className="font-spartan text-base font-bold dark:text-white">
          £ {price ? price.toFixed(2) : 1000}
        </h4>
        <div className="flex gap-5">
          <Status status={status} />
          <img src={nextIcon} alt="" area-hidden="true" />
        </div>
      </div>
    </div>
  );
}
