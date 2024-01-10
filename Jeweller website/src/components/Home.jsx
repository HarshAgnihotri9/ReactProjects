// import React from 'react'
import '/src/App.css'

function Home() {
  return (
    <>
    <div className="secondpage">
  <div className="left1">
    <img src="src/icons8-jewel-64 (1).png" alt="" />
    <div className="text">

      <h2>VARDHAN <br/> JEWELLERS</h2> 
      <p style={{marginTop:'8px'}}>Where Drems Become Reality</p>
    </div>
  </div>
  <div className="right1">
    <h2>GREAT THINGS <br/>ARE COMING</h2>
    <div className="btn"><button>Contact Us</button></div>
    <div className="imagess">
      <div className="img1"><img src="src/components/icons8-facebook-50.png" alt=""/></div>
      <div className="img2"><img src="src/components/icons8-instagram-50.png" alt=""/></div>
      <div className="img3"><img src="src/components/icons8-phone-50.png" alt=""/></div>
    </div>
  </div>
</div>
    
    </>
  )
}

export default Home