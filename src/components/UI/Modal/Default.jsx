import React, { useEffect, useRef, useState } from 'react';
import Modal from '../../common/Modal';

const DefaultModalContent = (props) => {
    let {message, element} = props;

    if(!message && !element) return <div> Loading... </div>

    if(message != null) {
        return (
            <div>
                {message}        
            </div>
        )
    }

    return element;
}

const Default = (props) => {
    const modalRef = useRef(null);

    useEffect(() => {
        modalRef.current = new Modal({ className:"myModal default", title:"메시지" });
        modalRef.current.open();

        modalRef.current.render(<DefaultModalContent {...props} />);

        return () => {
            modalRef.current.destroy();
        }
    }, []);

    return null;
};

export default Default;