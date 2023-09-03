"use client"

import '../globals.css'
import Image from 'next/image'
import chatImage from '../../public/chat.png'
import bookmarkManagerImage from '../../public/bookmark_manager.png'
import journalImage from '../../public/journal.png'
import healthInformationImage from '../../public/health_information.png'
import dataVisualizationImage from '../../public/data_visualization.png'
// Attribute: http://www.freepik.com">Designed by rawpixel.com / Freepik
import forumImage from '../../public/forum.jpg'
import { CodeIcon } from '../icons/CodeIcon'
import { LinkIcon } from '../icons/LinkIcon'

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
    url: 'https://co-journal.vercel.app'
  },
  {
    title: 'Online Health Information Assessment Tool',
    description: 'A tool that assesses information quality on Student Health Center websites.',
    image: healthInformationImage,
    tags: ['Python'],
    repo: 'https://github.com/aksfsu/QMOHI_tool',
    url: ''
  },
  {
    title: 'Spotify Data Visualization',
    description: 'Data visualization for a Spotify dataset.',
    image: dataVisualizationImage,
    tags: ['JavaScript'],
    repo: 'https://github.com/Miho-and-Alex/CSC805-Data-Visualization-Project',
    url: 'https://miho-and-alex.github.io/CSC805-Data-Visualization-Project/'
  },
  {
    title: 'Forum Website',
    description: 'Forum website that allows users to form study groups by posting and commenting.',
    image: forumImage,
    tags: ['Python'],
    repo: 'https://github.com/simicity/csc648-848-sw-engineering-T04',
    url: ''
  },
]

export default function Projects() {
  return (
    <main className='mt-80'>
      <div className="grid text-center gap-10 lg:grid-cols-2 lg:text-left">
        <div className='lg:mx-14 w-full col-span-full'>
          <h1 className='font-black text-6xl'>Projects</h1>
        </div>
        {projects.map(({title, description, image, tags, repo, url}) => (
          <a target="_blank" href={url ? url : repo} key={title} className="project-item rounded-lg p-5 text-slate-700 dark:text-slate-200 font-medium border border-transparent hover:border-solid hover:border-slate-200 dark:hover:border-slate-400">
            <div className='mb-3 selection:w-[400px] h-[300px] overflow-hidden rounded-lg'>
              <Image src={image} alt={title} style={{ width: '400px', height: '300px', objectFit: 'cover' }} />
            </div>
            <div className='flex justify-center lg:justify-between max-w-[400px] mb-1'>
              <h2 className={`text-xl font-semibold my-auto`}>
                {title}
              </h2>
              <div className='mx-4'>
                <ul className='flex justify-center lg:justify-start m-1'>
                  <li>
                    <div className='has-tooltip'>
                      <button onClick={() => window.open(repo, "_blank")} className='rounded-full p-2 shadow-sm bg-slate-300 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600'>
                        <CodeIcon size={"20px"} />
                      </button>
                      <span className='tooltip rounded shadow-sm px-2 py-1 my-auto bg-gray-100 dark:bg-gray-800 text-xs mt-10 -translate-x-14'>
                        Source Code
                      </span>
                    </div>
                  </li>
                  {url && (
                    <li className='ml-2'>
                      <div className='has-tooltip'>
                        <button onClick={() => window.open(url, "_blank")} className='rounded-full p-2 shadow-sm bg-slate-300 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600'>
                          <LinkIcon size={"20px"} />
                        </button>
                        <span className='tooltip rounded shadow-sm px-2 py-1 my-auto bg-gray-100 dark:bg-gray-800 text-xs mt-10 -translate-x-12'>
                          Live Demo
                        </span>
                      </div>
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