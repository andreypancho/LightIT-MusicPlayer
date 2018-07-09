import React from 'react';
import {reduxForm,Field} from "redux-form";

let FormComp = props =>
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field name='email' component={renderField} type='email'/>
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <Field name='password' component='input' type='password'/>
        </div>
        <button type='submit'>Login</button>
    </form>;


FormComp = reduxForm({
    form: 'login',
})(FormComp);

export default FormComp;

const renderField = ({input, meta}) => {
    console.log(input);
    return <div>
            <label htmlFor="email">Email</label>
            <input name='email' type="text" {...input}/>
           </div>
};