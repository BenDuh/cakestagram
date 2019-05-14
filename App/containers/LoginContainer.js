import React, { Component } from 'react';
import { Button, Text, View, KeyboardAvoidingView, StatusBar } from 'react-native'
import { Header } from 'react-navigation';
import Form from '../components/form'
import MyInput from '../components/myInput'
import {Formik} from 'formik'
import {LoginSchemaValidator} from '../validation/LoginSchemaValidator'

const INITIAL_VALUES = {
    email: '',
    password: ''
}
class LoginContainer extends Component {

    onSubmit = () => {
        const bonjour = {
            bonjour: 'bonjour'
        }
        this.props.navigation.navigate('Home', bonjour)
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

export default LoginContainer;