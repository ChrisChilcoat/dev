import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { PaintBrushIcon } from '@heroicons/react/20/solid'
import { themes } from './ThemeData'
import clsx from 'clsx'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

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
    this.blur();
    props.setTheme(e.target.dataset.color);
  }

  return (
    <div className="fixed top-5 right-5 z-40">
      <Menu>
      {({ open, active }) => (
        <>
        <Tippy content="Theme" delay={[500, 0]} placement='left'>
          <Menu.Button className={`${open ? 'rounded-r-full' : 'rounded-full'} ${menu.button}`}>
            <PaintBrushIcon className={clsx(themes[`${props.theme}`]['primaryButton'], "text-white w-7 h-7 m-2 p-1 rounded-full")} aria-hidden="true" />
          </Menu.Button>
        </Tippy>
        <Menu.Items className={clsx(themes[`${props.theme}`]['backgroundDark'], "fixed flex flex-row top-5 right-16 rounded-l-full shadow-xl")}>
          <Menu.Item>
              <button 
                className={clsx(themes['red']['primaryButton'], "rounded-full w-7 h-7 m-2")} 
                data-color={'red'}
                onMouseEnter={handleUpdateTheme}
                onClick={handleButtonClick}
              >
                <span className="sr-only">red</span>
              </button>
          </Menu.Item>
          <Menu.Item>
            <button 
                className={clsx(themes['green']['primaryButton'], "rounded-full w-7 h-7 m-2")} 
                data-color={'green'}
              onMouseEnter={handleUpdateTheme}
              onClick={handleButtonClick}
            >
              <span className="sr-only">green</span>
            </button>
          </Menu.Item>
          <Menu.Item>
              <button 
                className={clsx(themes['blue']['primaryButton'], "rounded-full w-7 h-7 m-2")} 
                data-color={'blue'}
                onMouseEnter={handleUpdateTheme}
                onClick={handleButtonClick}
              >
              <span className="sr-only">blue</span>
            </button>
          </Menu.Item>
          <Menu.Item>
              <button 
                className={clsx(themes['purple']['primaryButton'], "rounded-full w-7 h-7 m-2")} 
                data-color={'purple'}
                onMouseEnter={handleUpdateTheme}
                onClick={handleButtonClick}
              >
              <span className="sr-only">purple</span>
            </button>
          </Menu.Item>
          <Menu.Item>
              <button 
                className={clsx(themes['pink']['primaryButton'], "rounded-full w-7 h-7 m-2")} 
                data-color={'pink'}
                onMouseEnter={handleUpdateTheme}
                onClick={handleButtonClick}
              >
              <span className="sr-only">pink</span>
            </button>
          </Menu.Item>
          <Menu.Item>
              <button 
                className={clsx(themes['yellow']['primaryButton'], "rounded-full w-7 h-7 m-2")} 
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