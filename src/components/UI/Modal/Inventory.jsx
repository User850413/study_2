import React, { useEffect, useRef } from 'react';
import Modal from '../../common/Modal';

const InventoryModalContent = (props) => {
    return (
    <div>
        인벤토리
    </div>)
}

const Inventory = (props) => {
    const modalRef = useRef(null);

    useEffect(() => {
        modalRef.current = new Modal({ className:"myModal user", title:"인벤토리" })
        modalRef.current.open();

        modalRef.current.render(<InventoryModalContent {...props} />);

        return () => {
            modalRef.current.destroy();
        }
    })

    return null;
};

export default Inventory;