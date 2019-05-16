import React, { Component } from 'react';
import { Text, View, KeyboardAvoidingView, StatusBar, StyleSheet, Image } from 'react-native'
import { Header } from 'react-navigation';
import Form from '../components/form'
import MyInput from '../components/myInput'
import { Formik } from 'formik'
import { LoginSchemaValidator } from '../validation/LoginSchemaValidator'
import { getSessionRequest } from '../redux/reducers/sessionReducer'
import { connect } from 'react-redux'
import stylesSheet from '../theme/styles'
import logo from '../images/logo-cakestagram-blanc.png'
import { Button } from 'react-native-elements';

const INITIAL_VALUES = {
    email: 'test@test.fr',
    password: ''
}
class LoginContainer extends Component {
    onSubmit = (e) => {
        this.props.getSession(e)
    }
    toSignUp = () => {
        this.props.navigation.navigate('Signup')
    }
    render() {
        console.log(this.props.error)
        return (
            <KeyboardAvoidingView style={[stylesSheet.homeConnexion, { flex: 1 }]} behavior="padding" keyboardVerticalOffset={Header.HEIGHT + 40}>
                <View>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={logo} style={{ height: 80, width: 300 }} />
                    </View>

                    <Formik
                        initialValues={INITIAL_VALUES}
                        onSubmit={this.onSubmit}
                        validationSchema={LoginSchemaValidator}>
                        {
                            ({ handleChange, values, handleSubmit, ...props }) => {
                                return (
                                    <Form>
                                        <MyInput label="Email" placeHolder="Entrez votre email" name="email" type="email" />
                                        <MyInput label="Password" placeHolder="Entrez votre password" name="password" type="password" />
                                        {this.props.error != '' &&
                                            <View style={styles.error}>
                                                <Text style={styles.errorText}>{this.props.error}</Text>
                                            </View>
                                        }
                                        <View style={{ alignItems: 'center' }}>
                                            <Button
                                                title="Connexion"
                                                onPress={handleSubmit}
                                                buttonStyle={{ backgroundColor: '#4b6584', width: 200, marginBottom: 20 }} />
                                        </View>

                                    </Form>
                                )
                            }
                        }
                    </Formik>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Button
                        title='Créer un compte'
                        onPress={this.toSignUp}
                        buttonStyle={{ backgroundColor: '#0fb9b1', width: 200 }}
                    />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        error: state.sessionReducer.error
    }
}
const mapDispatchToProps = {
    getSession: getSessionRequest
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);