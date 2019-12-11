import React, { Component } from 'react';
import { View } from 'react-native';
import UpcomingMovieDetails from '../../components/UpcomingMovieDetails';

class UpcomingMovieDetailsView extends Component {
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
                <UpcomingMovieDetails navigation={this.props.navigation}/>
            </View>
        );
    }
}

export default UpcomingMovieDetailsView