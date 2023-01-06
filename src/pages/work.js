import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, CheckIcon } from '@heroicons/react/24/outline'
import { Link } from "react-router-dom"
import { HashLink } from '@xzar90/react-router-hash-link'

const work = [
  {
    title: 'Yakabox',
    href: 'yakabox',
    description:
      'A secure enterprise productivity solution trusted by the U.S intelligence community.',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
  },
  {
    title: 'Cisobox',
    href: 'cisobox',
    description:
      'Secirity incident managment & reporting software.',
    imageUrl:
      'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
  },
]

function Work() {
  return (
    <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A Peek at Some of My Past Projects</h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Case Studies and Examples of Products I've Helped Create.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-2xl lg:grid-cols-2">
          {work.map((item) => (
            <div key={item.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={item.imageUrl} alt="" />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <a href={item.href} className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">{item.title}</p>
                    <p className="mt-3 text-base text-gray-500">{item.description}</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div>
                    <HashLink to={item.href} className="flex w-full items-center justify-center rounded-md border border-transparent bg-gray-100 px-5 py-1 text-base font-medium text-gray-700 hover:bg-gray-200 md:py-1 md:px-6 md:text-md">View More</HashLink> 
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;