import React, { Component } from 'react';
import {View} from 'react-native';
import CinemaDetails from '../../components/CinemaDetails';

class CinemaDetailsView extends Component {
    static navigationOptions = {
        headerStyle: {
          backgroundColor: '#273642',
          borderBottomWidth: 0,
        },
        headerTintColor: 'white',
      };
    render(){
        return(
            <View style={{backgroundColor: '#273642', flex:1}}>
                <CinemaDetails navigation = {this.props.navigation}/>
            </View>
        );
    }
}

export default CinemaDetailsView;
