import React from 'react';
import { View } from 'react-native';

const CardInfoSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        flex: 2,
        flexDirection: 'row',
        margin: 5,
        padding: 15,
        backgroundColor: '#23303b',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative',
        borderRadius: 5,

    }
}

export default CardInfoSection;