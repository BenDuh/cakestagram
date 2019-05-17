import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator, TabBarBottom } from "react-navigation"
import LoginContainer from "../containers/LoginContainer";
import HomeContainer from "../containers/HomeContainer";
import SinglePostDetails from "../containers/SinglePostDetails";
import ConversationContainer from "../containers/ConversationContainer";
import SignupContainer from "../containers/SignupContainer";
import UserContainer from '../containers/UserContainer';
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import ChatContainer from "../containers/ChatContainer";
import MyAccountContainer from "../containers/MyAccountContainer";
import CreatePostContainer from "../containers/CreatePostContainer";

const AppNavigator = createStackNavigator({
    Login: {
        screen: LoginContainer,
        navigationOptions: {
            title: 'Login'
        },
    },
    Signup: {
        screen: SignupContainer,
        navigationOptions: {
            title: 'Signup'
        }
    }
}, {
        initialRouteName: 'Login',
        headerLayoutPreset: 'center',
    })

const ConversationNavigator = createStackNavigator({
    Conversation: {
        screen: ConversationContainer,
        navigationOptions: {
            title: 'Conversation'
        }
    },Chat: {
        screen: ChatContainer,
        nagigationOptions: {
            title: 'Chat'
        }
    },Users: {
        screen: UserContainer,
        nagigationOptions: {
            title: 'Users'
        }
    }
    }, {
        initialRouteName: 'Conversation',
        headerLayoutPreset: 'center',
})

const ProfileNavigator = createStackNavigator({
    MyAccount: {
        screen: MyAccountContainer,
        navigationOptions: {
            title: 'MyAccount'
        }
    }
    }, {
        initialRouteName: 'MyAccount',
        headerLayoutPreset: 'center',
})

const PostNavigator = createStackNavigator({
    Poster:{
        screen:CreatePostContainer,
        navigationOptions:{
            title:'Poster'
        }
    }
})
const HomeNavigator = createStackNavigator({
    Home: {
        screen: HomeContainer,
        navigationOptions: {
            title: "Fil d'actualité"
        }
    },
    Commentdetail: {
        screen: SinglePostDetails,
        navigationOptions: {
            title: 'Commentaires du post'
        }
    },
    
    Profile: {
        screen: UserContainer,
        navigationOptions: {
            title: 'Users'
        }
    }
    }, {
        initialRouteName: 'Home',
        headerLayoutPreset: 'center',
})

const TabNavigator =  createBottomTabNavigator({
        Home: HomeNavigator,
        Conversation: ConversationNavigator,
        Poster: PostNavigator,
        Profil: ProfileNavigator
        
        
    },
    {defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            let color;
            if (routeName === 'Home') {
                iconName = `home`
                color = `${focused ? 'white' : '#2bcbba'}`
            } else if (routeName === 'Conversation') {
                iconName = 'comment-dots'
                color = `${focused ? 'white' : '#2bcbba'}`
            } else if (routeName === 'Profil') {
                iconName = 'user'
                color = `${focused ? 'white' : '#2bcbba'}`
            }
            else if (routeName === 'Poster') {
                iconName = 'plus'
                color = `${focused ? 'white' : '#2bcbba'}`
            }
        return <Icon name={iconName} size={24} color={color} />}
    }),
    tabBarOptions: {
        activeTintColor: 'white',
        activeBackgroundColor : "#2bcbba",
        labelStyle: {
            fontSize: 14,
        },
        style: {
            backgroundColor: 'white',
        },
        },
      initialRouteName : 'Home'
    });
const AppBottom = createSwitchNavigator({
    LoginStack: AppNavigator,
    HomeStack: TabNavigator,
},
    {
    initialRouteName: 'LoginStack',
    }
);


export default createAppContainer(AppBottom);