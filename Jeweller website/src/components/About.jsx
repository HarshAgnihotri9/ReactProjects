// import React from 'react'

function About() {
  return (
    <>
    <div className="mainnn">
    <div className="about-section">
  <h1>About Vardhan Jeweller</h1>
  <p>We are goldsmith from last 100 years and we make designs which you dream</p>
  <p>
Adorn yourself in timeless elegance, where every piece tells a story of grace, beauty, and the brilliance of your individuality.</p>
</div>

<h2 >Our Team</h2>
<div className="row">
  <div className="column">
    <div className="cardd">
      <img src="src/jane.avif" alt="Jane" />
      <div className="container">
        <h2>Pragati Verma</h2>
        <p className="title">CEO & Founder</p>
        <p> Best maker of gold rings and braclets</p>
        <p>pragativerma24@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="cardd">
      <img src="src/mike.avif" alt="Mike"  />
      <div className="container">
        <h2>Abhi Verma</h2>
        <p className="title">Fancy Naukar</p>
        <p>Vardhan Jeweller slave from last 25 years</p>
        <p>abhiverma@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
  
  <div className="column">
    <div className="cardd">
      <img src="src/john.avif" alt="John"  />
      <div className="container">
        <h2>Harsh Agnihotri</h2>
        <p className="title">Designer</p>
        <p>Designer of all things of Vardhan Jewellers</p>
        <p>agnihotriharsh154@gmail.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default About