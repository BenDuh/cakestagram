import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from "react-navigation"
import LoginContainer from "../containers/LoginContainer";
import TestContainer from "../containers/TestContainer";
import HomeContainer from "../containers/HomeContainer";
import SinglePostDetails from "../containers/SinglePostDetails";

const AppNavigator = createStackNavigator({
    Login: {
        screen: LoginContainer,
        navigationOptions: {
            title: 'Login'
        }
    },
    Test: {
        screen: TestContainer,
        navigationOptions: {
            title: 'Test'
        }
    },
    
}, {
        initialRouteName: 'Test',
        headerLayoutPreset: 'center',
    })

const HomeNavigator = createStackNavigator({
    Home: {
        screen: HomeContainer,
        navigationOptions: {
            title: 'Home'
        }
    },
    Commentdetail: {
        screen: SinglePostDetails,
        navigationOptions: {
            title: 'Post Details'
        }
    },
}, {
        initialRouteName: 'Home',
        headerLayoutPreset: 'center',
    })

const AppBottom = createSwitchNavigator({
    LoginStack: AppNavigator,
    HomeStack: HomeNavigator,
},
    {
        initialRouteName: 'HomeStack',
    }
);



export default createAppContainer(AppBottom);