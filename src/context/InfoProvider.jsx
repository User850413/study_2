import React, { createContext, useState } from 'react';

export const InfoContext = createContext();

const InfoProvider = ({children }) => {
    
  const [info, setInfo] = useState({
    name:"henry",
    age:21
  });

    return (
        <InfoContext.Provider value={{ info, setInfo }}>
            {children}
        </InfoContext.Provider>
    );
};

export default InfoProvider;