import { useContext } from "react";
import clsx from "clsx";
import { themes } from "../components/ThemeData";
import { ThemeContext } from "../App";

function Contact() {
  const theme = useContext(ThemeContext)
  return (
    <section className={clsx(themes[`${theme}`]['background'], "border-t")}>
      <div className="mx-auto max-w-md p-6 sm:max-w-3xl lg:max-w-7xl lg:p-8">
          <div className={clsx(themes[`${theme}`]['primaryColorDark'], "relative overflow-hidden rounded-2xl px-6 py-10 shadow-xl sm:px-12 sm:py-20")}>
            <div aria-hidden="true" className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
              <svg
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 1463 360"
              >
                <path
                  className={clsx(themes[`${theme}`]['textColor'], "text-opacity-40")}
                  fill="currentColor"
                  d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                />
                <path
                  className={clsx(themes[`${theme}`]['textColor'], "text-opacity-40")}
                  fill="currentColor"
                  d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                />
              </svg>
            </div>
            <div className="relative">
              <div className="sm:text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Let's Solve Problems Together.
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-indigo-200">
                If you're interested in collaborating, I'd love to hear from you!
                </p>
                <p className="mx-auto mt-6 max-w-2xl text-2xl font-bold  text-white">
                  cchilc01@gmail.com
</p>
              </div>
              
            </div>
          </div>
        </div>
    </section>
  );
}

export default Contact;