import { useState } from 'react'
import { NavLink } from 'react-router-dom';

import './App.css'
 
function App() {
  
  const [repp, setRep ]= useState({display:'block'});
  
  
  const  [flag, setflag ] = useState(0);
  function Hide(){
            if(flag==0){
              setRep({display:'none'})
              setflag(1);
              console.log('i am if');
            }
            if(flag==1) {
              setRep({ display: 'initial'})
              setflag(0); 
              console.log('i am else');
            }
   }

  return (
    <>
   <div className="main">
    <div className="left"> <h2> The vardhan  Jewellers  </h2></div>
    <div className="right">
      <ul>
        <li style={{display: repp.display}}><NavLink to="/">Home </NavLink></li>
        <li style={{display: repp.display}}><NavLink to="/About"> About</NavLink></li>
        <li style={{display: repp.display}}><NavLink to="/Contactus"> Conatct Us</NavLink></li>
        <li style={{display: repp.display}}><NavLink to="/More"> More</NavLink></li>
        <li><img className='imgg' src="/img/sort.png" alt="" onClick={Hide} /></li>
      </ul>
    </div>
   </div>
    </>
  )
}

export default App
