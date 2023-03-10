import { useContext } from 'react';
import WillImage from '../images/will.jpg';
import AdamImage from '../images/adam.jpg';

import Dash from '../components/dash';
import { themes } from '../components/ThemeData';
import clsx from 'clsx';
import { ThemeContext } from '../App';
import HtmlCarousel from '../components/HtmlCarousel';

export default function Testimonial() {
  
  const theme = useContext(ThemeContext);

  return (
    <section className={clsx(themes[`${theme}`]['background'], "py-12 md:py-20 lg:py-24")}>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <svg
          className="absolute top-full right-full translate-x-1/3 -translate-y-1/4 transform lg:translate-x-1/2 xl:-translate-y-1/2"
          width={404}
          height={404}
          fill="none"
          viewBox="0 0 404 404"
          role="img"
          aria-labelledby="svg-workcation"
        >
          <title id="svg-workcation">Workcation</title>
          <defs>
            <pattern
              id="ad119f34-7694-4c31-947f-5c9d249b21f3"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-gray-200 dark:text-gray-900" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={404} fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)" />
        </svg>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">Insights from Colleagues</h2>
            <Dash />
            <p className="mx-auto max-w-2xl text-xl text-gray-500">
              See What folks are Saying About Me!
            </p>
          </div>
          <HtmlCarousel>
            <div>
              <blockquote className="mt-5">
                <div className="mx-auto max-w-3xl text-center text-2xl font-medium leading-9 text-gray-900 dark:text-gray-100">
                  <p>
                    &ldquo;Chris and I have collaborated for over a decade in various capacities. He consistently brings fresh ideas for UI/UX and stays current on industry trends. I highly recommend him for enhancing UI/UX efforts.&rdquo;
                  </p>
                </div>
                <footer className="mt-8">
                  <div className="md:flex md:items-center md:justify-center">
                    <div className="md:flex-shrink-0">
                      <img
                        className="mx-auto h-10 w-10 rounded-full"
                        src={WillImage}
                        alt="Will Bondie"
                      />
                    </div>
                    <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                      <div className="text-base font-medium text-gray-900 dark:text-gray-100">Will Bondie</div>
                      <svg className={clsx(themes[`${theme}`]['textColor'], "mx-1 hidden h-5 w-5 md:block")} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M11 0h3L9 20H6l5-20z" />
                      </svg>
                      <div className="text-base font-medium text-gray-500">Director of Integration, Yakabod</div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
            <div>
              <blockquote className="mt-5">
                <div className="mx-auto max-w-3xl text-center text-2xl font-medium leading-9 text-gray-900 dark:text-gray-100">
                  <p>
                    &ldquo;Chris is one of my favorite people to work with. Always full of good ideas and enthusiasm. He has that rare combination of artistic, conceptual, and technical ability which makes him perfect for UX/UI related projects.&rdquo;
                  </p>
                </div>
                <footer className="mt-8">
                  <div className="md:flex md:items-center md:justify-center">
                    <div className="md:flex-shrink-0">
                      <img
                        className="mx-auto h-10 w-10 rounded-full"
                        src={AdamImage}
                        alt="Adam Leviton"
                      />
                    </div>
                    <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                      <div className="text-base font-medium text-gray-900 dark:text-gray-100">Adam Leviton</div>
                      <svg className={clsx(themes[`${theme}`]['textColor'], "mx-1 hidden h-5 w-5 md:block")} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M11 0h3L9 20H6l5-20z" />
                      </svg>
                      <div className="text-base font-medium text-gray-500">Creative Director, Wormald Homes</div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </HtmlCarousel>
        </div>
      </div>
    </section>
  )
}
