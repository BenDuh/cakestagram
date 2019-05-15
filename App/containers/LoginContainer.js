import React, { Component } from 'react';
import { Button, Text, View, KeyboardAvoidingView, StatusBar } from 'react-native'
import { Header } from 'react-navigation';
import Form from '../components/form'
import MyInput from '../components/myInput'
import {Formik} from 'formik'
import {LoginSchemaValidator} from '../validation/LoginSchemaValidator'
import { getSessionRequest } from '../redux/reducers/sessionReducer'
import {connect} from 'react-redux'

const INITIAL_VALUES = {
    email: 'test@test.fr',
    password: 'monkey75'
}
class LoginContainer extends Component {
    onSubmit = (e) => {
        this.props.getSession(e)
    }
    render() {
        return (
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" keyboardVerticalOffset={Header.HEIGHT + StatusBar.currentHeight}>
                <View>
                    <Formik
                        initialValues={INITIAL_VALUES}
                        onSubmit={this.onSubmit}
                        validationSchema={LoginSchemaValidator}>
                        {
                            ({handleChange,values,handleSubmit,...props})=>{
                                return(
                                    <Form>
                                        <MyInput label="email" placeHolder="Entrez votre email" name="email" type="email"/>
                                        <MyInput label="password" placeHolder="Entrez votre password" name="password" type="password"/>
                                        <Button title="Connexion" onPress={handleSubmit} color="black"/>
                                    </Form>
                                )
                            }
                        }
                    </Formik>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
    }
}
const mapDispatchToProps = {
    getSession: getSessionRequest
}


export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer);