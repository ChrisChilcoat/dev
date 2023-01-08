import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { DocumentIcon } from '@heroicons/react/24/solid'
import { HashLink } from '@xzar90/react-router-hash-link';

const scrollToBottom = () => {
  window.scroll({
    top: document.body.offsetHeight,
    left: 0, 
    behavior: 'smooth',
  });
}

function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
    <div className="mx-auto max-w-7xl bg-cyan-500">
      <div className="relative z-10 bg-gradient-to-r from-cyan-500 to-blue-500 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
        <svg
          className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-blue-500 lg:block"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
        <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
          <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
            <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
              <div className="flex w-full items-center justify-between md:w-auto text-3xl">
                <HashLink to='/'>
                  <span class="font-semibold text-white opacity-90 drop-shadow-md">Chris Chilcoat</span>
                </HashLink>
              </div>
            </div>
          </nav>
        </div>
        <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="sm:text-center lg:text-left">
            <h1 className="font-bold tracking-tight text-white drop-shadow-md">
              <span className="text-3xl sm:text-4xl bold md:text-5xl block xl:inline mt-3 sm:mt-5 md:mt-5">UI Designer & <br/>Front-end Developer</span>
            </h1>
            <span class="inline-flex m-auto w-12 h-1 bg-gradient-to-r rounded mt-5 from-blue-500 to-blue-600"></span>
            <p className=" text-base text-white opacity-80 drop-shadow-md sm:mx-auto  mt-3 sm:mt-3 sm:max-w-xl sm:text-lg md:mt-3 md:text-xl lg:mx-0">
            Greetings, I'm Chris, and I specialize in crafting <br/>front-ends for large enterprise web applications.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a target="_blank" href="https://drive.google.com/file/d/18HFQtope2psoP_OOmtgXrAPtaA_UsIsK/view" className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-7 py-2 text-base font-medium text-white hover:bg-blue-700 md:py-2 md:px-8 md:text-lg">
                  <DocumentIcon className="h-4 w-4 mr-2" aria-hidden="true" /> 
                  Resume
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
              <button onClick={() => scrollToBottom()} className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-100 px-7 py-2 text-base font-medium text-blue-700 hover:bg-blue-200 md:py-2 md:px-8 md:text-lg">Let's Talk!</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
        src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
        alt=""
      />
    </div>
  </div>
  );
}

export default Hero;