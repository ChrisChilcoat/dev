import { useContext } from 'react'
import clsx from 'clsx';
import { themes } from '../components/ThemeData';
import { HashLink } from '@xzar90/react-router-hash-link'
import Dash from '../components/dash'
import YakaboxSmallImage from '../images/YakaboxSmall.png';
import CisoboxSmallImage from '../images/CisoboxSmall.png';
import { ThemeContext } from '../App';

const work = [
  {
    title: 'Yakabox',
    href: 'yakabox',
    description:'A secure enterprise productivity solution trusted by the U.S intelligence community.',
    imageUrl:YakaboxSmallImage
  },
  {
    title: 'Cisobox',
    href: 'cisobox',
    description:'Security incident managment & reporting software.',
    imageUrl:CisoboxSmallImage
  },
]

function Work() {
  const theme = useContext(ThemeContext)
  return (
    <section className={clsx(themes[`${theme}`]['background'], "relative px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28")}>
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white dark:bg-slate-700 sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">A Peek at Some of My Past Projects</h2>
          <Dash />
          <p className="mx-auto max-w-2xl text-xl text-gray-500 dark:text-gray-400">
            Case Studies and Examples of Products I've Helped Create.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-2xl lg:grid-cols-2">
          {work.map((item) => (
            <div key={item.title} className="border dark:border-black flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0 border-b dark:border-black">
                <img className="h-full w-full object-cover" src={item.imageUrl} alt="" />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white dark:bg-black p-6">
                <div className="flex-1">
                  <a href={item.href} className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900 dark:text-gray-100">{item.title}</p>
                    <p className="mt-3 text-base text-gray-500">{item.description}</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div>
                    <HashLink to={item.href} className={clsx(themes[`${theme}`]['primaryButton'], 'text-white inline w-full items-center justify-center rounded-md border border-transparent px-3 py-2 mr-2 text-base font-medium')}>View More</HashLink> 
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;