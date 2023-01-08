import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const scrollToBottom = () => {
  window.scroll({
    top: document.body.offsetHeight,
    left: 0, 
    behavior: 'smooth',
  });
}

function Navigation() {
  return (
  <div className="relative overflow-hidden bg-white">
    <div className="mx-auto max-w-7xl">
      <div className="relative z-10 bg-gradient-to-r from-cyan-500 to-blue-500 pb-7 mb-8 sm:mb-16 md:mb-20 lg:w-full lg:max-w-2xl lg:mb-28 xl:mb-32">
        <svg
          className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
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
                  <a href="/">
                    <span class="font-semibold text-white opacity-90 drop-shadow-md">Chris Chilcoat</span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
      </div>
    </div>
    <div class="flex justify-center lg:justify-start absolute right-6 top-6 z-20">
      <div class="rounded-md shadow hidden sm:flex">
        <a  target="_blank" href="https://drive.google.com/file/d/18HFQtope2psoP_OOmtgXrAPtaA_UsIsK/view" class="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-100 px-7 py-2 text-base font-medium text-blue-700 hover:bg-blue-200 md:py-2 md:px-8 md:text-lg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" class="h-4 w-4 mr-2"><path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625z"></path><path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z"></path></svg>Resume</a>
      </div>
      <div class="mt-0 sm:ml-3">
        <button onClick={() => scrollToBottom()} class="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-7 py-2 text-base font-medium text-white hover:bg-blue-700 md:py-2 md:px-8 md:text-lg">Let's Talk!</button>
      </div>
    </div>
  </div>
  );
}

export default Navigation;