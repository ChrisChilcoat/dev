import { useState, useEffect, Children } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/20/solid';

HtmlCarousel.propTypes = {
  slides: PropTypes.array.isRequired,
  aspectRatio: PropTypes.string,
  btnSize: PropTypes.string,
  startPos: PropTypes.number
};

HtmlCarousel.defaultProps = {
  slides: [],
  aspectRatio: 'none',
  btnSize: 'md',
  startPos: 0
};

export default function HtmlCarousel({ 
  slides, 
  aspectRatio, 
  btnSize, 
  startPos,
  children
}) {
  let length = children.length;
  const [position, setPosition] = useState(startPos),
  arrayChildren = Children.toArray(children),
  className = {
    carousel: {
      base: 'overflow-hidden relative h-96 md:h-56',
      aspectRatio: {
        none: "",
        oneByOne: "aspect-[1/1]",
        fiveByFour: "aspect-[5/4]",
        fourByThree: "aspect-[4/3]",
        threeByTwo: "aspect-[3/2]",
        fiveByThree: "aspect-[5/3]",
        sixteenByNine: "aspect-[16/9]",
        threeByOne: "aspect-[3/1]"  
      }
    }
  },
  NextPos = () => { 
    if (position < length - 1) {
      return position + 1
    } else {
      return 0
    }
  },
  BackPos = () => {  
    if (position === 0) {
      return length - 1
    } else {
      return position - 1
    }
  },
  RenderIndicators = ( ) => {  
    const wrapperClasses = (btnSize === 'xs' ? 'space-x-2' : 'space-x-3') + ' absolute z-30 flex -translate-x-1/2 -bottom-1 md:-bottom-8 left-1/2'
    const buttonClasses = (btnSize === 'xs' ? 'w-2 h-2' : 'w-3 h-3') + ' border bg-white rounded-full shadow'

    return (
      <div class={wrapperClasses}>
        {Children.map(arrayChildren, (item, index) => (
          <button 
            key={index}
            onClick={() => setPosition(index)} 
            type="button" 
            className={(index === position ? '' : 'opacity-50 ') + buttonClasses} 
            aria-current={index === position ? 'true' : 'false'}
            aria-label={'Slide ' + (index + 1)} 
            data-carousel-slide-to={index}>
          </button>
        ))}
      </div>
    )
  },
  RenderSlides = ( ) => { 
    return Children.map(arrayChildren, (item, index) => (
      <div class={
        (position > index ? '-translate-x-full z-10 transition-all' : '') + // Left
        (position === index ? 'translate-x-0 z-20 transition-all' : '') +   // Active
        (position < index ? 'translate-x-full z-10 transition-all' : '') +  // Right
        ' duration-700 ease-in-out absolute inset-0 transform'
      }>
        <div
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        >
          {item}
        </div>
      </div> 
    ))
  },
  RenderButtons = () => {
    return (
      <>
        <div class={(position === 0 ? 'hidden' : 'absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 invisible md:visible')}>
          <Button onClick={() => setPosition(BackPos)} icon={<ChevronLeftIcon/>} iconSize="md" variant="outline_light" size={btnSize} rounded> 
            <span class="sr-only">Previous</span> 
          </Button>      
        </div>
        <div class={(position === length - 1 ? 'hidden' : 'absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 invisible md:visible')}>
          <Button onClick={() => setPosition(NextPos)} icon={<ChevronRightIcon/>} iconSize="md" variant="outline_light" size={btnSize} rounded> 
            <span class="sr-only">Next</span> 
          </Button> 
        </div> 
      </>
    )
  }

  return (
    <div class="w-full m-auto relative">
      <div class={`
        ${className.carousel.base}
        ${className.carousel.aspectRatio[aspectRatio]}
      `}>
        {RenderSlides()}
      </div>
      {RenderIndicators()}
      {RenderButtons()}
    </div>
  )
}