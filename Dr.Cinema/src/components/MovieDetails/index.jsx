import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableHighlight, Linking } from 'react-native';
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
    async goToTicketPurchase(url){
        Linking.openURL(url)
    }
    async goToTrailer(url){
        Linking.openURL(url)
    }

    render(){
        const { currentMovie, currentCinema, token, showtimes } = this.props;
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
                        {currentMovie.trailers != undefined ?
                         currentMovie.trailers.map(allTrailers =>(
                             allTrailers.results.map(trailer =>(
                                 <TouchableHighlight key={trailer.id}
                                 onPress={() => this.goToTrailer(trailer.url)}>
                                    <CardSectionSmaller>
                                        {trailer.name}
                                    </CardSectionSmaller>

                            </TouchableHighlight>
                        ))))
                         :<Text>Loading</Text>}
                        {showtimes != undefined ?
                         showtimes.map(showtime =>(
                             showtime.schedule.map(time =>(
                                 <TouchableHighlight key={showtime.cinema.id}
                                 onPress={() => this.goToTicketPurchase(time.purchase_url)}>
                                    <CardSectionSmaller>
                                        {time.time}
                                    </CardSectionSmaller>

                            </TouchableHighlight>
                        ))))
                         :<Text>Loading</Text>}
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
