import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import './Input.scss';
import AutorenewIcon from '@mui/icons-material/Autorenew';

type Props = {
    loading: boolean;
    onSubmitIdea: () => void;
}

const Input = (props: Props) => {
    const { loading, onSubmitIdea } = props;

    const handleSubmit = useCallback(() => {
        onSubmitIdea();
    }, [onSubmitIdea]);


    return (
        <FormControl id="event-input" sx={{ m: 1, width: '25ch' }} variant="outlined" disabled={loading}>
            <InputLabel htmlFor="outlined-adornment-password">输入你想要干的事情</InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                type='text'
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            onClick={handleSubmit}
                            edge="end"
                        >
                            {!loading && <SendIcon fontSize="small" sx={{color: 'black'}} />}
                            {loading && <AutorenewIcon className='rotating' fontSize="small" sx={{color: 'grey'}} />}
                        </IconButton>
                    </InputAdornment>
                }
                label="输入你想要干的事情"
            />
        </FormControl>
    );
}

export default Input;