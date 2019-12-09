import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';
import Card from '../common/Card';
import CardSection from '../common/CardSection';
import CardSectionSmaller from '../common/CardSectionSmaller';

class MovieDetails extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const { currentMovie } = this.props;
        console.log(currentMovie.genres)
        return(
            <View>
                <Card>
                    <CardSection>
                        {currentMovie.title}
                    </CardSection>
                    <ScrollView>
                        <CardSectionSmaller>
                            {currentMovie.year}
                        </CardSectionSmaller>
                        <CardSectionSmaller>
                            {currentMovie.durationMinutes}
                        </CardSectionSmaller>
                        {currentMovie.genres.map(genre => (
                            <CardSectionSmaller>
                                {genre.Name}
                            </CardSectionSmaller>
                        ))}
                        <CardSectionSmaller>
                            <Image
                                style={{width: 50, height: 50}}
                                source={{uri: currentMovie.poster}}
                            />
                        </CardSectionSmaller>
                        <CardSectionSmaller>
                            {currentMovie.plot}
                        </CardSectionSmaller>
                    </ScrollView>
                </Card>
            </View>
        );
    }
}

const mapStateToProps = function(state) {
    return {
        token: state.tokenReducer.token,
        currentCinema: state.currentCinemaReducer.cinema,
        currentMovie: state.currentMovieReducer.movie
    }
}

export default connect(mapStateToProps, null)(MovieDetails);
