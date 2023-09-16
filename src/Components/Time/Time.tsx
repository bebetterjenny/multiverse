import React, { useCallback } from 'react';
import './Time.scss';

type Props = {
    time1: string;
    time2: string;
}

const Time = (props: Props) => {
    const { time1, time2 } = props;

    return (
        <div className="time">
            <div className="date">{time1}</div>
            <div className="minute">{time2}</div>
        </div>
    );
}

export default Time;