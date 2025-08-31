import React, { useState, useEffect } from 'react'

const words  = [
  { text: 'Ideas' , imgPath: '/images/ideas.svg' },
  { text: 'Concepts' , imgPath: '/images/concepts.svg' },
  { text: 'Solutions' , imgPath: '/images/solutions.svg' },
]

const Hero = () => {
  const [index, setIndex] = useState(0)

  // har 2 second baad word change hoga
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
        <div className="hero-layout">
          {/* Left : HERO CONTENT */}
          <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5 ">
            <div className="flex flex-col gap-7">

              <div className="hero-text">
                <h1 className="text-3xl font-bold">
                  Shaping{" "}
                  <span className="inline-flex items-center gap-2 transition-all duration-500">
                    <img
                      src={words[index].imgPath}
                      alt={words[index].text}
                      className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white"
                    />
                    <span className="text-primary">{words[index].text}</span>
                  </span>
                </h1>

                <h1 className="text-3xl font-bold">into Real Projects</h1>
                <h1 className="text-3xl font-bold">that Deliver Results</h1>
              </div>

            </div>
          </header>
        </div>
      </div>
    </section>
  )
}

export default Hero
