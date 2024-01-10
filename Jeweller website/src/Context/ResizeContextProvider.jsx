import { useState,useEffect} from "react"
// import UserContext from "./UserContext"
import ResizeContext from "./ResizeContext"


const ResizeContextProvider = ({children}) => {
    // const [display,setdisplay] =useState(null) 
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
        // console.log(width);
      <ResizeContext.Provider value ={{width,setWidth}}>
      {children}
      </ResizeContext.Provider>
      };
      

    }, [width,children]);

}
    //...

export default ResizeContextProvider