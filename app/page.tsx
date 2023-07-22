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
          style={{
            position: 'absolute',
            top: '310px',
            right: '100px',
          }}
        />
        <div className='m-2 p-3 w-2/3 relative'>
          <h2 className='text-2xl font-extralight'>{"Hi, I'm Miho! 👋🏻"}</h2>
          <p className="my-2 font-light">{"I'm a software engineer who finds joy in building functional applications that bring ideas to life. 👩🏻‍💻"}</p>
          <p className="my-2 font-light z-10">{"Explore my portfolio to discover a collection of projects that showcase my skills and love for all things code. ✨"}</p>
        </div>
      </div>
      
    </div>
  )
}
