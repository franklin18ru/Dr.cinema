import React, { Component } from 'react';
import { View } from 'react-native';
import TrailerDetail from '../../components/TrailerDetail';

class TrailerDetailView extends Component {
    static navigationOptions = {
        headerStyle: {
          backgroundColor: '#273642',
          borderBottomWidth: 0,
        },
        headerTintColor: 'white',
      };
    render(){
        return (
            <View style={{backgroundColor: '#273642', flex:1}}>
                <TrailerDetail navigation={this.props.navigation}/>
            </View>
        );
    }
}

export default TrailerDetailView