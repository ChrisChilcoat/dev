import { MoonIcon, SunIcon } from '@heroicons/react/20/solid'
import { themes } from './ThemeData'
import clsx from 'clsx'

export default function DarkThemeToggle(props) {

  const menu = {
    button: clsx(themes[`${props.theme}`]['backgroundDark'], "flex w-full items-center justify-center shadow-lg rounded-full text-base font-medium md:text-lg"),
    items: '',
    item: '',
    itemButton: ''
  }

  const handleButtonClick = (e) => {  
    props.setDarkMode(!props.darkMode);
  }

  return (
    <div className="fixed top-[70px] right-5 z-40">
        <button 
          className={`${menu.button}`}
          onClick={handleButtonClick}
        >
          {(props.darkMode) ?
            <MoonIcon className={clsx(themes[`${props.theme}`]['primaryButton'], "text-white w-7 h-7 m-2 p-1 rounded-full")} aria-hidden="true" />
          :
            <SunIcon className={clsx(themes[`${props.theme}`]['primaryButton'], "text-white w-7 h-7 m-2 p-1 rounded-full")} aria-hidden="true" />
          }
        </button>  
    </div>
  )
}