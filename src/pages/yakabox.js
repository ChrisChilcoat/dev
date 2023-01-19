import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, CheckIcon } from "@heroicons/react/24/outline";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { HashLink } from "@xzar90/react-router-hash-link";
import SliderCarousel from "../components/SliderCarousel";
import { themes } from "../components/ThemeData";
import Dash from "../components/dash";
import clsx from "clsx";

import yakabox2 from '../images/yakabox2.png'
import yakabox3 from '../images/yakabox3.png'
import yakabox4 from '../images/yakabox4.png'
import yakabox5 from '../images/yakabox5.png'
import yakabox6 from '../images/yakabox6.png'
import yakabox7 from '../images/yakabox7.png'
import yakabox8 from '../images/yakabox8.png'
import yakabox16 from '../images/yakabox16.png'
import yakabox17 from '../images/yakabox17.png'
import yakabox19 from '../images/yakabox19.png'

const images = [
  { imageDesc: 'Yakabox', imageUrl: yakabox17},
  { imageDesc: 'Yakabox', imageUrl: yakabox19},
  { imageDesc: 'Yakabox', imageUrl: yakabox2},
  { imageDesc: 'Yakabox', imageUrl: yakabox3},
  { imageDesc: 'Yakabox', imageUrl: yakabox4},
  { imageDesc: 'Yakabox', imageUrl: yakabox5},
  { imageDesc: 'Yakabox', imageUrl: yakabox7},
  { imageDesc: 'Yakabox', imageUrl: yakabox8},
]

function Yakabox({theme}) {
  return (
    <>
      <div className="relative overflow-hidden bg-white dark:bg-slate-800 py-16 sm:py-24 md:py-32">
        <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
          <div
            className="relative mx-auto h-full max-w-prose text-lg"
            aria-hidden="true"
          >
            <svg
              className="absolute top-12 left-full translate-x-32 transform"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200 dark:text-black"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
              />
            </svg>
            <svg
              className="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200 dark:text-black"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
            <svg
              className="absolute bottom-12 left-full translate-x-32 transform"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200 dark:text-black"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
              />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8 ">
          <div className="mx-auto max-w-prose text-lg prose prose-zinc prose-invert dark:prose-invert">
            <h1 className={clsx(themes[`${theme}`]['primaryGradient'], "text-5xl mb-3 py-2 font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl bg-clip-text bg-gradient-to-r")}>
            My Contribution to the <br/>Development of the <br/>Yakabox Platform
            </h1>
            <p className="text-lg">
            The Yakabox is a secure enterprise productivity solution trusted by the U.S intelligence 
            community. It offers customizable workflows, automated notifications, configurable dashboards, 
            and compliance and audit trail features, all of which I have had the privilege of working on 
            for the past 10 years.
            </p>
            
            <SliderCarousel slides={images} />

            <h3>Technologies I Worked With</h3>
            <ul role="list" className="grid grid-cols-2 gap-x-4">
              <li>React JS</li>
              <li>Bootstrap CSS</li>
              <li>XHTML</li>
              <li>Adoble XD</li>
            </ul>

            <h3>My Roles in the Development Process</h3>
            <ul role="list" className="grid grid-cols-2 gap-x-4">
              <li>UX Research</li>
              <li>UI Design</li>
              <li>Rapid Prototyping</li>
              <li>Front-end Development</li>
              <li>WCAG 2.0 Compliance</li>
              <li>Product Testing</li>
            </ul>

            <h3>UX Research</h3>
            <p>
              I was responsible for gathering and analyzing data about how users
              interact with the product. This included conducting user
              interviews and surveys, observing user behavior through usability
              testing and focus groups, and analyzing usage data and customer
              feedback. The goal of this research was to understand the needs,
              motivations, and pain points of the users, and to use this
              information to inform the design and development of the product.
              My findings were used to inform the development of new features
              and to identify areas for improvement in the existing product.
            </p>

            <h3>UI Prototyping</h3>
            <p>
              I was responsible for creating wireframes and interactive
              prototypes to help visualize and test the design of the product.
              Prototyping allowed me to explore different design concepts, test
              usability, and gather feedback from users and stakeholders before
              the product was fully developed. I worked closely with the design
              team and product managers to create prototypes that accurately
              represent the final product and meet the needs of the users.
              Building prototypes requires strong skills in design tools such as
              Sketch, Figma, and JavaScript, as well as an understanding of user
              experience design principles.
            </p>

            <h3>Front-end Development & WCAG 2.0 Compliance</h3>
            <p>
              I was responsible for ensuring that the user interface was
              accessible to users with disabilities. This includes following
              guidelines and best practices outlined in the Web Content
              Accessibility Guidelines (WCAG) 2.0, which provides a set of
              standards for making web content more accessible to people with
              disabilities such as visual impairments, hearing impairments, and
              mobility impairments. Building WCAG 2.0 compliant front-ends
              required a thorough understanding of accessibility principles and
              the ability to implement these principles in the design and
              development of the user interface. I worked closely with the
              development team to ensure that the product was fully compliant
              with WCAG 2.0 standards. Building WCAG 2.0 compliant front-ends is
              an important part of creating an inclusive and user-friendly
              product for all users.
            </p>

            <h3>Product Testing</h3>
            <p>
            I was responsible for product testing to ensure everything functions correctly 
            and meets the needs of the users. This included conducting various types of testing, 
            such as unit testing and acceptance testing, to validate the functionality and usability 
            of the product. I worked closely with the development team to identify and troubleshoot 
            issues, and to ensure the product meets quality standards. I also established and maintained 
            testing processes and procedures, which required strong organizational and communication 
            skills. I played a crucial role in the success of the product by ensuring it was reliable 
            and user-friendly.
            </p>

            <h3>Summary</h3>
            <p>Working at a small software company was a valuable and enriching experience. I had the 
              opportunity to work on a variety of projects and wear many hats, which allowed me to learn 
              a wide range of skills and knowledge. I gained a deep understanding of the product development 
              process and learned how to effectively design and build user interfaces using HTML, CSS, and 
              JavaScript. I also learned how to conduct user research and product testing to ensure that the 
              product met the needs of the users and was of the highest quality. Additionally, I developed 
              strong communication and teamwork skills as I worked closely with the development team and other 
              stakeholders. Overall, working at a small software company was a challenging but rewarding experience 
              that helped me grow both personally and professionally.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Yakabox;

