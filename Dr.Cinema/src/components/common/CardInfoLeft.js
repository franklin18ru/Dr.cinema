import React from 'react';
import { View } from 'react-native';

const CardInfoLeft = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        flex: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
    }
}

export default CardInfoLeft;