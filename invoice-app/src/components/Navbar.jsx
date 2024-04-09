import MainIcon from "/assets/main-icon.svg";
import MoonIcon from "/assets/moon.svg";
import SunIcon from "/assets/sun.png";
import UserImg from "/assets/user.jpg";
export default function Navbar() {
  function handleTheme() {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem(
      "theme",
      document.documentElement.classList.contains("dark") ? "dark" : "light",
    );
  }
  return (
    <div className="fixed bottom-0 left-0 top-0 z-50 h-full tablet:h-min tablet:w-full">
      <div className="flex h-full flex-col justify-between overflow-hidden rounded-r-3xl bg-navbar-cl transition-colors dark:bg-raisin-black tablet:w-full tablet:flex-row tablet:rounded-none">
        <img
          className="h-[103px] w-[103px] shrink-0 object-cover object-center tablet:h-20 tablet:w-20 mobile:h-[72px] mobile:w-[72px]"
          src={MainIcon}
          alt=""
          width="103"
          height="103"
          aria-hidden={true}
        />
        <div className="flex w-full flex-shrink-0 flex-col items-center tablet:w-auto tablet:flex-row">
          <button
            onClick={handleTheme}
            className="mb-8 transition-transform hover:opacity-80 active:scale-90 tablet:mb-0 tablet:mr-8 mobile:mr-6"
          >
            <img
              className="h-5 w-5 object-contain object-center dark:hidden"
              src={MoonIcon}
              alt=""
              aria-hidden={true}
              width="20"
              height="20"
            />
            <img
              className="hidden h-6 w-6 object-contain object-center dark:block"
              src={SunIcon}
              alt=""
              aria-hidden={true}
              width="20"
              height="20"
            />
          </button>
          <div
            className="flex h-[90px] w-full items-center justify-center border-t border-navbar-line-cl
           tablet:h-full tablet:w-auto tablet:border-l tablet:border-t-0 tablet:px-8 mobile:px-6"
          >
            <img
              className="h-10 w-10 rounded-full object-cover object-center tablet:h-8 tablet:w-8"
              src={UserImg}
              width="40"
              height="40"
              alt="User"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
