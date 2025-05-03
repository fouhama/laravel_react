import { createContext, useState } from "react"

export type ContextType = {
  auth: {
    isAuth: boolean;
    email: string;
  };
  setAuth: React.Dispatch<React.SetStateAction<{ isAuth: boolean; email: string }>>;
}

export const Context = createContext<ContextType | null>(null)


const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [auth, setAuth] = useState({
    isAuth: false,
    email: '',
  });
  return (
    <Context.Provider value={{ auth, setAuth }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider

