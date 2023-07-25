import React, { createContext, useState } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [selectedMenu, setSelectedMenu] = useState({
    bodypartName: "Neck",
    injuryName: "Whiplash",
  });
  const [data, setData] = useState([]);

  return (
    <MenuContext.Provider
      value={{ selectedMenu, setSelectedMenu, data, setData }}
    >
      {children}
    </MenuContext.Provider>
  );
};
