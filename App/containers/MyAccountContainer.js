import React from 'react';
import { Button,Text, View, Image } from 'react-native' 
import {connect} from 'react-redux'
import { getMyAccountRequest } from '../redux/reducers/myAccountReducer'
import { getEditRequest } from '../redux/reducers/editProfilReducer'
import Profil from '../components/profil'
import Form from '../components/form'
import MyInput from '../components/myInput'
import { Formik } from 'formik'
import ImagePicker from 'react-native-image-crop-picker'
import RNFetchBlob from 'rn-fetch-blob'
import api from '../config/api'

let INITIAL_VALUES={
    nom : '',
    prenom:''
}
class MyAccountContainer extends React.Component {
    state={
        showForm: false, 
        showImage: false,
        image: {}
    }
    componentDidMount(){
        this.props.getMyAccount()
        console.log('authorization', api.headers.Authorization)
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
    sendImage = () =>{
        RNFetchBlob.fetch('POST', 'https://formation-api.k8s.svc.idee.cloud/api/users/edit', {
        Authorization : api.headers.Authorization,
        'Dropbox-API-Arg': JSON.stringify({
        path : this.state.image.path,
        mode : this.state.image.mime,
        autorename : true,
        mute : false
        }),
        'Content-Type' : 'application/octet-stream',
        }, RNFetchBlob.wrap(this.state.image.path))
        .then((res) => {
        console.log(res.text())
    })
    .catch((err) => {
        console.log(err)
        // error handling ..
    })
    }
    onSubmit = (e)=>{
      this.props.getMyEdit(e)
    }
    selectPhoto=()=>{
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            this.setState({showImage:true, image: image}),
            console.log(image);
          });
          
    }
    
    
    render() {
        console.log('edit', this.state.imagepath)
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
                                    {this.state.showImage &&
                                        <Image
                                            style={{width: 100, height: 100}}
                                            source={{uri :this.state.image.path}}
                                        />
                                    }
                                    
                                    
                                    <Button 
                                        title="Choisir une image"
                                        onPress={this.selectPhoto}
                                    />
                                     <Button 
                                        title="send une image"
                                        onPress={this.sendImage}
                                    />
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