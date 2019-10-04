import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, ActivityIndicator} from 'react-native';
import style from './style';
import Loader from "../Loader";


class MyText extends Component {

    state = {
        show: false,
        loading: true
    };

    componentDidMount() {
        setTimeout(() => this.setState({loading: false}), 3000);

    }

    // componentWillMount() {
    //     console.log('componentWillMount');
    // }

    _updateState = () => {
        this.setState(prevState => {
            return {
                ...prevState,
                show: !prevState.show
            };
        });
    };

    _showBody = () => (
        <View>
            {this.state.show ? <Text style={style.text}>Hello world</Text> : null}
            <Button title={'click me'} onPress={this._updateState}/>
        </View>
    )

    render() {
        console.log('render');
        return (
            this.state.loading ? <Loader size="small"/> : this._showBody()
        );
    }
}

export default MyText;