import React from 'react'

const words  = [
  { text: 'Ideas' , imgPath: '/images/ideas.svg' },
  { text: 'Concepts' , imgPath: '/images/concepts.svg' }
]

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      <h1 className="text-2xl">hi</h1>

      <div className="absolute top-0 left-0 w-full h-full z-10">
        <img src="/images/bg.png" alt="background" className="w-full h-full object-cover" />

        <div className="hero-layout relative z-20 flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="hero-text flex flex-col gap-7">
            <h1 className="text-4xl font-bold">
              Shaping{" "}
              <span className="slide">
                <span className="wrapper flex gap-3">
                  {words.map((word) => (
                    <span key={word.text} className="flex items-center gap-2 pb-2">
                      <img
                        src={word.imgPath}
                        alt={word.text}
                        className="xl:w-12 md:w-10 w-7 p-1 rounded-full bg-white"
                      />
                      <span className="text-black">{word.text}</span>
                    </span>
                  ))}
                </span>
              </span>
            </h1>
            <h1 className="text-4xl font-bold">into Real Projects</h1>
            <h1 className="text-4xl font-bold">that Deliver Results</h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
