import React, { Component } from 'react';
import { View } from 'react-native';
import MovieDetails from '../../components/MovieDetails';

class MovieDetailsView extends Component {
    render(){
        return (
            <View style={{backgroundColor: '#273642', flex:1}}>
                <MovieDetails navigation={this.props.navigation}/>
            </View>
        );
    }
}

export default MovieDetailsView
