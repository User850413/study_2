import { Link } from "react-router-dom";
import "../../styles/Field.scss"
import { Fragment } from "react";
import BackpackIcon from '@mui/icons-material/Backpack';
import IconButton from "../../components/common/IconButton";
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import AccessibilityIcon from '@mui/icons-material/Accessibility';

const Field = () => {

    return (
        <Fragment>
            <div className="headerWrapper">
                <ul>
                    <li>
                        <IconButton icon={<BackpackIcon />} isActivable areaLabel="inventory" />
                    </li>
                    <li>
                        <IconButton icon={<AccessibilityIcon />} isActivable areaLabel="user" />
                    </li>
                    <li>
                        <IconButton icon={<SettingsIcon />} isActivable areaLabel="setting" />
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