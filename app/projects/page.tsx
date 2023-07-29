import Image from 'next/image'
import testImage from '../../public/test.jpg'
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
    url: 'https://github.com/simicity/good-ol-chat-room'
  },
  {
    title: 'Bookmark Manager',
    description: 'React app to manage bookmarks.',
    image: bookmarkManagerImage,
    tags: ['JavaScript', 'React'],
    url: 'https://github.com/simicity/bookmark-manager'
  },
  {
    title: 'AI-Powered Journal',
    description: 'AI provides you with journal prompts.',
    image: journalImage,
    tags: ['TypeScript', 'Next.js'],
    url: 'https://github.com/simicity/co-journal'
  },
  {
    title: 'Online Health Information Assessment Tool',
    description: 'A tool that assesses information quality on Student Health Center websites.',
    image: healthInformationImage,
    tags: ['Python'],
    url: 'https://github.com/aksfsu/QMOHI_tool'
  },
]

export default function Projects() {
  return (
    <main>
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left">
        <div className='m-2 px-3 w-full col-span-full'>
          <h2 className='font-extrabold text-2xl'>Projects</h2>
        </div>
        {projects.map(({title, description, image, tags, url}) => (
          <a target="_blank" href={url} key={title} className="project-item rounded-lg m-2 px-3 py-2 text-slate-700 dark:text-slate-200 font-medium border border-transparent hover:border-solid hover:border-slate-200 dark:hover:border-slate-400">
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
            <h2 className={`mb-1 max-w-[400px] text-xl font-semibold`}>
              {title}
            </h2>
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