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
import CardInfoSection from '../common/CardInfoSection';
import CardInfoLeft from '../common/CardInfoLeft';
import CardInfoRight from '../common/CardInfoRight';
import CardSectionText from '../common/CardSectionText';

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
                            Myndir
                        </CardSection>
                        {this.props.cinemaMovies != undefined ? this.props.cinemaMovies.map(movie => (
                            <TouchableHighlight key={movie.id}
                            onPress={() => this.goToMovieScreen(movie)}>
                            <View style={{ backgroundColor : '#23303b', margin: 5, borderRadius: 5}}>
                                <CardSection>
                                        {movie.title}
                                </CardSection>
                            <CardInfoSection>
                                
                                <CardInfoLeft>
                                    <Image
                                        style={{ width: 150, height: 200, overflow: 'visible', marginBottom: 10}}
                                        source={{uri: movie.poster}}
                                    />
                                </CardInfoLeft>
                                {/* Thumbnail, name, release year, genres */}
                                <CardInfoRight>
                                    <CardSectionText>
                                        <Text> Útgáfuár: </Text>
                                            {movie.year}
                                    </CardSectionText>
                                    <CardSectionText>
                                        <Text> Tegund: </Text>
                                        {movie.genres.map((genre,index) => {
                                        return (
                                            movie.genres.length == index+1 ?
                                            <Text key={genre.ID}>  {genre.Name} </Text> :
                                            <Text key={genre.ID}> {genre.Name}, </Text>);
                                        
                                        
                                    })}
                                    </CardSectionText>
                                </CardInfoRight>

                                </CardInfoSection>
                                </View>
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
