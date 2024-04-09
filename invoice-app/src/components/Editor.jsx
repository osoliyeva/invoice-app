import { useState } from "react";
import useDocs from "../hooks/useDocs";
import getFormData from "../utils/get-form-data";
import { toast } from "sonner";
export default function Editor() {
  const [saveLoading, setSaveLoading] = useState(false);
  const [draftLoading, setDraftLoading] = useState(false);
  const [draftClicked, setDraftClicked] = useState(false);
  const { firebaseAddDoc } = useDocs();
  let status = "pending";

  function statusChanger(e) {
    if (e.target === draftButton) {
      status = "draft";
      setDraftClicked(true);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = getFormData(e.target);
    setSaveLoading(true);
    draftClicked && setDraftLoading(true);
    firebaseAddDoc({ status, ...formData })
      .then((res) => {
        setDraftLoading(false);
        setSaveLoading(false);
        editor.classList.remove("show");
        toast.success("Data send succesfully :)");
      })
      .catch((error) => {
        setDraftLoading(false);
        setSaveLoading(false);
        toast.error(error.message);
      });
  }

  function handleEditor(e) {
    if (e.target === editor) {
      editor.classList.remove("show");
    }
  }

  return (
    <div
      className="group pointer-events-none fixed inset-0 z-40 bg-poor-black opacity-0 transition-all duration-300"
      id="editor"
      onClick={handleEditor}
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
                    defaultValue="Net 1 days"
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
                />
              </label>
            </div>

            {/*  item list */}

            <div>
              <div
                className="flex justify-between mobile:gap-2"
                id="newInvoice"
              >
                <div>
                  <button
                    onClick={() => {
                      editor.classList.remove("show");
                    }}
                    className="edit-button-white widhtFull:p-3 widhtFull:text-xs dark:text-white dark:hover:bg-navbar-cl"
                    type="button"
                  >
                    Discart
                  </button>
                </div>
                <div className="flex gap-2">
                  <button
                    className="draft-button widhtFull:p-3 widhtFull:text-xs disabled:opacity-50 dark:text-white"
                    type="submit"
                    id="draftButton"
                    disabled={draftLoading}
                    onClick={statusChanger}
                  >
                    {draftLoading ? (
                      <span className="loading loading-spinner"></span>
                    ) : (
                      <>
                        <span className="mobile:hidden">Save as</span> Draft
                      </>
                    )}
                  </button>
                  <button
                    className="paid-button widhtFull:p-3 widhtFull:text-xs white-type1 disabled:opacity-50 dark:text-white"
                    type="submit"
                    id="saveButton"
                    onClick={statusChanger}
                    disabled={saveLoading}
                  >
                    {saveLoading ? (
                      <span className="loading loading-spinner"></span>
                    ) : (
                      <>
                        Save <span className="mobile:hidden"> & Send</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
              {/* <div className="w-full justify-end" id="edit">
                <div className="flex justify-end gap-2">
                  <button
                    className="edit-button-white widhtFull:p-3 widhtFull:text-xs dark:text-white"
                    type="submit"
                    onClick={handleEditor}
                  >
                    Cancel
                  </button>
                  <button
                    className="paid-button widhtFull:p-3 widhtFull:text-xs white-type1 dark:text-white"
                    type="submit"
                  >
                    Save changes
                  </button>
                </div>
              </div> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
