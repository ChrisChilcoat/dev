import { useContext } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/20/solid'
import { themes } from './ThemeData'
import clsx from 'clsx'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { ThemeContext } from '../App';

export default function DarkThemeToggle(props) {

  const theme = useContext(ThemeContext)

  const menu = {
    button: clsx(themes[`${theme}`]['backgroundDark'], "flex w-full items-center justify-center shadow-lg rounded-full text-base font-medium md:text-lg"),
    items: '',
    item: '',
    itemButton: ''
  }

  const handleButtonClick = (e) => {  
    props.setDarkMode(!props.darkMode);
  }

  return (
    <div className="fixed top-[70px] right-5 z-40">
      <Tippy content={(props.darkMode) ? 'Light' : 'Dark'} delay={[500, 0]}  placement='left'>
        <button 
          className={`${menu.button}`}
          onClick={handleButtonClick}
        >
          {(props.darkMode) ?
            <SunIcon className={clsx(themes[`${theme}`]['primaryButton'], "text-white w-7 h-7 m-2 p-1 rounded-full")} aria-hidden="true" />
          :
            <MoonIcon className={clsx(themes[`${theme}`]['primaryButton'], "text-white w-7 h-7 m-2 p-1 rounded-full")} aria-hidden="true" />
          }
        </button> 
      </Tippy>
    </div>
  )
}