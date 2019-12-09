import React from 'react';
import { View, Text } from 'react-native';

const CardSectionText = (props) => {
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
        flex: 1,
        justifyContent: 'center'
        
    },
    textStyle: {
        color: 'white',
        fontSize: 15,
        justifyContent: 'flex-start',
        flexDirection: 'row'
    }
}

export default CardSectionText;