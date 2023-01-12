import React from 'react';
import { themes } from '../components/ThemeData';
import clsx from 'clsx';

function Dash({theme}) {
  console.log("dash.js: "+ theme);
  return (
    <span class={clsx(themes[`${theme}`]['primaryGradient'], "inline-flex m-auto w-12 h-1 bg-gradient-to-r rounded mt-5 mb-2")}></span>
  )
}

export default Dash;