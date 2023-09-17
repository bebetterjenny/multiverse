import React, { useCallback } from 'react';
import './Landing.scss';
import { useNavigate, useLocation } from 'react-router-dom';
import Curv from '../../Components/Curv';

const Landing = () => {
    const navigate = useNavigate();

    const handleClick = useCallback(() => {
        navigate('/tags');
    }, []);

    return (
        <div className="landing" onClick={handleClick}>
            <div className="landing-header">
                <h1>欢迎进入</h1>
                <h1>平行
                <svg className="circle" width="142" height="57" viewBox="0 0 142 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M90.1573 10.8697C84.223 6.61488 62.0409 2.51478 20.787 20.153C-30.7803 42.2007 33.6788 55.5453 42.8873 55.5453C52.0957 55.5453 109.802 60.7671 136.2 35.8184C157.318 15.8594 103.663 4.29404 74.196 1.00621C57.6208 0.812808 19.8048 5.06763 1.14231 23.6341" stroke="#FA6218" stroke-width="2" stroke-linecap="round" />
                </svg>
                </h1>
                <h1>时空</h1>

            </div>
            <div className="landing-footer">
                <p>长按进入</p>
            </div>
            <Curv />
        </div>

    );
}

export default Landing;