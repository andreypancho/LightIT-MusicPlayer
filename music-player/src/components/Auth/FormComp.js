import React from 'react';
import {reduxForm,Field} from "redux-form";

let FormComp = props =>
    <form onSubmit={props.handleSubmit}>
        <div>
            <label htmlFor="email">Email</label>
            <Field name='email' component='input' type='email'/>
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <Field name='password' component='input' type='password'/>
        </div>
        <button type='submit'>Login</button>
    </form>


FormComp = reduxForm({
    form: 'login',
})(FormComp);

export default FormComp;