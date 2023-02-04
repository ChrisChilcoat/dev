import { useContext } from "react";
import clsx from "clsx";
import { themes } from "../components/ThemeData";
import { EnvelopeIcon } from "@heroicons/react/20/solid";
import { ThemeContext } from "../App";

function Contact() {
  const theme = useContext(ThemeContext)
  return (
    <section className={clsx(themes[`${theme}`]['background'])}>
      <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-7xl lg:px-8">
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
                <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-200">
                If you're interested in collaborating, I'd love to hear from you!
                </p>
                <div class="mt-12 sm:mx-auto sm:flex justify-center">
                  <div class="mt-4 sm:mt-0 sm:ml-3">
                    <a href="mailto:cchilc01@gmail.com"className={clsx(themes[`${theme}`]['secondaryButton'], "flex w-full items-center justify-center rounded-md border border-transparent px-7 py-2 text-base font-medium md:py-2 md:px-8 md:text-lg")}>
                      <EnvelopeIcon className="h-6 w-6 mr-2" aria-hidden="true" /> Let's Talk
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
    </section>
  );
}

export default Contact;