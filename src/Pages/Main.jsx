import { Link, useNavigate } from 'react-router-dom';
import InfoProvider, { InfoContext } from '../context/InfoProvider';
import DefaultForm from '../components/UI/Form/DefaultForm';
import DefaultInput from '../components/UI/Form/DefaultInput';
import DefaultBtn from '../components/UI/Form/DefaultBtn';
import { useContext, useState } from 'react';
import { USER } from '../lib/data/user.d';
import { useForm } from 'react-hook-form';

// localStorage.removeItem("userData");

const Main = () => {
    const { setInfo } = useContext(InfoContext);

    const [ isFormChecked, setIsFormChecked ] = useState(() =>{
        const userRawData = localStorage.getItem("userData");
        if(!userRawData) return false;
        const userParsedData = JSON.parse(userRawData);
        if(typeof userParsedData != "object") return false;
        
        return true;
    });

    const navigate = useNavigate();

    const defaultName = JSON.parse(localStorage.getItem("userData"))?.name;

    const { 
        register, // 폼들 유효성 확인
        handleSubmit, // 폼 제출
        watch, // 실시간으로 입력폼 값 확인
        formState: { errors, isSubmitting, isDirty, isValid }
    } = useForm({ 
        mode: 'onChange' ,
        defaultValues: {
            name: defaultName || "henry"
        }
    });

    const onSubmit = data => {
        setInfo(data);
        localStorage.setItem("userData", JSON.stringify(data));

        setIsFormChecked(true);
    }

    const onError = errors => console.error(errors);

    // 메인 페이지로
    const goToMain = () => {
        navigate("/field");
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
                <input 
                    type="text" 
                    placeholder='이름'
                    {...register('name', {
                        required: true,
                        minLength: {value: 1, message: '이름은 필수 입력 사항입니다.'},
                        onChange: () => setIsFormChecked(false)
                    })} />
                <input type="submit" value={"저장"} />
            </form>

            <button disabled={!isFormChecked} onClick={goToMain}>들어가기</button>
        </div>
    );
};

export default Main;