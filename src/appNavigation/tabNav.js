import React, { Component } from 'react';
import { TabNavigator, TabView } from 'react-navigation'
import Icon from "react-native-vector-icons/FontAwesome";
import stackNav from './stackNav';

const tabNav = TabNavigator({
    TabItem1: {
        screen: stackNav,
        navigationOptions: {
            tabBarLabel:"Tab 1",
            tabBarIcon: ({ tintColor }) => <Icon name={"glass"} size={30} color={tintColor} />
        }
    },
    TabItem2: {
        screen: stackNav,
        navigationOptions: {
            tabBarLabel:"Tab 1",
            tabBarIcon: ({ tintColor }) => <Icon name={"glass"} size={30} color={tintColor} />
        }
    }

    ///... add more tabs here

}, {
        tabBarOptions: {
            activeTintColor: '#222',
        },
        tabBarPosition: 'bottom',

});

export default tabNav;