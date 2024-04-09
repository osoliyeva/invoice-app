import notFound from "/assets/not-found.svg";

export default function NotFound() {
  return (
    <div className="flex w-full flex-col items-center justify-center pb-14 ">
      <div className="flex flex-col items-center justify-center">
        <img src={notFound} alt="" area-hidden="true" />
        <h4 className="font-spartan text-2xl font-bold text-rich-black dark:text-white">
          There is nothing here
        </h4>
        <p className="font-spartan text-xs font-medium text-light-slate-blue dark:text-white">
          Create an invoice by clicking the
        </p>
        <p className="font-spartan text-xs font-medium text-light-slate-blue dark:text-white">
          New Invoice button and get started
        </p>
      </div>
    </div>
  );
}
