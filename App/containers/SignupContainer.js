import React, { Component } from 'react';
import { View, KeyboardAvoidingView, StyleSheet, Text } from 'react-native'
import { Header } from 'react-navigation';
import Form from '../components/form'
import MyInput from '../components/myInput'
import { Formik } from 'formik'
import { SignupSchemaValidator } from '../validation/LoginSchemaValidator'
import { getSignupRequest } from '../redux/reducers/signupReducer'
import { connect } from 'react-redux'
import { Button } from 'react-native-elements';

const INITIAL_VALUES = {
    nom: 'fdsfdq',
    prenom: 'sdqqsd',
    email: 'fdqsf@sdf.fr',
    password: 'qsfdfqfsd'

}
class SignupContainer extends Component {
    onSubmit = (e) => {
        this.props.getSignup(e)
    }

    render() {
        console.log('error', this.props.error)
        return (
            <KeyboardAvoidingView style={{ flex: 1, backgroundColor: '#2bcbba', paddingHorizontal: 15 }} behavior="padding" keyboardVerticalOffset={Header.HEIGHT + 40}>
                <View>
                    <Formik
                        initialValues={INITIAL_VALUES}
                        onSubmit={this.onSubmit}
                        validationSchema={SignupSchemaValidator}>
                        {
                            ({ handleChange, values, handleSubmit, ...props }) => {
                                return (
                                    <Form>
                                        <MyInput label="Nom" placeHolder="Entrez votre nom" name="nom" type="text" />
                                        <MyInput label="Prénom" placeHolder="Entrez votre prénom" name="prenom" type="text" />
                                        <MyInput label="Email" placeHolder="Entrez votre email" name="email" type="email" />
                                        <MyInput label="password" placeHolder="Entrez votre password" name="password" type="password" />
                                        {this.props.error != '' &&
                                            <View style={styles.error}>
                                                <Text style={styles.errorText}>{this.props.error}</Text>
                                            </View>
                                        }
                                        <View style={{alignItems: 'center', marginTop: 20}}>
                                            <Button
                                                title="Créer votre compte"
                                                onPress={handleSubmit}
                                                buttonStyle={{ backgroundColor: '#4b6584', width: 200, marginBottom: 20 }} />
                                        </View>

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



const mapStateToProps = (state) => {
    return {
        error: state.signupReducer.error
    }
}
const mapDispatchToProps = {
    getSignup: getSignupRequest
}

const styles = StyleSheet.create({
    error: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 13
    },
    errorText: {
        color: 'red',
        fontSize: 16
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer);