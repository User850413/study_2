import { Link } from "react-router-dom";
import { Fragment, lazy, Suspense, useContext, useEffect, useState } from "react";

import BackpackIcon from '@mui/icons-material/Backpack';
import IconButton from "../../components/common/IconButton";
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import { ThemeContext } from "../../context/ThemeProvider";
import Default from "../../components/UI/Modal/Default";

const modules = import.meta.glob("../../components/UI/Modal/*.jsx");

const Field = () => {
    const { toggleTheme } = useContext(ThemeContext);

    // 선택된 버튼
    const [ selectedBtn, setSelectedBtn ] = useState(null);

    // 모달 component
    const [ ModalComponent, setModalComponent ] = useState(null);

    // 메뉴 버튼 하나만 선택
    const onClickMnuBtn = (e) => {
        setSelectedBtn(e.currentTarget.name);
    }

    // active 된 메뉴의 Modal창 생성
    useEffect(()=>{
        if(!selectedBtn || !selectedBtn.startsWith("modal")) return;

        const modalName = selectedBtn.split("-")[1];
        const modalPath = `../../components/UI/Modal/${modalName}.jsx`

        console.log(modules[modalPath]);
        const importFn = modules[modalPath];
        if(importFn){
            setModalComponent(lazy(importFn));
        }else{
            setModalComponent(null);
            console.error(`modal component not found : ${modalPath}`)
        }
        
    }, [ selectedBtn ])

    useEffect(()=>{
        console.log(ModalComponent);
    }, [ModalComponent])

    return (
        <Fragment>
            <div className="headerWrapper">
                <ul>
                    <li>
                        <IconButton icon={<BackpackIcon />} 
                            isActivable 
                            areaLabel="modal-Inventory" 
                            name="modal-Inventory"
                            onClick={onClickMnuBtn}
                            activeState={selectedBtn == 'modal-Inventory'} />
                    </li>
                    <li>
                        <IconButton 
                            icon={<AccessibilityIcon />} 
                            isActivable areaLabel="modal-User"
                            name="modal-User"
                            onClick={onClickMnuBtn}
                            activeState={selectedBtn == "modal-User"}  />
                    </li>
                    <li>
                        <IconButton 
                            icon={<SettingsIcon />} 
                            isActivable areaLabel="modal-Setting"
                            name="modal-Setting"
                            onClick={onClickMnuBtn}
                            activeState={selectedBtn == "modal-Setting"}  />
                    </li>
                    <li>
                        <IconButton 
                            icon={<BedtimeIcon />} 
                            isActivable areaLabel="theme" 
                            onClick={toggleTheme} />
                    </li>
                </ul>
                <div>
                    <Link to="/">
                        <IconButton 
                            icon={<HomeIcon />} 
                            areaLabel="toHome" />
                    </Link>    
                </div>
            </div>
            <Suspense fallback={<Default message={"loading..."} />}>
                {ModalComponent && <ModalComponent />}
            </Suspense>
        </Fragment>
    );
};

export default Field;