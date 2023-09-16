import React from 'react';
import './SelectEvents.scss';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';

const SelectEvents = () => {
    return (
        <div className="select-events">
            <FormControl className="select-events">
                    <RadioGroup row={false}>
                        <FormControlLabel
                            value="start"
                            control={<Radio />}
                            label="Start"
                            labelPlacement="start"
                        />
                        <FormControlLabel
                            value="start"
                            control={<Radio />}
                            label="Start"
                            labelPlacement="start"
                        />
                        <FormControlLabel
                            value="start"
                            control={<Radio />}
                            label="Start"
                            labelPlacement="start"
                        />
                        <FormControlLabel
                            value="start"
                            control={<Radio />}
                            label="Start"
                            labelPlacement="start"
                        />
                    </RadioGroup>
                </FormControl>
        </div>
    );
}

export default SelectEvents;