import React, { Component } from 'react';
import { View, Text, ScrollView, Button, Image, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { GetCinemaMovies } from '../../services';
import Card from '../common/Card';
import CardSection from '../common/CardSection';
import CardSectionSmaller from '../common/CardSectionSmaller';
import { GetCinemasMovies } from '../actions';

class CinemaDetails extends Component {
    constructor(props){
        super(props)
    }
    async componentWillMount(){
        const cinemaMovies = await GetCinemaMovies(this.props.token, this.props.currentCinema.id)
        await this.props.GetCinemasMovies(cinemaMovies)
    }
    render(){
        const { currentCinema } = this.props;
        return(
                <View>
                    <Card>
                        <CardSection>
                            {currentCinema.name}
                        </CardSection>
                        <ScrollView>
                        <CardSectionSmaller>
                            {currentCinema.description}
                        </CardSectionSmaller>
                        <CardSectionSmaller>
                            {currentCinema['address\t']}, {currentCinema.city}
                        </CardSectionSmaller>
                        <CardSectionSmaller>
                            {currentCinema.phone}
                        </CardSectionSmaller>
                        <CardSectionSmaller>
                            {currentCinema.website}
                        </CardSectionSmaller>
                        <CardSection>
                            Movies
                        </CardSection>
                        {this.props.cinemaMovies != undefined ? this.props.cinemaMovies.map(movie => (
                            <TouchableHighlight key={movie.id}
                            onPress={() => this.props.navigation.navigate('MovieDetailsView')}>
                            <CardSectionSmaller>
                                {movie.title}
                                {movie.year}
                                <Image
                                    style={{ width: 50, height: 50}}
                                    source={{uri: movie.poster}}
                                />
                            </CardSectionSmaller>
                            </TouchableHighlight>
                        ))
                        :<Text>Loading</Text>}
                        </ScrollView>
                    </Card>
                </View>
        )
    }
}
const mapStateToProps = function(state) {
    return {
        token: state.tokenReducer.token,
        currentCinema: state.currentCinemaReducer.cinema,
        cinemaMovies: state.cinemaMovieReducer.cinemaMovies
    }
}
const styles = {
    details:{
        fontSize: 11
    }
}
export default connect(mapStateToProps, { GetCinemasMovies })(CinemaDetails);
