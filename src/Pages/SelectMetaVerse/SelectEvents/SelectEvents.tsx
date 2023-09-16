import React from 'react';
import './SelectEvents.scss';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';


type Props = {
    events: string[];
}

const SelectEvents = (props: Props) => {
    const { events } = props;


    return (
        <div className="select-events">
            <div className="handler"></div>
            <FormControl className="form">
                <RadioGroup row={false}>
                    {events.map((event: string) => <FormControlLabel
                        value={event}
                        control={<Radio />}
                        label={event}
                        labelPlacement="start"
                    />)}
                </RadioGroup>
            </FormControl>
        </div>
    );
}

export default SelectEvents;