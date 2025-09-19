import { Link } from 'react-router-dom';
import InfoProvider from '../context/InfoProvider';

const Main = () => {
    return (
        <div>
            <Link to={"/field"}>들어가기</Link>
        </div>
    );
};

export default Main;