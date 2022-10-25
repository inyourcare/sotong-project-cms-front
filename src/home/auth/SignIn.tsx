import { Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useStyles } from '../../App';
import { useTranslation } from 'react-i18next'
import i18n from "i18next";

function SignInContent() {
    const { t } = useTranslation(['page'])
    const onChangeLang = () => {
        i18n.changeLanguage('ko')
    }

    const [mainText] = useState(
        // "8명까지 함께 그룹 영상통화해요 ⚡️ 시간 제한 없이 무료로 즐기세요"
        "그룹영상통화 스무디"
    );
    const [subText] = useState("8명까지 시간제한없이 무료로! 지금 바로 웹에서 만나보세요");
    const [remeberMeCheck, setRememberMeCheck] = useState(false);
    const [userId, setUserId] = useState("");
    const [userPass, setUserPass] = useState("");

    function checkboxOnChange(
        event: React.ChangeEvent<HTMLInputElement>,
        checked: boolean
    ) {
        setRememberMeCheck(checked);
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>, valueSetter: Function, validationFunc?: Function) => {
        const value = e.target.value;
        if (validationFunc && validationFunc(value)) {
            valueSetter(value);
        } else {
            valueSetter(value);
        }
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>, functionCall: Function) => {
        e.preventDefault();
        e.currentTarget.setAttribute('disabled', '')
        functionCall();
        e.currentTarget.removeAttribute('disabled')
    };

    // const theme = useTheme();
    const classes = useStyles();
    const i18nTestWord = t('page:test');
    return (<>
        <Grid container component="main" className={`${classes.height100vh}`}>
            <Grid item xs={false} sm={4} md={7} className={`${classes.signIn_sideImage}`} />
            <Grid item xs={12} sm={8} md={5} className={`${classes.alignCenterBasic}`}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={`${classes.alignCenterBasic}`}>
                        <Typography
                            component="h1"
                            variant="h6"
                            className={`${classes.alignCenterBasic}`}
                        >
                            {/* 8명까지 함께 그룹 영상통화해요 ⚡️ 시간 제한 없이 무료로 즐기세요 */}
                            {mainText}
                        </Typography>


                        <Typography
                            component="h3"
                            variant="caption"
                            className={`${classes.alignCenterBasic}`}
                        >
                            {subText}
                        </Typography>
                        <div className={`${classes.marginTop3} ${classes.width100P} ${classes.alignCenterBasic}`}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={remeberMeCheck}
                                        id="remember-me-checkbox"
                                        value="remember"
                                        color="primary"
                                        onChange={(e, checked) => checkboxOnChange(e, checked)}
                                    />
                                }
                                label="Remember me"
                            />
                            <form onSubmit={(e)=>onSubmit(e,()=>{setUserId('');setUserPass('')})}>
                                <input
                                    placeholder={"enter your id"}
                                    onChange={(e) => onChange(e, setUserId)}
                                    value={userId}
                                />
                                <input
                                    placeholder={"enter your password"}
                                    onChange={(e) => onChange(e, setUserPass)}
                                    value={userPass}
                                />

                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    // onClick={() => { alert(t('page:test')) }}
                                    className={`${classes.signIn_Btn} ${classes.width100P}`}
                                >
                                    {i18nTestWord}
                                </Button>
                            </form>
                        </div>
                    </div>
                </Container>

            </Grid>
        </Grid>
    </>)
}
export default function SignIn() {
    return <SignInContent />;
}