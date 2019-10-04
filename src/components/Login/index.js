import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import axios from '../../components/Axios';

import TextInput from '../../components/Input';
import {validate} from "../../Utility/appUtil";

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputBox: {
        width: 300,
        backgroundColor: '#eeeeee',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#002f6c',
        marginVertical: 10
    },
    button: {
        width: 300,
        backgroundColor: '#4f83cc',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    }
});

class Login extends Component {

    state = {
        formData: {
            email: {
                value: '',
                placeholder: "Email",
                // keyboardType: "email-address",
                valid: false,
                touch: false,
                validationRules: {
                    isEmail: true
                }
            },
            name: {
                value: '',
                valid: false,
                touch: false,
                placeholder: "Name",
                // keyboardType: "",
                validationRules: {
                    notEmpty: true
                }
            }
        },
        formIsValid: false
    };

    abbc = "hello world";

    onInputChange = (key, value) => {
        this.abbc="afgc";
        const updatedForm = {...this.state.formData};
        const updatedElement = {...updatedForm[key]};
        updatedElement.value = value;
        updatedElement.valid = validate(
            updatedElement.value,
            updatedElement.validationRules
        );
        updatedElement.touch = true;
        updatedForm[key] = updatedElement;
        let formIsValid = this.isFormValid(updatedForm);
        this.setState({formData: updatedForm, formIsValid: formIsValid})
    };

    isFormValid(props) {
        let formIsValid = true;
        for (let inputIdentifier in props) {
            formIsValid = props[inputIdentifier].valid && formIsValid;
        }
        return formIsValid;
    }

    onSubmit = () => {
        if (this.state.formIsValid) {
            axios.get("/api/v1/employees")
                .then(response => console.log(response.data))
                .catch(e => console.log(e));
        }
    };

    render() {
        const {formData} = this.state;
        return (
            <View>
                {Object.keys(formData).map(el => (
                    <TextInput
                        key={el}
                        style={styles.inputBox}
                        onChangeText={val => this.onInputChange(el, val)}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        placeholder={formData[el].placeholder}
                        placeholderTextColor="#002f6c"
                        selectionColor="#fff"
                        // keyboardType={formData[el].keyboardType}
                        value={formData[el].value}
                        valid={formData[el].valid}
                        touched={formData[el].touch}
                    />
                ))}

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={this.onSubmit}>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Login;