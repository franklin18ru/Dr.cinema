import React from 'react';
import { View, Text } from 'react-native';

const CardSectionBottom = (props) => {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.textStyle}>
                {props.children}
            </Text>
        </View>
    );
};

const styles = {
    containerStyle: {
        marginLeft: 5,
        marginTop: 5,
        marginBottom: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    textStyle: {
        color: 'white',
        fontSize: 15,
        justifyContent: 'center',
        flexDirection: 'row'
    }
}

export default CardSectionBottom;
