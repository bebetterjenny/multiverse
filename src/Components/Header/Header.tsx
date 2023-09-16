import React, { useCallback, useMemo } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import './Header.scss';
import { Button, IconButton } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import MenuIcon from '@mui/icons-material/Menu';

type Props = {
    title: string;
    backUrl: string;
    bold?: boolean;
}

const Header = (props: Props) => {
    const { title, backUrl } = props;

    const navigate = useNavigate();
    const location = useLocation();

    const topRightFunctiion = useMemo(() => {
        switch (location.pathname.split('/').at(-1)) {
            case 'select-metaverse':
                return "menu";
                break;
            case 'metaverse':
                return "share"
                break;
            case 'day':
                return "share"
                break;
        }
    }, [location.pathname]);

    const titleBold = useMemo(() => {
        switch (location.pathname.split('/').at(-1)) {
            case 'select-metaverse':
                return true;
                break;
            case 'metaverse':
                return false;
                break;
            case 'day':
                return true;
                break;
        }
    }, [location.pathname]);


    const handleBack = useCallback(() => {
        backUrl && navigate(backUrl);
    }, [backUrl, navigate]);

    const handleOpenMenu = useCallback(() => {

    }, [backUrl, navigate]);

    const handleShare = useCallback(() => {

    }, [backUrl, navigate]);

    return (
        <div className="header">
            <ArrowBackIcon fontSize="medium" sx={{ color: "black", marginLeft: '-5px' }} onClick={handleBack} />
            <div className={`title${titleBold ? ' bold' : ''}`}>{title}</div>
            {topRightFunctiion === 'menu' && <svg className="circle" width="92" height="37" viewBox="0 0 92 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M58.3154 7.28072C54.5005 4.57311 40.2405 1.96395 13.7202 13.1882C-19.4302 27.2186 22.0078 35.7107 27.9275 35.7107C33.8473 35.7107 70.9442 39.0336 87.914 23.1572C101.49 10.456 66.9977 3.09621 48.0546 1.00395C37.3991 0.880878 13.0888 3.58849 1.09148 15.4035" stroke="#FA6218" strokeWidth="2" strokeLinecap="round" />
            </svg>}
            {topRightFunctiion === 'menu' && <MenuIcon fontSize="medium" sx={{ color: "black", marginLeft: '-5px' }} onClick={handleOpenMenu} />}
            {topRightFunctiion === 'share' && <ShortcutIcon fontSize="medium" sx={{ color: "black", marginLeft: '-5px' }} onClick={handleShare} />}
        </div>
    );
}

export default Header;
