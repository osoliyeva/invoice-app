import { useEffect, useState } from "react";

export default function Status({ status }) {
  const [currentStatus, setCurrentStatus] = useState("pending");

  useEffect(() => {
    if (status === "draft") {
      setCurrentStatus(
        "bg-draft-cl_05 text-draft-cl dark:bg-draft-cl-dark_05 dark:text-draft-cl-dark",
      );
    } else if (status === "paid") {
      setCurrentStatus(
        "bg-paid-cl_05 text-paid-cl dark:bg-paid-dark-cl_05 dark:text-paid-dark-cl",
      );
    } else setCurrentStatus("bg-pending-cl_05 text-pending-cl");
  }, [status]);
  return (
    <button
      className={`flex w-[104px] cursor-pointer items-center justify-center gap-2 rounded px-[18px]  pb-[11px] pt-[14px] text-[15px] font-bold -tracking-[0.25px] ${currentStatus}`}
    >
      <svg
        width="8"
        height="8"
        viewBox="0 0 8 8"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="4" cy="4" r="4" fill="currentColor" />
      </svg>
      <span className="capitalize">{status}</span>
    </button>
  );
}
