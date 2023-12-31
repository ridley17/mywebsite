import React from 'react'

const greeting = 'Hello, I am Ridley Onya!'
const bio1 =
  'A frontend developer and Web designer. I am also passionate about coding and web development '
const bio2 = 'specialised in React'

function LandingSection() {
  return (
    <div className="text-center flex flex-col items-center justify-center gap-8 ">
      <img
        className=" object-cover my-16 w-64 h-96 rounded-full"
        src="/profile.jpg"
        alt="Ridley Onya"
      />
      <h1 className="my-4 text-5xl font-serif">{greeting}</h1>
      <p className="text-xl">{bio1}</p>
    </div>
  )
}

export default LandingSection
