import React, {Component} from 'react';
import {ActivityIndicator} from "react-native";

class Loader extends Component {
    render() {
        return (
            <ActivityIndicator size={this.props.size} color="#0000ff"/>
        );
    }
}

export default Loader;