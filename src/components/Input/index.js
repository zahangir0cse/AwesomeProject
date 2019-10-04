import React from 'react'
import {TextInput} from 'react-native';

import {styles} from "./state";


export default (props) => {
    return (
        <TextInput
            {...props}
            style={[props.style, !props.valid && props.touched ? styles.invalid : null]}
        />
    );
};
