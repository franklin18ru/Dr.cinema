import React from 'react';
import { View, Text } from 'react-native';

const CardSection = (props) => {
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
        padding: 15,
        backgroundColor: '#23303b',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative',
        borderRadius: 5,
        marginBottom: 7

    },
    textStyle: {
        color: 'white',
        fontSize: 25,
    }
}

export default CardSection;
