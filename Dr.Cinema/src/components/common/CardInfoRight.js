import React from 'react';
import { View } from 'react-native';

const CardInfoRight = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        flex: 1,
    }
}

export default CardInfoRight;