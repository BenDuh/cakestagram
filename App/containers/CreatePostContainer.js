import React, { Component } from 'react';
import {Button,View,Text,KeyboardAvoidingView} from 'react-native'
import {Formik} from 'formik'
import { LoginSchemaValidator } from '../validation/LoginSchemaValidator'
import Form from '../components/form'
import MyInput from '../components/myInput'
import { Header } from 'react-navigation';
import { connect } from 'react-redux'
import { getPostRequest } from "../redux/reducers/postReducer";


const INITIAL_VALUES = {
    title:''
}

    
class CreatePostContainer extends Component {
    onSubmit = (e) => {
        this.props.getPost(e)
}
    render() {
        return (
            <KeyboardAvoidingView  behavior="padding" keyboardVerticalOffset={Header.HEIGHT + 40}>
            <View>
                <Text>Poster ici</Text>
            </View>
            <Formik
            initialValues={INITIAL_VALUES}
            onSubmit={this.onSubmit}
            //validationSchema={}
            >
            {
                            ({ handleChange, values, handleSubmit, ...props }) => {
                                return (
                                    <Form>
                                        <MyInput label="Titre" placeHolder="Entrez votre titre" name="title" type="text" />
                                        <Button title="Poster" onPress={handleSubmit}></Button>
                                    </Form>
                                )
                            }
                        }
            </Formik>
            </KeyboardAvoidingView>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
    }
}
 const mapDispatchToProps = {
     getPost : getPostRequest
 }

export default connect(mapStateToProps,mapDispatchToProps)(CreatePostContainer)