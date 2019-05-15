import React, { Component } from 'react';
import { Button, Text, View, KeyboardAvoidingView, StatusBar, StyleSheet } from 'react-native'
import { Header } from 'react-navigation';
import Form from '../components/form'
import MyInput from '../components/myInput'
import {Formik} from 'formik'
import {LoginSchemaValidator} from '../validation/LoginSchemaValidator'
import { getSessionRequest } from '../redux/reducers/sessionReducer'
import {connect} from 'react-redux'

const INITIAL_VALUES = {
    email: 'test@test.fr',
    password: ''
}
class LoginContainer extends Component {
    onSubmit = (e) => {
        this.props.getSession(e)
    }
    toSignUp = () =>{
        this.props.navigation.navigate('Signup')
    }
    render() {
        console.log(this.props.error)
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
                                        {this.props.error != '' &&
                                        <View style={styles.error}>
                                            <Text style={styles.errorText}>{this.props.error}</Text>
                                        </View>
                                    }
                                        <Button title="Connexion" onPress={handleSubmit} color="black"/>
                                    </Form>
                                )
                            }
                        }
                    </Formik>
                </View>
                <Button title='Press me to signup' onPress={this.toSignUp}/>
            </KeyboardAvoidingView>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        error: state.sessionReducer.error
    }
}
const mapDispatchToProps = {
    getSession: getSessionRequest
}

const styles = StyleSheet.create({
    error: {
      width:'100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 13
    },
    errorText: {
        color: 'red',
        fontSize: 16
    }
  });

export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer);