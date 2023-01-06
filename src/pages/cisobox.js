import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, CheckIcon } from "@heroicons/react/24/outline";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { HashLink } from "@xzar90/react-router-hash-link";
import SliderCarousel from "../components/SliderCarousel";

import yakabox2 from '../images/yakabox2.png'
import yakabox3 from '../images/yakabox3.png'
import yakabox4 from '../images/yakabox4.png'
import yakabox5 from '../images/yakabox5.png'
import yakabox6 from '../images/yakabox6.png'
import yakabox7 from '../images/yakabox7.png'
import yakabox8 from '../images/yakabox8.png'
import yakabox9 from '../images/yakabox9.png'
import yakabox10 from '../images/yakabox10.png'
import yakabox11 from '../images/yakabox11.png'
import yakabox12 from '../images/yakabox12.png'
import yakabox13 from '../images/yakabox13.png'
import yakabox14 from '../images/yakabox14.png'
import yakabox16 from '../images/yakabox16.png'
import yakabox17 from '../images/yakabox17.png'
import yakabox19 from '../images/yakabox19.png'

const images = [

  { imageDesc: 'Yakabox', imageUrl: yakabox10},
  { imageDesc: 'Yakabox', imageUrl: yakabox9},
  { imageDesc: 'Yakabox', imageUrl: yakabox11},
  { imageDesc: 'Yakabox', imageUrl: yakabox13},
  { imageDesc: 'Yakabox', imageUrl: yakabox12},

]

function Cisobox() {
  return (
    <>
      <div className="relative overflow-hidden bg-white py-16">
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
                    className="text-gray-200"
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
                    className="text-gray-200"
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
                    className="text-gray-200"
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
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-prose text-lg prose">
            <h1 className="mt-2 text-5xl font-bold leading-10 tracking-tight text-gray-900 sm:text-6xl">
            My Startup Experience <br/>Building the Cisobox
            </h1>
            <p className="text-lg text-gray-500">
            The CISOBox is a comprehensive case management platform designed for higher education, 
            enterprise, and government CISOs to effectively manage and investigate cyber incidents. 
            It includes a range of features such as granular access controls, two-factor authentication, 
            encryption, in-app messaging, customizable dashboards and reports, and compliance with 
            NIST 800-61r2 standards. I had the opportunity to work on this project as part of a team 
            of 4 others, where we dedicated our nights and weekends for a period of 3 months to help 
            bootstrap its development."
            </p>
            
            <SliderCarousel slides={images} />

            <h3>Technologies I Worked With</h3>
            <ul role="list" className="grid grid-cols-2 gap-x-4">
              <li>jQuery UI</li>
              <li>Bootstrap CSS</li>
              <li>XHTML</li>
            </ul>

            <h3>My Roles in Development Process</h3>
            <ul role="list" className="grid grid-cols-2 gap-x-4">
              <li>UX Design</li>
              <li>UI Design</li>
              <li>Front-end Development</li>
            </ul>

            <h3>Creating a Fork of the Codebase</h3>
            <p>
            In order to expedite the development process, we elected to utilize a fork 
            of our existing codebase. This approach allowed us to utilize a range of preexisting 
            components, templates, and front-end framework, as well as streamline the UI design 
            process through the implementation of a new jQuery UI Themeroller theme. Additionally, 
            utilizing a fork enabled us to progress rapidly without causing disruptions to client 
            sites or incurring code bloat in our existing codebase.
            </p>

            <h3>How We Chose the Must-Have Features</h3>
            <p>
            Determining the features for the minimum viable product was a challenging task. To prioritize 
            feature sets, we generated sticky notes for each proposed feature and organized them based 
            on implementation difficulty and potential impact. Only the highest impact, quickest to 
            implement features were selected. This decision was challenging as we were tempted to include 
            more features, but we recognized the importance of rapid prototyping and testing in achieving 
            product-market fit and staying within budget constraints.
            </p>

            <h3>Working Diligently to Meet Deadlines and Budget Constraints</h3>
            <p>
            In order to complete the project within budget constraints, we established a schedule of working 
            three evenings per week and half days on Saturday. While this may not seem like a significant time 
            commitment, it was challenging in practice. In addition, we shortened our sprints from three weeks 
            to two, which required us to focus on smaller, more manageable features. Despite these challenges, 
            we were able to successfully deliver the project within the allotted timeframe and budget.            
            </p>

            <h3>Adjusting the Product Strategy to Identify Opportunities</h3>
            <p>
              The product was initially developed as a tool to aid CEOs in communicating high-level goals to their managers. 
              Unfortunately, the product was not successful and was abandoned due to a lack of value perceived by the users. 
              Despite this, one of our pilot clients found the Cisobox to be useful and utilized it regularly, even if it was 
              not utilized in the way we had intended.          
            </p>
            <p>
              One of our clients, a small university with an IT department, found value in our product for its ability to track 
              security incidents in a secure manner. Our classification system, which was originally designed for the US intelligence 
              community, was included in the product and was being utilized by the client. Upon further discussion with them, we 
              discovered that they also had government reporting requirements that we could address in the second iteration of the software.<p/>
            </p>

            <p>
              Upon identifying a specialized market in the college IT space, we developed features tailored 
              to their needs and rebranded the product. We then concentrated on onboarding as many universities 
              as possible. Within three months, we had gained four more clients and the product continued to 
              increase in popularity.
            </p>

            <h3>Summery</h3>
            <p>
            Working on the Cisobox startup project was a valuable learning experience. I had the 
            chance to work in a fast-paced, agile startup environment and develop a product that 
            solved real problems faced by IT professionals. I gained experience working in agile 
            sprints and learned the value of being able to pivot quickly in order to find product-market 
            fit. I also learned the importance of designing and producing a minimal viable product for 
            testing and understanding the needs of the market. Overall, my work on the Cisobox taught 
            me the value of letting go of perfection and committing to the fast-paced learning process 
            that is agile software development.
            </p>

            </div>  
          </div>
        </div>
      
    </>
  );
}

export default Cisobox;

