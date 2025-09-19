import { Link } from "react-router-dom";
import "../../styles/Field.scss"
import { Fragment } from "react";
import BackpackIcon from '@mui/icons-material/Backpack';
import IconButton from "../../components/common/IconButton";

const Field = () => {


    return (
        <Fragment>
            <div className="headerWrapper">
                <ul>
                    <li>
                    </li>
                    <li>b</li>
                </ul>
                <div>
                    <Link to="/">메인으로</Link>    
                </div>
            </div>
        </Fragment>
    );
};

export default Field;