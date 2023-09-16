import React, { forwardRef, useCallback, useMemo, useState, useEffect } from 'react';
import './Card.scss';
import { IconButton } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { CardProps } from './types';
import zIndex from '@mui/material/styles/zIndex';
import { useNavigate } from 'react-router-dom';

const backUrl = "/select-metaverse";

const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

type Props = CardProps & {
    countPerLayer: number;
    zIndexReverse: number;
    onHidden: (card: CardProps) => void;
}

const Card = forwardRef<HTMLDivElement, Props>((props, ref) => {
    const {
        countPerLayer,
        zIndexReverse,
        onHidden,
        ...cardInfo
    } = props;
    const {
        index,
        eventName,
        eventId,
        description,
        nickname,
        age,
        gender,
        education,
    } = cardInfo;

    const [showStatus, setShowStatus] = useState<boolean | 'fading'>(true);

    const navigate = useNavigate();

    const className = useMemo(() => {
        let str = "card";
        switch (index % countPerLayer) {
            case 0:
                str += " pos-top";
                break;
            case 1:
                str += " pos-middle";
                break;
            case 2:
                str += " pos-bottom";
                break;
        }
        switch (showStatus) {
            case 'fading':
                str += " fading";
                break;
            case false:
                str += " no-display";
                break;
            default:
                break;
        }
        return str;
    }, [showStatus]);

    const layerDown = useMemo(() => Math.floor(zIndexReverse / countPerLayer), [zIndexReverse, countPerLayer]);

    const zIndex = useMemo(() => 100 - zIndexReverse, [layerDown]);

    const filter = useMemo(() => {
        let num = 0;
        if (layerDown > 1) {
            return `blur(${layerDown - 1}px)`;
        }
    }, [layerDown]);


    const [top, _1] = useState(() => {
        let num = 0;
            switch (index % countPerLayer) {
                case 0:
                    num = getRandomInt(1, 33);
                    break;
                case 1:
                    num = getRandomInt(67, 33);
                    break;
                case 2:
                    num = getRandomInt(100, 67);
                    break;
            }
            return `${num}%`;
    });

    const [left, _2] = useState(() => {
        const num = getRandomInt(2, 18);
        return `${num}%`;
    });

    const hidden = useCallback(() => {
        setShowStatus('fading');
        setTimeout(() => {
            setShowStatus(false);
        }, 300);

        onHidden(cardInfo)
    }, [cardInfo]);

    const handleDislike = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        hidden();
        event.stopPropagation();
    }, [hidden]);

    const handleLike = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        hidden();
        event.stopPropagation();
    }, [hidden]);

    const selectEvent = useCallback(() => {
        navigate('/metaverse');
    }, [navigate]);


    return (
        <div className={className} ref={ref} style={{ top, left, zIndex, filter }} onClick={selectEvent}>
            <div className="event-name">{eventName}</div>
            {/* <div className="event-name">layerDown: {layerDown}, Index: {index}, Id: {eventId}</div> */}
            <div className="bottom">
                <div className="person">
                    <div className="nickname">{nickname}，</div>
                    <div className="brief">{age}岁，{gender}，{education}</div>
                </div>
                <div>
                    <IconButton size="small" className="icon-btn" onClick={handleDislike}>
                        <ThumbDownOffAltIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small" className="icon-btn" onClick={handleLike}>
                        <ThumbUpOffAltIcon fontSize="small" />
                    </IconButton>
                </div>
            </div>
        </div>
    );
});

export default Card;