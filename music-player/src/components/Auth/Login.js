import React, { Component } from 'react';
import './Login.css';
import { reducer as formReducer, reduxForm, Field } from 'redux-form';
import { combineReducers } from 'redux';
import FormComp from './FormComp';



class Login extends Component {

    submit = values => {
        console.log(values);
    };

    render() {
        return (
            <FormComp onSubmit={this.submit}/>
    );
    }
}

export default Login;