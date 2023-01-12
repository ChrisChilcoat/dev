import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'
import { themes } from './ThemeData'
import clsx from 'clsx'

export default function ThemePicker(props) {

  const menu = {
    button: clsx(themes[`${props.theme}`]['backgroundDark'], "flex w-full items-center justify-center shadow-lg text-base font-medium md:text-lg"),
    items: '',
    item: '',
    itemButton: ''
  }

  const handleButtonClick = (e) => {  
    props.setTheme(e.target.dataset.color);
  }

  const handleUpdateTheme = (e) => {
    e.preventDefault();
    e.stopPropagation();  
    props.setTheme(e.target.dataset.color);
  }

  return (
    <div className="fixed top-5 right-5 z-40">
      <Menu>
      {({ open, active }) => (
        <>
        <Menu.Button className={`${open ? 'rounded-r-full' : 'rounded-full'} + ${menu.button}`}>
          <CheckIcon className={clsx(themes[`${props.theme}`]['primaryButton'], "text-white w-7 h-7 m-2 p-1 rounded-full")} aria-hidden="true" />
        </Menu.Button>
        <Menu.Items className={clsx(themes[`${props.theme}`]['backgroundDark'], "fixed flex flex-row top-5 right-16 rounded-l-full shadow-xl")}>
          <Menu.Item>
              <button 
                className={`${active && 'bg-blue-500'} bg-red-600 hover:bg-red-700 rounded-full w-7 h-7 m-2`} 
                data-color={'red'}
                onMouseEnter={handleUpdateTheme}
                onClick={handleButtonClick}
              >
                <span className="sr-only">red</span>
              </button>
          </Menu.Item>
          <Menu.Item>
            <button 
              className={`${active && 'bg-blue-500'} bg-green-600 hover:bg-green-700 rounded-full w-7 h-7 m-2`} 
              data-color={'green'}
              onMouseEnter={handleUpdateTheme}
              onClick={handleButtonClick}
            >
              <span className="sr-only">green</span>
            </button>
          </Menu.Item>
          <Menu.Item>
              <button 
                className={`${active && 'bg-blue-500'} bg-blue-600 hover:bg-blue-700 focus:ring-2 rounded-full w-7 h- m-2`} 
                data-color={'blue'}
                onMouseEnter={handleUpdateTheme}
                onClick={handleButtonClick}
              >
              <span className="sr-only">blue</span>
            </button>
          </Menu.Item>
          <Menu.Item>
              <button 
                className={`${active && 'bg-purple-500'} bg-purple-600 hover:bg-purple-700 rounded-full w-7 h-7 m-2`} 
                data-color={'purple'}
                onMouseEnter={handleUpdateTheme}
                onClick={handleButtonClick}
              >
              <span className="sr-only">purple</span>
            </button>
          </Menu.Item>
          <Menu.Item>
              <button 
                className={`${active && 'bg-blue-500'} bg-pink-600 hover:bg-pink-700 rounded-full w-7 h-7 m-2`} 
                data-color={'pink'}
                onMouseEnter={handleUpdateTheme}
                onClick={handleButtonClick}
              >
              <span className="sr-only">pink</span>
            </button>
          </Menu.Item>
          <Menu.Item>
              <button 
                className={`${active && 'bg-blue-500'} bg-yellow-600 hover:bg-yellow-700 rounded-full w-7 h-7 m-2`} 
                data-color={'yellow'}
                onMouseEnter={handleUpdateTheme}
                onClick={handleButtonClick}
              >
              <span className="sr-only">yellow</span>
            </button>
          </Menu.Item>
        </Menu.Items>
         </>
         )}
      </Menu>
    </div>
  )
}