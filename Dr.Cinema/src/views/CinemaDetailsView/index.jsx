import React, { Component } from 'react';
import {View} from 'react-native';
import CinemaDetails from '../../components/CinemaDetails';

class CinemaDetailsView extends Component {
    render(){
        return(
            <View style={{backgroundColor: '#273642', flex:1}}>
                <CinemaDetails navigation = {this.props.navigation}/>
            </View>
        );
    }
}

export default CinemaDetailsView;
