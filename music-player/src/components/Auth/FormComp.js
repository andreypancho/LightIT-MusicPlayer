import React from 'react';
import {reduxForm,Field} from "redux-form";
import { required } from "../../utils/validators";

const validate = values => {
    const errors = {};

    if(!values.email){
        errors.email = 'Required'
    } else if (values.email.length>15){
        errors.email = 'Must be 15 characters or less'
    }
    return errors;
};


let FormComp = props =>
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field name='email' component={renderField} type='email' validate={required}/>
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <Field
                name='password'
                component='input'
                type='password'
                validate={required}
            />
        </div>
        <button type='submit'>Login</button>
    </form>;


FormComp = reduxForm({
    form: 'login',
    validate,
})(FormComp);

export default FormComp;

const renderField = ({input, meta}) => {
    console.log(meta.error);
    return <div>
            <label htmlFor="email">Email</label>
            <input name='email' type="text" {...input}/>
           </div>
};

