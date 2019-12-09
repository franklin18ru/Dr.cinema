import React, { Component } from 'react';
import { View, Text, ScrollView, Button, Image, TouchableHighlight, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { GetCinemaMovies } from '../../services';
import Card from '../common/Card';
import CardSection from '../common/CardSection';
import CardSectionSmaller from '../common/CardSectionSmaller';
import { GetCinemasMovies, GetCurrentMovie } from '../actions';
import Panel from '../common/Panel';

const { height } = Dimensions.get('window');

class CinemaDetails extends Component {
    constructor(props){
        super(props)

        this.state = {
            screenHeight: 0,
        };
    }
    async componentWillMount(){
        const cinemaMovies = await GetCinemaMovies(this.props.token, this.props.currentCinema.id)
        await this.props.GetCinemasMovies(cinemaMovies)
    }
    async goToMovieScreen(movie){
        await this.props.GetCurrentMovie(movie)
        this.props.navigation.navigate('MovieDetailsView')
    }
    onContentSizeChange = (contentWidth, contentHeight) => {
        this.setState({ screenHeight: contentHeight });
      };
    render(){
        const { currentCinema } = this.props;
        const scrollEnabled = this.state.screenHeight > height+100;
        return(
                <ScrollView
                scrollEnabled={scrollEnabled}
                onContentSizeChange={this.onContentSizeChange}
                >
                    <Card>
                        <Panel title = {currentCinema.name}>
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
                        </Panel>
                        
                    
                        <CardSection>
                            Movies
                        </CardSection>
                        {this.props.cinemaMovies != undefined ? this.props.cinemaMovies.map(movie => (
                            <TouchableHighlight key={movie.id}
                            onPress={() => this.goToMovieScreen(movie)}>
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
                    </Card>
                </ScrollView>
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
export default connect(mapStateToProps, { GetCinemasMovies, GetCurrentMovie })(CinemaDetails);
