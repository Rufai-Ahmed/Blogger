import { FC, PropsWithChildren, createContext, useState } from "react";

interface iProps {
  toggled?: boolean;
  toggle?: boolean;
  onToggle?: () => void;
  changeToggle?: () => void;
  setToggled?: any;
}

export const GlobalContext = createContext({} as iProps);

export const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [toggled, setToggled] = useState<boolean>(false);

  const changeToggle = () => {
    setToggle(!toggle);
  };

  return (
    <GlobalContext.Provider
      value={{ toggle, changeToggle, setToggled, toggled }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
