import React, { useEffect, useRef } from 'react';
import Modal from '../../common/Modal';

const SettingModalContent = (props) => {
    return (
    <div>
        설정
    </div>)
}

const Setting = (props) => {
    const modalRef = useRef(null);

    useEffect(() => {
        modalRef.current = new Modal({ className:"myModal user", title:"설정" })
        modalRef.current.open();

        modalRef.current.render(<SettingModalContent {...props} />);

        return () => {
            modalRef.current.destroy();
        }
    })

    return null;
};

export default Setting;