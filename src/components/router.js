import React from 'react';
import {createStackNavigator} from 'react-navigation';
import Home from './home';
import Welcome from './welcome';

const RootStack = createStackNavigator({
    Welcome: Welcome,
    Home: Home
},{
    initialRouteName: 'Welcome'
})

export default RootStack;