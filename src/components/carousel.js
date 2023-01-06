import React from 'react'
import cisobox from '../images/cisobox.png'
import yakabox2 from '../images/yakabox2.png'
import teton from '../images/teton.jpg'
import social from '../images/social.jpeg'


const images = [
  { imageDesc: 'Dries Vincent', imageUrl: cisobox},
  { imageDesc: 'Dries Vincent', imageUrl: yakabox2},
  { imageDesc: 'Dries Vincent', imageUrl: cisobox},
  { imageDesc: 'Dries Vincent', imageUrl: yakabox2}
]

function Carousel() {
  const [showLeftBtn, setShowLeftBtn] = React.useState(false);
  const [showRightBtn, setShowRightBtn] = React.useState(true);
 // const pager = React.createRef();

  const scrollRight = () => {
    const a = pager.current.clientWidth
    const b = pager.current.scrollLeft
    const mod = b % a
    const left = mod ? (b + a - mod) : (b + a) 
    pager.current.scroll({
      left: left,
      behavior: 'smooth'
    })
  }

  const scrollLeft = () => {
    const a = pager.current.clientWidth
    const b = pager.current.scrollLeft
    const mod = b % a
    const left = mod ? ((b - a) + (a - mod)) : (b - a) 
    pager.current.scroll({
      left: left,
      behavior: 'smooth'
    })
  }
  
  const setButtonState = () => {
    const currentScrollLeft = pager.current.scrollLeft;
    const totalWidth = pager.current.scrollWidth - pager.current.clientWidth;

    currentScrollLeft > 0 ? setShowLeftBtn(true) : setShowLeftBtn(false);
    totalWidth === currentScrollLeft ? setShowRightBtn(false) : setShowRightBtn(true);
  }

  const LeftBtn = () => (
    <button 
      className="absolute inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full shadow left-5 top-2 hover:bg-gray-50"
      onClick={() => scrollLeft()}
      >
      <span class="sr-only">Previous</span>
      <svg class="h-8 w-8" x-description="Heroicon name: solid/chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path>
      </svg>
    </button>
  )
  
  const RightBtn = () => (
    <button
      className="absolute items-center hidden px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full shadow sm:inline-flex right-5 top-2 hover:bg-gray-50"
      onClick={() => scrollRight()}
      >
      <span class="sr-only">Next</span>
        <svg class="h-8 w-8" x-description="Heroicon name: solid/chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
      </svg>
    </button>
  )

  const createScrollStopListener = (element, callback, timeout) => {
    let removed = false;
    let handle = null;
    const onScroll = () => {
      if (handle) {
        clearTimeout(handle);
      }
      handle = setTimeout(callback, timeout || 200); // default 200 ms
    };
    element.addEventListener('scroll', onScroll);
    return () => {
      if (removed) {
        return;
      }
      removed = true;
      if (handle) {
        clearTimeout(handle);
      }
    	element.removeEventListener('scroll', onScroll);
    };
  }

  const useScrollStopListener = (callback, timeout) => {
    const pager = React.useRef();
    const callbackRef = React.useRef();
    callbackRef.current = callback;
    React.useEffect(() => {
      const destroyListener = createScrollStopListener(pager.current, () => {
        if (callbackRef.current) {
          callbackRef.current();
        }
      });
      return () => destroyListener();
    }, [pager.current]);
    return pager;
  }

  const pager = useScrollStopListener(() => {

    const a = pager.current.clientWidth
    const b = pager.current.scrollLeft
    const c = pager.current.clientWidth / 2
    const mod = b % a

    console.log('clientWidth: ' + a)
    console.log('scrollLeft: ' + b)
    console.log('mod: ' + mod)
    console.log('onscrollstop');

    if (mod != 0 && mod <= c) {
      console.log('not zero')
      scrollRight()
    }

    if (mod != 0 && mod >= c)  {
      console.log('zero')
      scrollLeft()
    }

    console.log('--------')

    setButtonState()

  });

  const handleResize = () => {
    pager.current.scroll({
      left: 0,
      behavior: 'smooth'
    });
    setButtonState()
  }

  window.addEventListener('resize', handleResize)

  return (
    <div>
      <section aria-label="Images of the Yakabox"  class="relative bg-white border border-gray-150 rounded-lg max-w-2xl mx-auto shadow-sm mb-5 mt-5">
        <h3 class="sr-only">Images Carousel</h3>  
        <div ref={pager} class="w-full overflow-x-auto scrollbar-hide">
          <div class="whitespace-nowrap">
            {images.map((item) => (
              <span class="inline-flex">
                <img
                  className="w-full h-full bg-red-300  hover:opacity-90 "
                  src={item.imageUrl}                    
                  alt={item.imageDesc}
                />
                <span className="sr-only">{item.imageDesc}</span>
              </span>
            ))}
          </div>
          {showLeftBtn ? <LeftBtn/> : null}
          {showRightBtn ? <RightBtn/> : null}
        </div>
      </section>
    </div>
  )
}

export default Carousel;