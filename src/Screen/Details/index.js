import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';


class DetailsScreen  extends Component {
    static navigationOptions={
        title:"Details",
    };
    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam("itemId", "No Item Id");
        const itemName = navigation.getParam("itemName", "No Item Name");
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Text style={{color: 'blue', fontSize:20}}>Item Id: {JSON.stringify(itemId)}</Text>
                <Text style={{color:'red', fontSize:30}}>Item Name: {JSON.stringify(itemName)}</Text>
                <Button title="Go Details again" onPress={()=>
                    this.props.navigation.push('Details', {
                        itemId:Math.floor(Math.random()*100),
                    })
                }/>
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />

            </View>
        );
    }
}

export default DetailsScreen ;