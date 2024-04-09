import { useEffect, useState } from "react";
import plus from "/assets/plus.svg";
import FilterImg from "/assets/filter.svg";
import useDocs from "../hooks/useDocs";
import Card from "./Card";
import NotFound from "./NotFound";

export default function Invoices() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentStatus, setCurrentStatus] = useState("all");
  const { firebaseGetDocs } = useDocs();

  const items = [
    { id: 1, status: "all" },
    { id: 2, status: "draft" },
    { id: 3, status: "pending" },
    { id: 4, status: "paid" },
  ];

  useEffect(() => {
    setLoading(true);
    firebaseGetDocs()
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  function handleEditor() {
    editor.classList.add("show");
  }

  function handleChange(e) {
    setCurrentStatus(e.target.value);
  }

  return (
    <div>
      <div className="flex w-full flex-col items-center justify-center pb-16 pt-[74px] tablet:pt-0">
        <div className="w-[730px] tablet:mb-0 tablet:pb-[55px] tablet:pl-[48px] tablet:pr-[48px] tablet:pt-[140px] mobile:w-[327px] mobile:pl-0 mobile:pr-0 ">
          <header className="flex  items-center justify-between  mobile:p-0">
            <div>
              <h3 className="mb-[6px] font-spartan text-4xl font-bold leading-8 -tracking-[1.13px] text-rich-black dark:text-white mobile:mb-[3px] mobile:text-[24px]">
                Invoices
              </h3>
              <span className="font-spartan text-xs font-medium leading-4 tracking-widest text-manatee dark:text-white mobile:hidden">
                There are {data?.filter((el) => el.status === "pending").length}{" "}
                pending invoices
              </span>
              <span className=" mobile:no-invoice hidden mobile:block ">
                No Invoisec
              </span>
            </div>
            <div className="flex items-center gap-16 mobile:gap-4">
              <div className="group relative" id="filter">
                <span
                  onClick={() => filter.classList.toggle("show")}
                  id="filterController"
                  className="z-10 flex cursor-pointer items-center gap-[14px] text-[15px] font-bold -tracking-[0.25px] text-rich-black dark:text-white"
                >
                  <span className="pointer-events-none select-none">
                    Filter by status
                  </span>
                  <img
                    className="pointer-events-none transition-transform group-[.show]:rotate-180"
                    src={FilterImg}
                    alt=""
                    aria-hidden="true"
                  />
                </span>
                <div
                  id="filterBody"
                  className="pointer-events-none invisible absolute top-8 w-[192px] translate-y-5 rounded-lg bg-white p-5 opacity-0 drop-shadow-lg transition-all duration-300 group-[.show]:pointer-events-auto group-[.show]:visible group-[.show]:translate-y-0 group-[.show]:opacity-100 dark:bg-edit-button-black"
                >
                  <ul className="flex w-full flex-col gap-4">
                    {items.map(({ id, status }) => {
                      return (
                        <li key={id} className="form-control">
                          <label
                            className="flex w-full cursor-pointer items-center gap-3 rounded-md p-1 hover:bg-alice-blue dark:hover:bg-navbar-cl"
                            htmlFor={status}
                          >
                            <input
                              className="checkbox indeterminate:bg-transparent indeterminate:bg-none dark:border-ghost-white"
                              type="radio"
                              onChange={handleChange}
                              defaultChecked={false}
                              checked={currentStatus === status && true}
                              name="status"
                              value={status}
                              id={status}
                            />
                            <span className="font-bold capitalize text-rich-black dark:text-white">
                              {status}
                            </span>
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <button
                className="new-invoice-button  flex  gap-4 "
                onClick={handleEditor}
              >
                <img className="h-8 w-8 rounded-full" src={plus} alt="" />
                <span className="font-spartan text-base font-bold tracking-wide text-white dark:text-white">
                  New <span className="mobile:hidden">Invoices</span>
                </span>
              </button>
            </div>
          </header>
        </div>
      </div>
      <div className="mx-auto max-w-[730px]">
        <ul className="flex flex-col gap-4 pb-20">
          {data &&
            data.length > 0 &&
            data.map(
              ({
                id,
                bt_postCode,
                bt_clientName,
                price,
                status,
                bt_invoiceDate,
              }) => {
                const checker = status === currentStatus;
                return (
                  (currentStatus === "all" ? !checker : checker) && (
                    <li key={id}>
                      <Card
                        id={id}
                        code={bt_postCode}
                        owner={bt_clientName}
                        price={price}
                        status={status}
                        date={bt_invoiceDate}
                      />
                    </li>
                  )
                );
              },
            )}
        </ul>
        {loading && (
          <div className="flex items-center justify-center gap-5">
            <span className="loading loading-spinner dark:text-ghost-white"></span>
            <span className="dark:text-ghost-white">Loading...</span>
          </div>
        )}
      </div>
      {!loading && data?.length === 0 && <NotFound />}
    </div>
  );
}
