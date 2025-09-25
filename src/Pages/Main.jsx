import { Link, useNavigate } from 'react-router-dom';
import InfoProvider from '../context/InfoProvider';
import DefaultForm from '../components/UI/Form/DefaultForm';
import DefaultInput from '../components/UI/Form/DefaultInput';
import DefaultBtn from '../components/UI/Form/DefaultBtn';
import { useState } from 'react';

const USER_DATAKEYS = ["name"];

const DEFAULT_USER = {
    name:""
}

const Main = () => {
    const [userData, setUserData] = useState(() => {
        const rawData = localStorage.getItem("userData");
        if(!rawData) return DEFAULT_USER;

        const parsedData = JSON.parse(rawData);
        USER_DATAKEYS.forEach((d) => {
            if(!(d in parsedData)) alert("잘못된 유저명이 저장되어 있습니다.");
            localStorage.removeItem("userData");
        })
        return parsedData;
    });

    const navigate = useNavigate();

    const onChangeUserData = (e) => {
        setUserData(prev => ({...prev, [e.target.name]:e.target.value}));
    }

    const goToMain = () => {
        navigate("/field");
    }

    const onClickGoToMain = () => {
        localStorage.setItem("userData", JSON.stringify(userData));
        goToMain();
    }

    return (
        <div>
            <ul>
                <li>
                    <label htmlFor="input-name">이름</label>
                    <input type="text" name="name" id="input-name" value={userData.name} onChange={onChangeUserData} />
                </li>
            </ul>
            <button type="button" onClick={onClickGoToMain}>
                들어가기
            </button>
        </div>
    );
};

export default Main;