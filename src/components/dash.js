import { themes } from '../components/ThemeData';
import clsx from 'clsx';
import { useContext } from 'react';
import { ThemeContext } from '../App';


function Dash() {
  const theme = useContext(ThemeContext)
  return (
    <span className={clsx(themes[`${theme}`]['primaryGradient'], "inline-flex m-auto w-12 h-1 bg-gradient-to-r rounded mt-5 mb-2")}></span>
  )
}

export default Dash;