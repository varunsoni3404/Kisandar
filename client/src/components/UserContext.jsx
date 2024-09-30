import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    axios.get('/profile').then(({ data }) => {
      setUser(data);
      setReady(true);
    }).catch(() => {
      setReady(true); // Even if the request fails, mark as ready
    });
  }, []);  // No dependencies means this effect runs once, on mount

  return (
    <UserContext.Provider value={{ user, setUser, ready }}>
      {children}
    </UserContext.Provider>
  );
}

// import { createContext, useEffect, useState } from "react";
// import axios from "axios";
// export const UserContext=createContext({});

// export function UserContextProvider({children}){
//     const [user,setUser]=useState(null)
//     const [ready,setReady]=useState(false)
//     useEffect(()=>{
//         if(!user){
//             axios.get('/profile').then(({data})=>{
//                 setUser(data)
//                 setReady(true)
//             });
//         }
//     },[])
//     return(
//         <UserContext.Provider value={{user,setUser,ready}}>
//             {children}
//         </UserContext.Provider>
//     )
// }