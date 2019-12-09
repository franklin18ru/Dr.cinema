import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableHighlight, Linking } from 'react-native';
import { connect } from 'react-redux';
import Card from '../common/Card';
import CardSection from '../common/CardSection';
import CardSectionSmaller from '../common/CardSectionSmaller';
import CardInfoSection from '../common/CardInfoSection';
import CardInfoLeft from '../common/CardInfoLeft';
import CardInfoRight from '../common/CardInfoRight';
import CardSectionText from '../common/CardSectionText'
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
                        <CardInfoSection>
                            <CardInfoLeft>
                                <Image
                                    style={{width: 150, height: 200, overflow: 'visible', marginBottom: 10}}
                                    source={{uri: currentMovie.poster}}
                                />
                            </CardInfoLeft>
                            <CardInfoRight>

                                <CardSectionText>
                                    <Text>Útgáfuár: </Text>
                                    {currentMovie.year}
                                </CardSectionText>

                                <CardSectionText>
                                    <Text>Lengd: </Text>
                                        {currentMovie.durationMinutes}
                                    <Text>min</Text>
                                </CardSectionText>

                                <CardSectionText>
                                    <Text>Tegund: </Text>
                                    {currentMovie.genres.map((genre,index) => {
                                        return (
                                            currentMovie.genres.length == index+1 ?
                                            <Text key={genre.ID}>  {genre.Name} </Text> :
                                            <Text key={genre.ID}> {genre.Name}, </Text>);
                                        
                                        
                                    })}

                                </CardSectionText>
                            </CardInfoRight>
                        </CardInfoSection>

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