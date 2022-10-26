import { Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { MuiVariables, useStyles } from '../../App';
import { useTranslation } from 'react-i18next'

function SignInContent() {
    const { t } = useTranslation(['page'])
    // const onChangeLang = () => {
    //     i18n.changeLanguage('ko')
    // }
    const [remeberMeCheck, setRememberMeCheck] = useState(false);
    const [userId, setUserId] = useState("");
    const [userPass, setUserPass] = useState("");

    function checkboxOnChange(
        event: React.ChangeEvent<HTMLInputElement>,
        checked: boolean
    ) {
        setRememberMeCheck(checked);
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, valueSetter: Function, validationFunc?: Function) => {
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
    const mainText = t('page:signIn_mainText');
    const subText = t('page:signIn_subText');
    const loginBtnText = t('page:signIn_login_btnText');
    const idInputLabel = t('page:signIn_idInputLabel');
    const idInputPlaceholder = t('page:signIn_idInputPlaceholder');
    const idInputHelperText = t('page:signIn_idInputHelperText');
    const passwordInputLabel = t('page:signIn_passwordInputLabel');
    const passwordInputPlaceholder = t('page:signIn_passwordInputPlaceholder');
    const passwordInputHelperText = t('page:signIn_passwordInputHelperText');
    const rememberMeText = t('page:signIn_rememberMeText');
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
                            <form onSubmit={(e) => onSubmit(e, () => { setUserId(''); setUserPass('') })}>
                                <TextField
                                    autoFocus
                                    required

                                    label={idInputLabel}
                                    helperText={idInputHelperText}
                                    variant={MuiVariables.TextField.variant.outlined}
                                    placeholder={idInputPlaceholder}
                                    onChange={(e) => onChange(e, setUserId)}
                                    className={`${classes.width100P}`}
                                    // error={!(chatlinkValid && !getChatlinkState.error)}
                                    value={userId}
                                />
                                <TextField
                                    autoFocus
                                    required
                                    label={passwordInputLabel}
                                    helperText={passwordInputHelperText}
                                    variant={MuiVariables.TextField.variant.outlined}
                                    placeholder={passwordInputPlaceholder}
                                    onChange={(e) => onChange(e, setUserPass)}
                                    className={`${classes.width100P}`}
                                    // error={!(chatlinkValid && !getChatlinkState.error)}
                                    value={userPass}
                                />
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
                                    label={rememberMeText}
                                />

                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    // onClick={() => { alert(t('page:test')) }}
                                    className={`${classes.signIn_Btn} ${classes.width100P}`}
                                >
                                    {loginBtnText}
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