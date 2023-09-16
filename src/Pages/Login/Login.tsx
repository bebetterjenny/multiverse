import React, { useCallback, useState } from 'react';
import './Login.scss';
import { Button, Divider, IconButton, TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Login = () => {
    const [loginType, setLoginType] = useState('mobile');

    const handleChange = useCallback((
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setLoginType(newAlignment);
    }, []);

    return (
        <div className="login">
            <div className="login-up">
                <div className="header">
                    <h2>登录账号</h2>
                    <div className="typo-secondary">您好，欢迎来到登录页面</div>
                </div>
                <div className="switch">
                    <ToggleButtonGroup
                        color="primary"
                        value={loginType}
                        exclusive
                        onChange={handleChange}
                        aria-label="login-type"
                    >
                        <ToggleButton value="mobile">手机号</ToggleButton>
                        <ToggleButton value="email">邮箱</ToggleButton>
                    </ToggleButtonGroup>
                </div>
                <div className="tel">
                    <IconButton sx={{ p: '10px' }} disableRipple={true}>
                        <span className="typo-secondary">86</span><ArrowDropDownIcon sx={{ fontSize: 'small' }} />
                    </IconButton>
                    <TextField
                        variant="standard"
                        sx={{ ml: 1, flex: 1 }}
                        size="small"
                        inputProps={{ 'aria-label': 'tel' }}
                    />
                </div>
                <div className="verification-code">
                    <Button variant="outlined">点击获取验证码</Button>
                </div>
            </div>
            <div className="login-line">
                <Divider />
                <div className="or typo-secondary">OR</div>
                <Divider />
            </div>
            <div className="login-down">
                <Button variant="outlined"><div className="wechat-icon"></div><span style={{width: '80%'}}>微信登录</span></Button>
                <div className="">
                    <span className="typo-secondary">还没有注册？</span><span>点击创建一个账户</span>
                </div>
            </div>
        </div>
    );
}

export default Login;