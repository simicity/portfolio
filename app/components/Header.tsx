import Link from "next/dist/client/link";
import { LinkedInIcon } from "../icons/LinkedInIcon";
import { GithubIcon } from "../icons/GithubIcon";
import { ResumeIcon } from "../icons/ResumeIcon";

export default function Header() {
  return (
    <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm flex">
      {/* <nav className="fixed top-0 left-0 flex space-x-4 w-full p-8 pb-6 backdrop-blur-md dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:bg-gray-300 lg:bg-opacity-30 lg:p-4 lg:dark:bg-zinc-800/30">
      {[
        ['/ Home', '/'],
        ['/ Projects', '/projects'],
      ].map(([title, url]) => (
        <Link href={url} key={title} className="rounded-lg px-3 py-2 text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</Link>
      ))}
      </nav> */}

      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:w-full lg:justify-end lg:h-auto lg:bg-none">
        <ul className='flex flex-row m-10'>
          <li>
            <a target="_blank" href="https://github.com/simicity">
              <GithubIcon size={"25px"} />
            </a>
          </li>

          <li className='pl-3'>
            <a target="_blank" href="https://www.linkedin.com/in/mihoshimizu/">
              <LinkedInIcon size={"25px"} />
            </a>
          </li>

          <li className='pl-3'>
            <a target="_blank" href="https://drive.google.com/file/d/1mSyV5xuOF1AQa8Drh4wACrt_iscehMTc/view?usp=sharing">
              <ResumeIcon size={"25px"} />
            </a>
          </li>
        </ul>
      </div>
  
    </div>
  )
}