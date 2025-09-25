import React, { useEffect, useRef } from 'react';
import Modal from '../../common/Modal';

const UserModalContent = (props) => {
    return (
    <div>
        유저 정보
    </div>)
}

const User = (props) => {
    const modalRef = useRef(null);

    useEffect(() => {
        modalRef.current = new Modal({ className:"myModal user", title:"유저 정보" })
        modalRef.current.open();

        modalRef.current.render(<UserModalContent {...props} />);

        return () => {
            modalRef.current.destroy();
        }
    })

    return null;
};

export default User;