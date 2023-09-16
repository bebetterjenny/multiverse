import React, {useCallback} from 'react';
import './Landing.scss';
import { useNavigate, useLocation } from 'react-router-dom';

const Landing = () => {
    const navigate = useNavigate();

    const handleClick = useCallback(() => {
        navigate('/tags');
    }, []);

    return (
        <div className="landing" onClick={handleClick}>
            <div className="landing-header">
                <h1>欢迎进入</h1>
                <h1>平行</h1>
                <h1>时空</h1>
            </div>
            <div className="landing-footer">
                <p>长按进入</p>
            </div>
        </div>
        
    );
}

export default Landing;