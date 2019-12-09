import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';
import Card from '../common/Card';
import CardSection from '../common/CardSection';
import CardSectionSmaller from '../common/CardSectionSmaller';
import { GetShowtimesForCurrentCinemaMovie } from '../../services';
import { GetMovieShowtimes } from '../actions';

class MovieDetails extends Component {
    constructor(props){
        super(props)
    }
    async componentWillMount(){
        const movieShowtime = await GetShowtimesForCurrentCinemaMovie(this.props.token, this.props.currentCinema.id, this.props.currentMovie.id)
        await this.props.GetMovieShowtimes(movieShowtime);
    }

    render(){
        const { currentMovie, currentCinema, token } = this.props;

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
                        {this.props.showtimes != undefined ? 
                        this.props.showtimes.map(showtime =>(
                            <CardSectionSmaller>
                                {showtime.cinema.name}
                            </CardSectionSmaller>
                        ))
                         : <Text>Loading</Text>}
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
        currentMovie: state.currentMovieReducer.movie,
        showtimes: state.currentMovieShowtimesReducer.showtimes
    }
}

export default connect(mapStateToProps, { GetMovieShowtimes })(MovieDetails);
