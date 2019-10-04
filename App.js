import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import MyText from "./src/components/Text";
import HomeScreen from "./src/Screen/Home";
import DetailsScreen from "./src/Screen/Details";
import Login from "./src/components/Login";
import {Button} from "react-native";

const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen,
        login:Login,
    },
    {
        initialRouteName: 'Home',
    }
);
const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
    render() {
        return <AppContainer/>;
    }
}
