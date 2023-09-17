import React, { useCallback } from 'react';
import './SelectEvents.scss';
import { Button, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';


type Props = {
    events: Array<{id: string; eventName: string}>;
}

const SelectEvents = (props: Props) => {
    const { events } = props;

    const handleGenerate = useCallback(() => {

    }, []);

    return (
        <div className="select-events">
            <div className="handler"></div>
            <FormControl className="form">
                <RadioGroup row={false}>
                    {events.map(({id, eventName}: {id: string; eventName: string}) => <FormControlLabel
                        key={id}
                        value={id}
                        control={<Radio />}
                        label={eventName}
                        labelPlacement="start"
                    />)}
                </RadioGroup>
            </FormControl>
            <Button className="generate" variant="contained" onClick={handleGenerate}>去生成</Button>
        </div>
    );
}

export default SelectEvents;