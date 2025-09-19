import React, { useContext } from 'react';
import { InfoContext } from '../context/InfoProvider';

const Settings = () => {
    const { info } = useContext(InfoContext);

    return (
        <div>
            <h3>settings</h3>
            <div>
                <span>{info.name}</span> <br />
                <span>{info.age}</span> <br />
                <span>{info.address}</span> <br />
                <span>{info.count}</span>
            </div>
        </div>
    );
};

export default Settings;