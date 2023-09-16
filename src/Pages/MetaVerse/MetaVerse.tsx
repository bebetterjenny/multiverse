import React, { useCallback, useEffect, useState } from 'react';
import './MetaVerse.scss';
import Header from '../../Components/Header';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Time from '../../Components/Time';
import { baseUrl } from '../../constants';
import axios from 'axios';
import Curv from '../../Components/Curv/Curv';
import moment from 'moment';
import { setSpaceName as setSpaceNameForDay, moments, setMoments } from '../Day/constants';

const backUrl = "/select-metaverse";

const MetaVerse = () => {
    const [spaceName, setSpaceName] = useState('运动充实的一天');
    const [description, setDescription] = useState(`这一天醒来后没有玩手机，
而是起床后直接做了一套早操。
吃过早餐后，我骑车来到附近的体育公园，
轮流使用了跑步机、仰卧板和哑铃。
在阳光下汗水流淌，呼吸者新鲜空气，
让我感到无比清爽。`);
    const [date, setDate] = useState('2023 09 04');
    const [minute, setMinute] = useState('3:00');
    const [imgUrl, setImgUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleEnter = useCallback(() => {
        navigate('/day');
    }, []);

    const handleBack = useCallback(() => {
        console.log('back')
        navigate(backUrl);
    }, [navigate]);

    useEffect(() => {
        setLoading(true);
            axios.post(`${baseUrl}/user/build-space-times`, {
            // axios.post(`/user/build-space-times`, {
                "events": ["去一次远足"],
                "userId": '1699330023510573057'
            }).then(({ data }) => {
                if (data.msg === 'success') {
                    setLoading(false);
                    const { name, description, timeline } = data.data;
                    setSpaceName(name);
                    setDescription(description);
                    setSpaceNameForDay(name);
                    if (timeline?.length) {
                        const { dateTime , time, imgUrls } = timeline[0];
                        setDate(moment(dateTime).format('YYYY MM DD'));
                        setMinute(time);
                        setImgUrl(imgUrls[0]);
                        const moments = timeline.map((e: any, i: number) => {
                            const { dateTime , event, location, time, imgUrls } = e;
                            return {
                                imgs: !i ? imgUrls.slice(0, 2) : [imgUrls[i + 1]],
                                time: {
                                    date: moment(dateTime).format('YYYY MM DD'),
                                    minute: time
                                },
                                description: event,
                                location
                            }
                        });
                        setMoments(moments);

                    }
                }
            });
    }, []);


    return (
        <div className="metaVerse">
            <Header
                title="小明的世界"
                backUrl={backUrl}
            />
            <div className="up">
                <div className="header">
                    <span>{spaceName}</span>
                    <svg className="circle" width="142" height="57" viewBox="0 0 142 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M90.1573 10.8697C84.223 6.61488 62.0409 2.51478 20.787 20.153C-30.7803 42.2007 33.6788 55.5453 42.8873 55.5453C52.0957 55.5453 109.802 60.7671 136.2 35.8184C157.318 15.8594 103.663 4.29404 74.196 1.00621C57.6208 0.812808 19.8048 5.06763 1.14231 23.6341" stroke="#FA6218" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </div>
                <div className="img-container">
                    {imgUrl && <img src={imgUrl} />}
                </div>
                <Time time1={date} time2={minute} />
            </div>
            <div className="down">
                <div className="description">
                    {description}
                </div>
                <Button className="enter" variant="contained" onClick={handleEnter}>进入平行时空</Button>
                <Button className="back" variant="text" onClick={handleBack}>返回</Button>
            </div>
            <Curv />
            {loading && <div className="loading"></div>}
        </div>
    );
}

export default MetaVerse;