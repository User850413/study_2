import React, { useEffect, useRef, useState } from 'react';
import Modal from '../../common/Modal';

const SettingModalContent = (props) => {
    const { userData } = props;

    return (
        <div>
            유저명 : {userData.name}
        </div>
    )
}

const Setting = (props) => {
    const [ userData, setUserData ] = useState();

    useEffect(()=>{
        const storedUserData = localStorage.getItem("userData");
        if(storedUserData){
            const parsedUserData = JSON.parse(storedUserData);
            setUserData(parsedUserData);
        }else{
            alert("저장된 유저 정보가 없습니다.");
        }

    }, []);

    const modalRef = useRef(null);
    useEffect(() => {
        modalRef.current = new Modal({ className:"myModal user", title:"설정" })
        modalRef.current.open();

        modalRef.current.render(<SettingModalContent userData={userData} {...props} />);

        return () => {
            modalRef.current.destroy();
        }
    })

    return null;
};

export default Setting;