import Image from 'next/image'
import chatImage from '../../public/chat.png'
import bookmarkManagerImage from '../../public/bookmark_manager.png'
import journalImage from '../../public/journal.png'
import healthInformationImage from '../../public/health_information.png'

const tagTextColor = {
  'JavaScript': 'text-yellow-300',
  'TypeScript': 'text-blue-400',
  'React': 'text-cyan-300',
  'Node.js': 'text-green-600',
  'Next.js': 'text-zinc-300',
  'Python': 'text-purple-400'
}

const projects = [
  {
    title: 'Chat Rooms',
    description: 'Full-stack chat app using Socket.io for real-time communications.',
    image: chatImage,
    tags: ['TypeScript', 'Node.js', 'React'],
    repo: 'https://github.com/simicity/good-ol-chat-room',
    url: ''
  },
  {
    title: 'Bookmark Manager',
    description: 'React app to manage bookmarks.',
    image: bookmarkManagerImage,
    tags: ['JavaScript', 'React'],
    repo: 'https://github.com/simicity/bookmark-manager',
    url: 'https://simicity.github.io/bookmark-manager'
  },
  {
    title: 'AI-Powered Journal',
    description: 'AI provides you with journal prompts.',
    image: journalImage,
    tags: ['TypeScript', 'Next.js'],
    repo: 'https://github.com/simicity/co-journal',
    url: ''
  },
  {
    title: 'Online Health Information Assessment Tool',
    description: 'A tool that assesses information quality on Student Health Center websites.',
    image: healthInformationImage,
    tags: ['Python'],
    repo: 'https://github.com/aksfsu/QMOHI_tool',
    url: ''
  },
]

export default function Projects() {
  return (
    <main>
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left">
        <div className='m-2 px-3 w-full col-span-full'>
          <h2 className='font-extrabold text-2xl'>Projects</h2>
        </div>
        {projects.map(({title, description, image, tags, repo, url}) => (
          <a target="_blank" href={url ? url : repo} key={title} className="project-item rounded-lg m-2 px-3 py-2 text-slate-700 dark:text-slate-200 font-medium border border-transparent hover:border-solid hover:border-slate-200 dark:hover:border-slate-400">
            <div className='mb-3 selection:w-[400px] h-[300px] overflow-hidden rounded-lg'>
              <Image
                src={image}
                alt={title}
                style={{
                  width: '400px',
                  height: '300px',
                  objectFit: 'cover',
                }}
              />
            </div>
            <div className='flex justify-center lg:justify-between max-w-[400px] mb-1'>
              <h2 className={`text-xl font-semibold my-auto`}>
                {title}
              </h2>
              <div className='mx-4'>
                <ul className='flex justify-center lg:justify-start m-1'>
                  <li>
                    <a target="_blank" href={repo}>
                      <button className='rounded-full p-2 shadow-sm bg-slate-300 hover:bg-slate-200 dark:bg-slate-600 dark:hover:bg-slate-700'>
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          height="20px"
                          width="20px"
                        >
                          <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                        </svg>
                      </button>
                    </a>
                  </li>
                  {url && (
                    <li className='ml-2'>
                      <a target="_blank" href={url}>
                        <button className='rounded-full p-2 shadow-sm bg-slate-300 hover:bg-slate-200 dark:bg-slate-600 dark:hover:bg-slate-700'>
                          <svg fill="none" viewBox="0 0 24 24" height="20px" width="20px">
                            <path
                              fill="currentColor"
                              fillRule="evenodd"
                              d="M14 7a1 1 0 00-1 1v8a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1h-4zm3 2h-2v6h2V9z"
                              clipRule="evenodd"
                            />
                            <path
                              fill="currentColor"
                              d="M6 7a1 1 0 000 2h4a1 1 0 100-2H6zM6 11a1 1 0 100 2h4a1 1 0 100-2H6zM5 16a1 1 0 011-1h4a1 1 0 110 2H6a1 1 0 01-1-1z"
                            />
                            <path
                              fill="currentColor"
                              fillRule="evenodd"
                              d="M4 3a3 3 0 00-3 3v12a3 3 0 003 3h16a3 3 0 003-3V6a3 3 0 00-3-3H4zm16 2H4a1 1 0 00-1 1v12a1 1 0 001 1h16a1 1 0 001-1V6a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </a>
                    </li>
                  )}
                  
                </ul>
              </div>
            </div>
            <p className={`mb-3 max-w-[400px] text-sm opacity-50`}>
              {description}
            </p>
            <div className='flex justify-center lg:justify-start'>
              {tags?.map(tag => (
                <p key={title + " " + tag} className={`text-xs rounded-md bg-slate-900 dark:bg-sky-900 ${(tagTextColor as any)[tag]} mr-1.5 mb-1 px-2.5 py-0.5`}>{tag}</p>
              ))}
            </div>
          </a>
        ))}
      </div>
    </main>
  )
}