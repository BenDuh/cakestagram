import React, { Component } from 'react';
import { Button, Text, View, KeyboardAvoidingView, StatusBar, Image } from 'react-native'
import { Header } from 'react-navigation';
import Form from '../components/form'
import MyInput from '../components/myInput'
import {Formik} from 'formik'
import {SignupSchemaValidator} from '../validation/LoginSchemaValidator'
import {getSignupRequest} from '../redux/reducers/signupReducer'
import {connect} from 'react-redux'

const INITIAL_VALUES = {
    nom:'fdsfdq',
    prenom:'sdqqsd',
    email: 'fdqsf@sdf.fr',
    password: 'qsfdfqfsd'
    
}
class SignupContainer extends Component {

    onSubmit = (e) => {
        this.props.getSignup(e)
        
        //this.props.navigation.navigate('Home') A FAIRE DANS LA SAGA AVC NAV TOP LVL
    }
   
    render() {
        console.log(this.props)
        return (
            
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" keyboardVerticalOffset={Header.HEIGHT + 40}>
                <View>
                    <Formik
                        initialValues={INITIAL_VALUES}
                        onSubmit={this.onSubmit}
                        validationSchema={SignupSchemaValidator}>
                        {
                            ({handleChange,values,handleSubmit,...props})=>{
                                return(
                                    <Form>
                                        <MyInput label="Nom" placeHolder="Entrez votre nom" name="nom" type="text"/>
                                        <MyInput label="Prénom" placeHolder="Entrez votre prénom" name="prenom" type="text"/>
                                        <MyInput label="Email" placeHolder="Entrez votre email" name="email" type="email"/>
                                        <MyInput label="password" placeHolder="Entrez votre password" name="password" type="password"/>
                                        <Button title="Créer votre compte" onPress={handleSubmit} color="black"/>
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
    getSignup: getSignupRequest
}


export default connect(mapStateToProps,mapDispatchToProps)(SignupContainer);