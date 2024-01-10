import { useState } from "react"
import UserContext from "./UserContext"


const UserContextProvider = ({children}) => {
    const [display,setdisplay] =useState(null) 
return(
    <UserContext.Provider value ={{display,setdisplay}}>
    {children}
    </UserContext.Provider>
)
}

export default UserContextProvider