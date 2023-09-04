import Header from './components/Header'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="data-scroll flex flex-col items-center justify-between p-24">
      <Header />

      <div className="m-8 text-left">
        <div className='m-2 p-3 w-3/4 relative'>
          <h2 className='text-4xl font-bold'>{"Hi, I'm Miho! 👋🏻"}</h2>
          <p className="my-2 text-xl font-light z-10">{"I'm a"} <span className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-blue-500">{" software engineer "}</span>{"who finds joy in building functional applications that bring ideas to life. 👩🏻‍💻"}</p>
          <p className="my-2 text-xl font-light z-10">{"Explore my portfolio to discover a collection of projects that showcase my skills and love for all things code. ✨"}</p>
        </div>
      </div>

      <Projects />

      <Footer />
    </div>
  )
}
