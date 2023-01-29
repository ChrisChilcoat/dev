import { useContext } from 'react'
import { themes } from '../components/ThemeData';
import Dash from '../components/dash';
import tetonImage from '../images/TetonSmall.png';
import socialImage from '../images/SocialMediaSmall.png';
import clsx from 'clsx';
import { ThemeContext } from '../App';


const projects = [
  {
    title: 'Social Media UI',
    description:'A Smorgasbord of Trendy Social Media Widgets and Layouts, Remade with TailwindCSS and ReactJS Magic.',
    imageUrl:socialImage,
    links: [
      { name: 'View Project ', href: 'https://chrischilcoat.github.io/social-media-ui/#/' },
      { name: 'Github Repo', href: 'https://github.com/ChrisChilcoat/social-media-ui' },

    ],
  },
  {
    title: 'Teton Dashboard',
    description:'A Front-End Framework, Built with React and Tailwind CSS and Still Cooking in the Development Oven.',
    imageUrl:tetonImage,
    links: [
      { name: 'View Project', href: 'https://chrischilcoat.github.io/teton/' },
      { name: 'Github Repo', href: 'https://github.com/ChrisChilcoat/teton' },
    ],
  },
]

function Projects() {

  const theme = useContext(ThemeContext)

  return (
    <section className={clsx(themes[`${theme}`]['background'], "relative px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28")}>
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white dark:bg-slate-700 sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">What I've Been Busy With</h2>
          <Dash />
          <p className="mx-auto max-w-2xl text-xl text-gray-500 dark:text-gray-400">
            A Selection of Personal Projects I've Undertaken in My Free Time.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-2xl lg:grid-cols-2">
          {projects.map((item, index, array) => (
            <div key={item.title} className="border dark:border-black flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="border-b dark:border-black flex-shrink-0">
                <img className="h-full w-full object-cover" src={item.imageUrl} alt="" />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white dark:bg-black p-6">
                <div className="flex-1">
                  <span className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900 dark:text-gray-100">{item.title}</p>
                    <p className="mt-3 text-base text-gray-500">{item.description}</p>
                  </span>
                </div>
                <div className="mt-6 flex items-center">
                  <div>
                    {item?.links && item?.links?.map((item, index, array) => {
                      let styles = (
                        index === 0 
                          ? clsx(themes[`${theme}`]['primaryButton'], 'text-white inline w-full items-center justify-center rounded-md border border-transparent px-3 py-2 mr-2 text-base font-medium') 
                          : clsx(themes[`${theme}`]['secondaryButton'], 'text-white inline w-full items-center justify-center rounded-md border border-transparent px-3 py-2 mr-2 text-base font-medium') 
                      );
                      return (
                        <a target="_blank" href={item.href} key={item.href} className={styles}>{item.name}</a>
                      )}
                    )}
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

export default Projects;