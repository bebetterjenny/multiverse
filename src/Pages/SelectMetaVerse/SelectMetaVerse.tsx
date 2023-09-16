// @ts-nocheck
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './SelectMetaVerse.scss';
import Header from '../../Components/Header';
import Card from './Card';
import Cards from './Cards';
import Input from './Input';
import { getEvents } from './api';
import { FormControl, FormControlLabel, List, Radio, RadioGroup, SwipeableDrawer } from '@mui/material';
import SelectEvents from './SelectEvents';
import { CardProps } from './Card/types';

const backUrl = "/";

const SelectMetaVerse = () => {
    const [inputLoading, setInputLoading] = useState(false);
    const [selectingEvent, setSelectingEvent] = useState(false);
    const [events, setEvents] = useState([]);

    const handleSubmitIdea = useCallback(() => {
        setInputLoading(true);
        getEvents().then((events) => {
            setEvents(events);
            setInputLoading(false);
            setSelectingEvent(true);
        });

    }, []);

    const toggleDrawer = useCallback((open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event &&
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setSelectingEvent(open);
    }, []);


    return (
        <div className="selectMetaVerse">
            <Header
                title="你好，世界"
                backUrl={backUrl}
            />
            <Cards />
            <Input onSubmitIdea={handleSubmitIdea} loading={inputLoading} />
            <SwipeableDrawer
                anchor="bottom"
                open={selectingEvent}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                <SelectEvents events={events} />
            </SwipeableDrawer>
        </div>
    );
}

export default SelectMetaVerse;