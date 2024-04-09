import { NavLink } from "react-router-dom";
import goBack from "/assets/back-icon.svg";
import { useEffect, useState } from "react";
import useDocs from "../hooks/useDocs";
import Status from "./Status";
import { toast } from "sonner";

export default function SinglePage({ id }) {
  const [loading, setLoading] = useState(false);
  const [paidLoading, setPaidLoading] = useState(false);
  const [paid, setPaid] = useState(false);
  const [data, setData] = useState(null);
  const { firebaseGetDocByCode, firebaseMarkAsPaidDoc } = useDocs();

  function handleEditForm() {
    editform.classList.add("show");
  }

  useEffect(() => {
    setLoading(true);
    firebaseGetDocByCode(id)
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [paid]);

  function handleStatus() {
    setPaidLoading(true);
    firebaseMarkAsPaidDoc(id)
      .then((res) => {
        setPaidLoading(false);
        setPaid(true);
        toast.success("Invoice marked as paid");
      })
      .catch((error) => {
        setPaidLoading(false);
        setPaid(false);
        toast.error(error.message);
      });
  }

  return (
    <>
      {data ? (
        <div className="flex w-full flex-col items-center justify-center pt-[74px] tablet:pt-[129px] mobile:pl-6 mobile:pr-6">
          <div className="flex w-[730px] flex-col  mobile:w-full">
            <NavLink
              className="mb-8 flex items-center justify-start gap-1 "
              to="/"
            >
              <img src={goBack} alt="" />
              <span className="rich-black-type2">Go back</span>
            </NavLink>
            <div className="mb-6 flex items-center justify-between rounded pb-5 pl-8 pr-8 pt-5 shadow-lg dark:bg-raisin-black">
              <div className="flex items-center justify-center gap-5 mobile:w-full mobile:justify-between">
                <span className="light-blue-type1">Status</span>
                <div className="flex gap-5">
                  <Status status={data?.status} />
                </div>
              </div>
              <div className="flex gap-2 mobile:hidden">
                <button
                  className="edit-button-white light-blue-type1 dark:hover:bg-navbar-cl"
                  onClick={handleEditForm}
                >
                  Edit
                </button>
                <button
                  className="button-delete white-type1"
                  onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                  }
                >
                  Delete
                </button>
                <button
                  className="paid-button white-type1 disabled:opacity-50"
                  onClick={handleStatus}
                  disabled={
                    paidLoading === true || data.status === "paid"
                      ? true
                      : false
                  }
                >
                  {paidLoading ? (
                    <span className="loading loading-spinner"></span>
                  ) : (
                    "Mark as Paid"
                  )}
                </button>
              </div>
            </div>
            <div className="flex w-[730px] flex-col items-center justify-center rounded pb-[50px] pl-[48px] pr-[48px] pt-[50px] shadow-lg dark:bg-raisin-black mobile:mb-14 mobile:w-full mobile:pl-6 mobile:pr-6">
              {/* adress */}
              <div className=" mb-[49px] flex w-full items-start justify-between mobile:flex-col mobile:items-start">
                <div className="mobile:mb-[30px]">
                  {/* code keladi */}
                  <h4 className="rich-black-type1 mb-2">{data.code}</h4>
                  {/* bt_projectDescription keladi */}
                  <span className="light-blue-type1">
                    {data.bt_projectDescription}
                  </span>
                </div>
                <div className="flex flex-col items-end justify-center mobile:items-start">
                  {/* bf_streetAddress keladi */}
                  <span className="light-blue-type1">
                    {data.bf_streetAddress}
                  </span>
                  {/* bf_city keladi */}
                  <span className="light-blue-type1">{data.bf_city}</span>
                  {/* bf_postCode keladi */}
                  <span className="light-blue-type1">{data.bf_postCode}</span>
                  {/* bf_country keladi */}
                  <span className="light-blue-type1">{data.bf_country}</span>
                </div>
              </div>
              {/* info */}
              <div className="mb-[44px] flex w-full items-start justify-between mobile:flex-col">
                <div className="flex w-[290px] items-start justify-between mobile:mb-8 mobile:w-full">
                  <div>
                    <div className="mb-8">
                      <span className="light-blue-type4 mb-3">
                        Invoice Date
                      </span>
                      {/* bt_invoiceDate */}
                      <h4 className="rich-black-type3">
                        {data.bt_invoiceDate}
                      </h4>
                    </div>
                    <div>
                      <span className="light-blue-type4 mb-3">Payment Due</span>
                      {/* bt_paymentTerms */}
                      <h4 className="rich-black-type3">
                        {data.bt_paymentTerms}
                      </h4>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="light-blue-type4 mb-3">Bill To</span>
                    {/* bt_clientName */}
                    <h4 className="rich-black-type3 mb-2">
                      {data.bt_clientName}
                    </h4>
                    {/* bt_streetAdress */}
                    <span className="light-blue-type1">
                      {data.bt_streetAdress}
                    </span>
                    {/* bt_city */}
                    <span className="light-blue-type1"> {data.bt_city} </span>
                    {/* bt_postCode */}
                    <span className="light-blue-type1">{data.bt_postCode}</span>
                    {/* bt_country */}
                    <span className="light-blue-type1">{data.bt_country}</span>
                  </div>
                </div>
                <div>
                  <span className="light-blue-type4 mb-3">Sent to</span>
                  {/* bt_clientEmail */}
                  <h4 className="rich-black-type3">{data.bt_clientEmail}</h4>
                </div>
              </div>
              {/* card */}
              <div className="flex w-[634px] items-start justify-between rounded bg-add-new-btn pb-[34px] pl-[33px] pr-[34px] pt-[33px] dark:bg-edit-button-black mobile:w-full">
                <div className="flex flex-col gap-8 mobile:gap-2">
                  <span className="light-blue-type1 mobile:hidden ">
                    Item Name
                  </span>
                  <h4 className="rich-black-type2">Banner Design</h4>
                  <span className="light-blue-type5 hidden mobile:block">
                    1*£ 156.00
                  </span>
                  <h4 className="rich-black-type2">Email Design</h4>
                  <span className="light-blue-type5 hidden mobile:block">
                    2*£ 200.00
                  </span>
                </div>
                <div className="flex flex-col gap-8">
                  <span className="light-blue-type1 mobile:hidden ">QTY.</span>
                  <span className="light-blue-type5 mobile:hidden">1</span>
                  <span className="light-blue-type5 mobile:hidden">2</span>
                </div>
                <div className="flex flex-col gap-8">
                  <span className="light-blue-type1 mobile:hidden ">Price</span>
                  <span className="light-blue-type5 mobile:hidden">
                    £ 156.00
                  </span>
                  <span className="light-blue-type5 mobile:hidden">
                    £ 200.00
                  </span>
                </div>
                <div className="flex flex-col gap-8">
                  <span className="light-blue-type1  mobile:hidden">Total</span>
                  <span className="rich-black-type2">£ 156.00</span>
                  <span className="rich-black-type2">£ 400.00</span>
                </div>
              </div>
              {/* footer */}
              <div className="flex w-[634px] items-center justify-between rounded bg-navbar-cl pb-[34px] pl-[33px] pr-[34px] pt-[33px] text-white dark:bg-rich-black mobile:w-full mobile:pb-[26px] mobile:pl-6 mobile:pr-6 mobile:pt-[26px]">
                <span className="white-type3">Amount Due</span>
                <span className="white-type2">£ 356.000</span>
              </div>
            </div>
            <div className=" hidden gap-2 dark:bg-raisin-black mobile:bottom-0 mobile:flex mobile:w-full mobile:bg-white">
              <button
                className="edit-button-white light-blue-type1"
                onClick={handleEditForm}
              >
                Edit
              </button>
              <button
                className="button-delete white-type1"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                Delete
              </button>
              <button className="paid-button white-type1 ">Maks as Paid</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center gap-5 pt-64">
          <span className="loading loading-spinner dark:text-ghost-white"></span>
          <span className="dark:text-ghost-white">Loading...</span>
        </div>
      )}
    </>
  );
}
