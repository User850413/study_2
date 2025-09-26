import React, { createContext, useState } from 'react';
import { USER } from '../lib/data/user.d';

export const InfoContext = createContext();

const InfoProvider = ({children }) => {
    
  const [info, setInfo] = useState(USER);

    return (
        <InfoContext.Provider value={{ info, setInfo }}>
            {children}
        </InfoContext.Provider>
    );
};

export default InfoProvider;