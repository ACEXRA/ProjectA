import React, { useState } from "react";
import { DummyData } from "../misc/DummyData";
export const DataContext = React.createContext();
const DataContextProvider = ({ children }) => {
  const [data, setData] = useState(DummyData);
  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
