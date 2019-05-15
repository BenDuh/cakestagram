import React, { Component } from 'react'
import AppNavigator from '../navigation/NavigationApp'
import NavigationService from '../navigation/NavigationService'

class RootContainer extends Component {
    render() {
        return (
            <AppNavigator
                ref={navigatorRef => {
                    NavigationService.setTopLevelNavigator(navigatorRef);
              }}
            />
        );
    }
}

export default RootContainer;