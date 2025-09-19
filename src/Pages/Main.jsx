import { Link } from 'react-router-dom';
import InfoProvider from '../context/InfoProvider';

const Main = () => {
    return (
        <div>
            <InfoProvider>
                <Link to={"/field"}>들어가기</Link>
            </InfoProvider>
        </div>
    );
};

export default Main;