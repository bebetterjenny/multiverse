import React, { useCallback, useEffect } from 'react';
import './Day.scss';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header';
import { mockMoments, moments, spaceName } from './constants';
import Moment from './Moment';
import Curv from '../../Components/Curv/Curv';

const backUrl = "/metaverse";

const Day = () => {

    console.log({moments});
    
    return (
        <div className="day">
            <Curv />
            <Curv />
            <Header
                title={spaceName} 
                backUrl={backUrl}
            />
            <div className="container">
                {moments.map((moment, i) => <Moment key={i} {...moment} />)}
            </div>

            <div className="background"></div>
        </div>
    );
}

export default Day;