import React from 'react';
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
import { Input } from '@mui/material';
import { Formik } from 'formik';
const ariaLabel = { 'aria-label': 'description' };
const LoginFormik = () => (
    <div>
        <h1>Login with Formik</h1>
        <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
                <form onSubmit={handleSubmit}>
                    <label htmlFor='email'> Email</label>
                    <Input defaultValue="Email"
                        type="email"
                        id='email'
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        inputProps={ariaLabel} />
                    <br></br>
                    {errors.email && touched.email && errors.email}
                    <br></br>
                    <label htmlFor='Password'> Password</label>

                    <Input defaultValue="Password"
                        type="password"
                        id='password'
                        name="passowrd"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        inputProps={ariaLabel} />
                    <br></br>
                    {errors.password && touched.password && errors.password}
                    <br></br>
                    <Button variant="contained" type="submit" color="primary" disabled={isSubmitting} >
                        submit    </Button>
                </form>
            )}
        </Formik>
    </div>
);
ReactDOM.render(<LoginFormik />, document.querySelector('#LoginFormik'));

export default LoginFormik;
