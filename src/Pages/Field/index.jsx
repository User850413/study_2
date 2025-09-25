import { Link } from "react-router-dom";
import { Fragment, useContext, useState } from "react";

import BackpackIcon from '@mui/icons-material/Backpack';
import IconButton from "../../components/common/IconButton";
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import { ThemeContext } from "../../context/ThemeProvider";
import Modal from "../../components/common/Modal";


const Field = () => {
    const { toggleTheme } = useContext(ThemeContext);

    const [ inventory, setInventory ] = useState(true);

    // 테스트 모달 창 열기
    const testModal = new Modal({isOpen:inventory});

    return (
        <Fragment>
            <div className="headerWrapper">
                <ul>
                    <li>
                        <IconButton icon={<BackpackIcon />} isActivable areaLabel="inventory" onClick={()=>setInventory(prev=>!prev)} />
                    </li>
                    <li>
                        <IconButton icon={<AccessibilityIcon />} isActivable areaLabel="user" />
                    </li>
                    <li>
                        <IconButton icon={<SettingsIcon />} isActivable areaLabel="setting" />
                    </li>
                    <li>
                        <IconButton icon={<BedtimeIcon />} isActivable areaLabel="theme" onClick={toggleTheme} />
                    </li>
                </ul>
                <div>
                    <Link to="/">
                        <IconButton icon={<HomeIcon />} areaLabel="toHome" />
                    </Link>    
                </div>
            </div>
        </Fragment>
    );
};

export default Field;