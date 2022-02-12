import React, { useState } from "react"
import { validEmail} from './regex.js';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Input from '@mui/material/Input';

export default function Login() {
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
        showPassword: false,
    });
    const handleClickShowPassword = () => {
        setFormValues({ ...formValues, showPassword: !formValues.showPassword });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handlePasswordChange = (prop) => (event) => {
        switch(event.target.name){
            case "password":
                console.log("password")
                setFormValues({
                    ...formValues,
                    password: event.target.value,
                });
                setFormValErrors({
                    ...formValErrors,
                    passwordErr:
                    event.target.value.length=== 0
                    ? "Password is required "
                       :(! event.target.value.length >= 8)
                            ? "password should be at least 8 characters"
                            : null,
                });
                break;
            default:
                break;
        }
    };
    const [formValErrors, setFormValErrors] = useState({
        // EmailErr: null,
        passwordErr: null,
    });
    const [formValuesErrors, setFormValuesErrors] = useState({
        EmailErr: null,
        // passwordErr: null,
    });

    const handleFormChange = (event) => {
        console.log(event.target)
        switch (event.target.name) {
            case "email":
                setFormValues({
                    ...formValues,
                    email: event.target.value,
                });
                setFormValuesErrors({
                    ...formValuesErrors,
                    EmailErr:
                    (event.target.value.length) === 0
                    ? "Email is required "
                         :!validEmail.test(event.target.value) === true
                            ? "Email is wrong"
                            : null,
                });
            //     break;
            // case "password":
            //     console.log("password")
            //     setFormValues({
            //         ...formValues,
            //         password: event.target.value,
            //     });
            //     console.log( event.target.value.length===0)
            //     setFormValuesErrors({
            //         ...formValuesErrors,
            //         passwordErr:
            //         event.target.value.length=== 0
                  
            //         ? "Password is required "
            //            : !(event.target.value.length) === 8
            //                 ? "password should be at least 8 characters"
            //                 : null,

            //     });
                break;
            default:
                break;
        }
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        if (
            !formValuesErrors.EmailErr &&
            !formValErrors.passwordErr
        ) {
            console.log(formValues);
        }
    };
    return (
        <div className="d-flex  justify-content-center">

            <form className="col-3"
                onSubmit={(e) => handleSubmitForm(e)}   >
                <div className="col">
                    <h2>Login </h2>
                    <label htmlFor="EmailInput" className="form-label">
                        Email              </label>
                    <Input
                        type="Email"
                        className="form-control"
                        id="EmailInput"
                        aria-describedby="EmailHelp"
                        value={formValues.email}
                        onChange={(e) => handleFormChange(e)}
                        name="email"
                    />
                    {formValuesErrors.EmailErr && (
                        <div id="EmailHelp" className="form-text text-danger">
                            {formValuesErrors.EmailErr}
                        </div>
                    )}
                </div>
                <div className="col">
                    <label htmlFor="passwordInput" className="form-label">
                        password
                    </label>
                    <Input
                        type={formValues.showPassword ? "text" : "password"}
                        className="form-control"
                        id="passwordInput"
                        aria-describedby="passwordHelp"
                        value={formValues.password}
                        onChange={handlePasswordChange("password")}
                        name="password"
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {formValues.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    {formValErrors.passwordErr && (
                        <div id="passwordHelp" className="form-text text-danger">
                            {formValErrors.passwordErr}
                        </div>
                    )}
                </div>
                <br></br>
                <button
                    type="submit"
                    disabled={
                        formValuesErrors.EmailErr ||
                        formValErrors.passwordErr                     
                    }
                    className="btn btn-primary"
                >
                    Submit
                </button>



            </form>

        </div>
    )
}
