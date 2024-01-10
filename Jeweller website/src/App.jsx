import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

import './App.css'





// import ResizeContext from '../context/resizeContext'
 
function App() {
  
  const [repp, setRep ]= useState({visibility:'inherit'});
  // const [marginLeft,setmarginLeft] =useState({})
  
  
  
  
  const[width,setwidth] =useState(window.innerWidth)
  useEffect(() => {
   const handleResize = () => {
     setwidth(window.innerWidth);
   };
   window.addEventListener('resize', handleResize);
   })
   

  useEffect(()=>{
    // console.log(width);
    if(width<810){
      // console.log("hiii");
      setRep({marginLeft:'35vw',FontSize:'3vw',display:'none'})
      // setmarginLeft({marginLeft:35})
      setflag(1)
    }
    else {
      setRep({ display:'block'})
      setflag(0)
    }
    
  },[width,setwidth,setRep.visibility])
  const  [flag, setflag ] = useState(0);
  function Hide(){
            
            if(width<810){
               if(flag==0){
                  setRep({display:'none'})
                  setflag(1);
                  // console.log('i am if');
                }
                if(flag==1) {
                  setRep({display:'block'})
                  setflag(0); 
                  // console.log('i am else');
                }
       }
                else
                {  
                 if(flag==0){
                  setRep({visibility:'hidden'})
                  setflag(1);
                  // console.log('i am if');
                }
                if(flag==1) {
                  setRep({visibility:'inherit'})
                  setflag(0); 
                  // console.log('i am else');
                }
                }
            }
            

            // if(flag==0){
            //   setRep({display:'none',visibility:'hidden'})
            //   setflag(1);
            //   // console.log('i am if');
            // }
            // if(flag==1) {
            //   setRep({display:'block',visibility:'inherit'})
            //   setflag(0); 
            //   // console.log('i am else');
            // }
   
  
    return (
  
      
      <>
   <div className="main"  >
    <div className="left"> <h2> The vardhan Jewellers  </h2></div>
    <div className="right">
      <ul>
        <li style={{ display:repp.display,visibility: repp.visibility,FontSize:repp.FontSize}}><NavLink to="/">Home  </NavLink></li>
        <li style={{ display:repp.display,visibility: repp.visibility,FontSize:repp.FontSize}}><NavLink to="/About"> About</NavLink></li>
        <li style={{ display:repp.display,visibility: repp.visibility,FontSize:repp.FontSize}}><NavLink to="/Contactus"> Conatct Us</NavLink></li>
        <li style={{ display:repp.display,visibility: repp.visibility,FontSize:repp.FontSize}}><NavLink to="/More"> More</NavLink></li>
      </ul>
        <li><img  style={{marginLeft:repp.marginLeft }}className='imgg' src="/img/sort.png" alt="" onClick={Hide}  /></li>
    </div>
   </div>
       </>
    )
    } 
   
export default App
