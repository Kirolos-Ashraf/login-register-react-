import React, { useState } from "react"
import { validEmail, validPassword, nospaces } from './regex.js';


export default function Register() {

    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        password: "",
        username: "",
        repeatPass: "",
    });
    const [formValuesErrors, setFormValuesErrors] = useState({
        EmailErr: null,
        passwordErr: null,
        nameErr: null,
        usernameErr: null,
        repeatPassErr: null,
    });

    const handleFormChange = (event) => {
        switch (event.target.name) {
            case "email":
                setFormValues({
                    ...formValues,
                    email: event.target.value,
                });
                setFormValuesErrors({
                    ...formValuesErrors,
                    EmailErr:
                        validEmail.test(event.target.value) === false
                            ? "Email is wrong"
                            : null,
                });
                break;
            case "password":
                setFormValues({
                    ...formValues,
                    password: event.target.value,
                });
                setFormValuesErrors({
                    ...formValuesErrors,
                    passwordErr:
                        (event.target.value.length) === 0
                            ? "password is required "
                            : validPassword.test(event.target.value) === false
                                ? "password is must contain *@%$#"
                                : null,
                });
                break;
            case "repeatPass":
                setFormValues({
                    ...formValues,
                    repeatPass: event.target.value,
                });
                setFormValuesErrors({
                    ...formValuesErrors,
                    repeatPassErr:
                        event.target.value.length === 0
                            ? " repeat password is required "
                            : event.target.value !== (formValues.password)
                                ? "password is not identical"
                                : null,
                });
                break;
            case "username":
                setFormValues({
                    ...formValues,
                    username: event.target.value,
                });
                console.log(nospaces.test(event.target.value === false))
                setFormValuesErrors({
                    ...formValuesErrors,
                    usernameErr:
                        (event.target.value.length) === 0
                            ? "username is required "
                            : !/^[\S]+$/.test(event.target.value)
                                ? "username must have no spaces"
                                : null,
                });
                break;
            case "name":
                setFormValues({
                    ...formValues,
                    name: event.target.value,
                });
                setFormValuesErrors({
                    ...formValuesErrors,
                    nameErr:
                        (event.target.value.length) === 0
                            ? "Name is required"
                            : null,
                });
                break;
            default:
                break;
        }
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        if (
            !formValuesErrors.EmailErr &&
            !formValuesErrors.usernameErr &&
            !formValuesErrors.nameErr &&
            !formValuesErrors.passwordErr
        ) {
            console.log(formValues);
        }
    };


    return (

        <div className="d-flex  justify-content-center">


            <form className="col-3"
                onSubmit={(e) => handleSubmitForm(e)}   >

                <div className="col">
                    <h2> Register</h2>


                    <label htmlFor="nameInput" className="form-label">
                        Name              </label>
                    <input
                        type="text"
                        className="form-control"
                        id="nameInput"
                        aria-describedby="nameHelp"
                        value={formValues.name}
                        onChange={(e) => handleFormChange(e)}
                        name="name"
                    />
                    {formValuesErrors.nameErr && (
                        <div id="nameHelp" className="form-text text-danger">
                            {formValuesErrors.nameErr}
                        </div>
                    )}
                </div>

                <div className="col">
                    <label htmlFor="usernameInput" className="form-label">
                        username
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="usernameInput"
                        aria-describedby="usernameHelp"
                        value={formValues.username}
                        onChange={(e) => handleFormChange(e)}

                        name="username"
                    />
                    {formValuesErrors.usernameErr && (
                        <div id="usernameHelp" className="form-text text-danger">
                            {formValuesErrors.usernameErr}
                        </div>
                    )}
                </div>
                <div className="col">
                    <label htmlFor="EmailInput" className="form-label">
                        Email              </label>
                    <input
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
                    <input
                        type="password"
                        className="form-control"
                        id="passwordInput"
                        aria-describedby="passwordHelp"
                        value={formValues.password}
                        onChange={(e) => handleFormChange(e)}

                        name="password"
                    />
                    {formValuesErrors.passwordErr && (
                        <div id="EmailHelp" className="form-text text-danger">
                            {formValuesErrors.passwordErr}
                        </div>
                    )}


                </div>
                <div className="col">
                    <label htmlFor="repeatPassInput" className="form-label">
                        Repeat Passowrd
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="repeatPassInput"
                        aria-describedby="repeatPassHelp"
                        value={formValues.repeatPass}
                        onChange={(e) => handleFormChange(e)}

                        name="repeatPass"
                    />
                    {formValuesErrors.passwordErr && (
                        <div id="repeatPassHelp" className="form-text text-danger">
                            {formValuesErrors.repeatPassErr}
                        </div>
                    )}


                </div>
                <br></br>
                <button
                    type="submit"
                    disabled={
                        formValuesErrors.EmailErr ||
                        formValuesErrors.passwordErr ||
                        formValuesErrors.repeatPass ||
                        formValuesErrors.username
                    }
                    className="btn btn-success"
                >
                    Register
                </button>
            </form>
        </div>
    )
}
