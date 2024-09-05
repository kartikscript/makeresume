'use client'
import { Resume, UserProp } from '@/types/types';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// Define the shape of your context state
interface GlobalState {
  user: UserProp | null;
  setUser: (user: UserProp | null | ((prevUser: UserProp | null) => UserProp | null)) => void;
  // userDetails: UserProp | null;
  // setUserDetails: (user: UserProp | null | ((prevUser: UserProp | null) => UserProp | null)) => void;
  resume: Resume | null;
  setResume: (user: Resume | null | ((prevUser: Resume | null) => Resume | null)) => void;
}

//1 Create the context with a default value
const GlobalContext = createContext<GlobalState | undefined>(undefined);

//2 Create a provider component
export const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Define your global state and functions
  const [user, setUser] = useState<UserProp | null>(null);
  const [resume, setResume] = useState<Resume | null>({
 
     workExperience:[]
    }
  );

  // useEffect(() => {
  //   if (typeof window !== 'undefined' && resume !== null) {
  //     // Save formData to localStorage whenever it changes
  //     localStorage.setItem('resume', JSON.stringify(resume));
  //   }
  // }, [resume]);
  // Provide the state and functions to children components
  return (
    <GlobalContext.Provider value={{ user, setUser,resume, setResume }}>
      {children}
    </GlobalContext.Provider>
  );
};

//3 Custom hook for using the global context
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};
