import React from 'react';
import { Button,Text, View } from 'react-native' 
import {connect} from 'react-redux'
import { getMyAccountRequest } from '../redux/reducers/myAccountReducer'
import { getEditRequest } from '../redux/reducers/editProfilReducer'
import Profil from '../components/profil'
import Form from '../components/form'
import MyInput from '../components/myInput'
import { Formik } from 'formik'

let INITIAL_VALUES={
    nom : '',
    prenom:''

}
class MyAccountContainer extends React.Component {
    state={
        showForm: false
    }
    componentDidMount(){
        this.props.getMyAccount()
    }
    onEditPress = ()=>{
this.setState({
    showForm:true
})
INITIAL_VALUES={
nom: this.props.account.last_name,
prenom: this.props.account.first_name,

}
    }

    onSubmit = (e)=>{
      this.props.getMyEdit(e)
    }
    
    
    render() {
        console.log('edit', this.props)
        return (
            <View>
                <Profil user={this.props.account}/>
                <Button 
                title="Editer mon profil"
                onPress={this.onEditPress}/>
                {
                    this.state.showForm &&  
                    <Formik
                    initialValues={INITIAL_VALUES}
                    onSubmit={this.onSubmit}
                    // validationSchema={LoginSchemaValidator}
                    >
                    {
                        ({ handleChange, values, handleSubmit, ...props }) => {
                            return (
                                <Form>
                                    <MyInput label="Nom" placeHolder="Entrez votre nom" name="nom" type="text" />
                                    <MyInput label="Prénom" placeHolder="Entrez votre prénom" name="prenom" type="text" />
                                    <MyInput label="Password" placeHolder="Entrez votre nouveau password " name="password" type="password" />
                                    <View style={{ alignItems: 'center' }}>
                                        <Button
                                            title="Editer"
                                            onPress={handleSubmit}
                                            buttonStyle={{ backgroundColor: '#4b6584', width: 200, marginBottom: 20 }} />
                                    </View>

                                </Form>
                            )
                        }
                    }
                </Formik>
                }
            </View>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        account: state.myAccountReducer.account
    }
}
const mapDispatchToProps = {
    getMyAccount: getMyAccountRequest,
    getMyEdit : getEditRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(MyAccountContainer);