import Image from 'next/image'
import mainImage from '../public/main_image.svg'

export default function Home() {
  return (
    <div>
      <div className="m-32 text-left">
        <Image
          src={mainImage}
          alt={""}
          width={700}
          height={700}
          priority={true}
          style={{
            position: 'absolute',
            top: '310px',
            right: '100px',
          }}
        />
        <div className='m-2 p-3 w-3/4 relative'>
          <h2 className='text-4xl font-semibold'>{"Hi, I'm Miho! 👋🏻"}</h2>
          <p className="my-2 text-xl font-light z-10">{"I'm a"} <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-blue-500">{" software engineer "}</span>{"who finds joy in building functional applications that bring ideas to life. 👩🏻‍💻"}</p>
          <p className="my-2 text-xl font-light z-10">{"Explore my portfolio to discover a collection of projects that showcase my skills and love for all things code. ✨"}</p>
        </div>
      </div>
      
    </div>
  )
}
