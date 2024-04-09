import { useState, useEffect } from "react";
import useDocs from "../hooks/useDocs";

import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import getFormData from "../utils/get-form-data";
export default function EditForm({ id }) {
  const { firebaseGetDocByCode, firebaseUpdateDoc } = useDocs();
  const [data, setData] = useState(null);
  const [addLoading, setAddLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
  }, []);

  function handleEditForm(e) {
    if (e.target === editform) {
      editform.classList.remove("show");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = getFormData(e.target);
    setAddLoading(true);
    firebaseUpdateDoc(id, data)
      .then((res) => {
        setAddLoading(false);
        editform.classList.remove("show");
        navigate("/");
        toast.success("Update succesfully :)");
      })
      .catch((error) => {
        setAddLoading(false);
        toast.error("Try again :(");
      });
  }

  return (
    <div
      className=" group pointer-events-none fixed inset-0 z-40 bg-poor-black opacity-0 transition-all duration-300"
      id="editform"
      onClick={handleEditForm}
    >
      <div className="fixed bottom-0 top-0 z-40 w-[719px] shrink-0 -translate-x-full overflow-y-scroll rounded-2xl bg-white transition-transform duration-500 group-[.show]:translate-x-0 tablet:w-[616px] mobile:w-full widthFull:w-full">
        <div className="rounded-2xl pb-8 pl-40 pr-14 pt-14 dark:bg-darck-bg tablet:pl-14 tablet:pt-40">
          {/*  bu joyda new invoice bo'lganda "new invoice" edit bo'lganda "code" turadi. "code" backenddan keladi. */}
          <h2 className=" mb-11 text-2xl font-bold capitalize  tracking-[-0.5px] text-rich-black   dark:text-white">
            New invoice
          </h2>

          {/* forma */}
          <form onSubmit={handleSubmit}>
            {/* bill from */}
            <div className="mb-[49px]">
              {/* doim bill from */}
              <h3 className=" from-to">Bill from</h3>

              {/*bill from street adress */}
              <label>
                <span className=" form-span dark:text-white">
                  Street address
                </span>
                <input
                  className="full-input hover:input-primary hover:cursor-pointer dark:bg-edit-button-black dark:text-white"
                  name="bf_streetAddress"
                  type="text"
                  minLength="3"
                  required
                  defaultValue={data?.bf_streetAddress}
                />
              </label>

              <div className="flex gap-6  widthFull:flex-col">
                {/* bill from city */}

                <label className="flex flex-col">
                  <span className="form-span dark:text-white">City</span>
                  <input
                    type="text"
                    className="city_code_country hover:cursor-pointer dark:bg-edit-button-black dark:text-white widthFull:w-full"
                    name="bf_city"
                    minLength="3"
                    required
                    defaultValue={data?.bf_city}
                  />
                </label>
                {/* bill from post code */}
                <label className="flex flex-col">
                  <span className="form-span dark:text-white">Post Code</span>
                  <input
                    type="text"
                    className="city_code_country hover:cursor-pointer dark:bg-edit-button-black dark:text-white widthFull:w-full"
                    name="bf_postCode"
                    minLength="6"
                    required
                    defaultValue={data?.bf_postCode}
                  />
                </label>

                {/* bill from country */}

                <label className="flex flex-col">
                  <span className="form-span dark:text-white">Country</span>
                  <input
                    type="text"
                    className="city_code_country hover:cursor-pointer dark:bg-edit-button-black dark:text-white widthFull:w-full"
                    name="bf_country"
                    minLength="3"
                    required
                    defaultValue={data?.bf_country}
                  />
                </label>
              </div>
            </div>

            {/* bill to */}
            <div className="mb-[49px]">
              {/* bu yozuv o'zgarmeydi */}
              <h3 className=" from-to">Bill to</h3>

              {/* client name */}
              <label className="form-control">
                <div className="flex justify-between">
                  <span className="form-span dark:text-white">
                    Client’s Name
                  </span>
                </div>
                <input
                  className="full-input hover:input-primary hover:cursor-pointer dark:bg-edit-button-black dark:text-white"
                  name="bt_clientName"
                  type="text"
                  minLength="3"
                  required
                  defaultValue={data?.bt_clientName}
                />
              </label>

              {/* client email */}
              <label>
                <div>
                  <span className="form-span dark:text-white">
                    Client’s Email
                  </span>
                </div>
                <input
                  className="full-input hover:input-error hover:cursor-pointer dark:bg-edit-button-black dark:text-white"
                  name="bt_clientEmail"
                  type="email"
                  placeholder="e.g. email@example.com"
                  required
                  defaultValue={data?.bt_clientEmail}
                />
              </label>

              {/* bill to street adress */}
              <label>
                <span className="form-span dark:text-white">
                  Street address
                </span>
                <input
                  className="full-input hover:input-error hover:cursor-pointer dark:bg-edit-button-black dark:text-white"
                  name="bt_streetAddress"
                  type="text"
                  minLength="3"
                  required
                  defaultValue={data?.bt_streetAddress}
                />
              </label>

              <div className="flex gap-6 widthFull:flex-col">
                {/* bt_city */}
                <label className="flex flex-col">
                  <span className="form-span dark:text-white">City</span>
                  <input
                    type="text"
                    className="city_code_country hover:cursor-pointer dark:bg-edit-button-black dark:text-white widthFull:w-full"
                    name="bt_city"
                    minLength="3"
                    required
                    defaultValue={data?.bt_city}
                  />
                </label>
                {/* bt_postCode */}
                <label className="flex flex-col">
                  <span className="form-span dark:text-white">Post Code</span>
                  <input
                    type="text"
                    className="city_code_country hover:cursor-pointer dark:bg-edit-button-black dark:text-white widthFull:w-full"
                    name="bt_postCode"
                    minLength="6"
                    required
                    defaultValue={data?.bt_postCode}
                  />
                </label>
                {/* bt_country */}
                <label className="flex flex-col">
                  <span className="form-span dark:text-white">Country</span>
                  <input
                    type="text"
                    className="city_code_country hover:cursor-pointer dark:bg-edit-button-black dark:text-white widthFull:w-full"
                    name="bt_country"
                    minLength="3"
                    required
                    defaultValue={data?.bt_country}
                  />
                </label>
              </div>
            </div>

            {/* date */}
            <div className="flex flex-col gap-[52px]">
              <div className="flex gap-6 widthFull:flex-col">
                {/* choose date */}
                <label className="flex flex-col">
                  <span className="form-span dark:text-white">
                    Invoice Date
                  </span>
                  <input
                    className="input input-bordered h-12 w-[240px] font-bold text-poor-black hover:input-primary hover:cursor-pointer hover:text-rich-black dark:bg-edit-button-black dark:text-white widthFull:w-full"
                    type="date"
                    name="bt_invoiceDate"
                    required
                    defaultValue={data?.bt_invoiceDate}
                  />
                </label>
                {/* option */}
                <label className="flex flex-col">
                  <span className="form-span dark:text-white">
                    Payment Terms
                  </span>
                  <select
                    className="max-w-xsinput select select-bordered h-12 w-[240px] font-spartan text-[15px] font-bold capitalize tracking-[-0.5px] text-rich-black hover:input-primary hover:text-rich-black dark:bg-edit-button-black dark:text-white widthFull:w-full"
                    name="bt_paymentTerms"
                    defaultValue={data?.bt_paymentTerms}
                  >
                    <option value="Net 1 days">net 1 days</option>
                    <option value="Net 7 days">net 7 days</option>
                    <option value="Net 14 days">net 14 days</option>
                    <option value="Net 30 days">net 30 days</option>
                  </select>
                </label>
              </div>
              {/* project description */}
              <label>
                <span className="form-span dark:text-white">
                  Project Description
                </span>
                <input
                  className="full-input font-bold hover:input-error hover:cursor-pointer dark:bg-edit-button-black dark:text-white"
                  name="bt_projectDescription"
                  type="text"
                  placeholder="e.g. Graphic Design Service"
                  minLength="10"
                  required
                  defaultValue={data?.bt_projectDescription}
                />
              </label>
            </div>

            {/*  item list */}

            <div className="w-full justify-end" id="edit">
              <div className="flex justify-end gap-2">
                <button
                  className="edit-button-white widhtFull:p-3 widhtFull:text-xs dark:text-white"
                  type="button"
                  onClick={() => {
                    editform.classList.remove("show");
                  }}
                >
                  Cancel
                </button>
                <button
                  className="paid-button widhtFull:p-3 widhtFull:text-xs white-type1 dark:text-white"
                  type="submit"
                  disabled={addLoading}
                >
                  {addLoading ? (
                    <span className="loading loading-spinner"></span>
                  ) : (
                    "Save changes"
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
