import { useContext } from 'react';
import { CheckIcon } from '@heroicons/react/24/outline'
import { themes } from '../components/ThemeData';
import Dash from '../components/dash';
import clsx from 'clsx';
import { ThemeContext } from '../App';

const areas = [
  {
    name: 'Markup',
    description:
      'I am skilled in creating HTML code that is compliant with WCAG 2.0 accessibility standards',
  },
  {
    name: 'CSS',
    description: "I am proficient in working with modern CSS frameworks such as Bootstrap, Foundations, and Tailwind CSS.",
  },
  {
    name: 'JavaScript',
    description:
      'I am experienced in working with modern JavaScript libraries such as React, Vue and Jquery.',
  },
  {
    name: 'Prototyping',
    description:
      'I am skilled in creating prototypes using Figma or by hand coding them to give developers a head start on implementation.',
  },
  {
    name: 'Research',
    description: 'I am proficient in conducting UX research using methods such as user interviews and usability testing.',
  },
  {
    name: 'Design',
    description: 'I am experienced in designing user interfaces that are visually appealing, intuitive, and easy to use.',
  },
  {
    name: 'Information Architecture',
    description:
      "I am skilled in creating information architectures that are logical, intuitive, and easy to navigate.",
  },
  {
    name: 'Agile',
    description:
      "I am proficient in working using the agile development process, with a focus on rapid prototyping and iteration.",
  },
]

function Expertise() {

  const theme = useContext(ThemeContext)

  return (
    <div className="bg-white dark:bg-slate-700">
      <div className="mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">My Areas of Specialization </h2> 
          <Dash />
          <p className="mx-auto max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-400">
            As a multi-disciplinary UI designer and front-end developer, <br/>I have a broad range of skills and expertise.          </p>
        </div>
        <dl className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
          {areas.map((item) => (
            <div key={item.name} className="relative">
              <dt>
                <CheckIcon className={clsx(themes[`${theme}`]['textColor'], "absolute mt-1 h-6 w-6 rounded-full")} aria-hidden="true" />
                <p className="ml-10 text-lg font-semibold leading-8 text-gray-900 dark:text-gray-100">{item.name}</p>
              </dt>
              <dd className="mt-2 ml-10 text-base leading-7 text-gray-600 dark:text-gray-400">{item.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export default Expertise;