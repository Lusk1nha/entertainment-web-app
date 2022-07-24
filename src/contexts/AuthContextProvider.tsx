import { createContext, useState, useEffect, ReactNode } from 'react';

export const AuthContext = createContext({})

interface AuthContextProviderProps {
   children: ReactNode;
}

export function AuthContextProvider(props: AuthContextProviderProps) {
   const [isAuthenticated, setIsAuthenticated] = useState(false);
 
   return (
     <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
       {props.children}
     </AuthContext.Provider>
   );
}