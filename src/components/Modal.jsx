import { useState } from "react";
import useDocs from "../hooks/useDocs";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export default function Modal({ id }) {
  const { firebaseDeleteDoc } = useDocs();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  function handleDelete() {
    setLoading(true);
    firebaseDeleteDoc(id)
      .then((res) => {
        setLoading(false);
        document.getElementById("my_modal_1").close();
        toast.success("Invoice deleted succesfully");
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        document.getElementById("my_modal_1").close();
        toast.error(error.message);
      });
  }
  return (
    <div className="flex w-full items-center justify-center ">
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box pb-12 pl-10 pr-10 pt-12 dark:bg-raisin-black">
          <h3 className="font-spartan text-2xl  font-bold  text-rich-black dark:text-white">
            Confirm Deletion
          </h3>
          <p className="w-[384px] py-4  font-spartan text-xs font-medium text-light-slate-blue dark:text-white">
            Are you sure you want to delete invoice #XM9141? This action cannot
            be undone.
          </p>
          <div className="modal-action">
            <form method="dialog" className="flex gap-2">
              {/* if there is a button in form, it will close the modal */}
              <button className="edit-button-white dark:text-white">
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="button-delete disabled:opacity-50 dark:text-white"
                type="button"
                disabled={loading}
              >
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Delete"
                )}
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
