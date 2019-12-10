import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableHighlight, Image } from 'react-native';
import Card from '../common/Card';
import CardSection from '../common/CardSection';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { GetComingSoonMovies } from '../../services';
import { GetUpcomingMovies, GetCurrentUpcomingMovie } from '../actions';
import CardInfoRight from '../common/CardInfoRight';
import CardInfoLeft from '../common/CardInfoLeft';
import CardSectionText from '../common/CardSectionText';
import CardInfoSection from '../common/CardInfoSection';


class Upcoming extends Component {
    constructor(props){
        super(props)
    }
    async componentWillMount(){
       

        const upcomingMovies = await GetComingSoonMovies(this.props.token);

        upcomingMovies.sort(function(a,b){
            let dateA = new Date(a['release-dateIS']);
            let dateB = new Date(b['release-dateIS']);
            if(dateA < dateB){return -1;}
            if(dateA > dateB){return 1;}
            return 0;
        })

        await this.props.GetUpcomingMovies(upcomingMovies);

    }
    async goToMovieScreen(movie){
        await this.props.GetCurrentUpcomingMovie(movie)
        this.props.navigation.navigate('UpcomingMovieDetailsView')
    }

    render(){
        return(
            <ScrollView>
                <View style={{paddingLeft:5,paddingRight:5}}>
                    <Card>
                        {this.props.upcomingMovies != undefined ? this.props.upcomingMovies.map(movie => (
                            <TouchableHighlight key={movie.id}
                            onPress={() => {this.goToMovieScreen(movie)}}>
                            <View style={{ backgroundColor : '#23303b', margin: 5, borderRadius: 5}}>
                                <CardSection>
                                    {movie.title}
                                </CardSection>
                                <CardInfoSection>
                                    <CardInfoLeft>
                                        <Image
                                            style={{width: 150, height: 200, overflow: 'visible', marginBottom: 10}}
                                            source={{uri: movie.poster}}
                                        />
                                    </CardInfoLeft>
                                    <CardInfoRight>
                                        <CardSectionText>
                                            {movie['release-dateIS']}
                                        </CardSectionText>
                                    </CardInfoRight>
                                </CardInfoSection>
                            </View>
                            </TouchableHighlight>
                        ))
                        :<Text style={styles.text}>Loading</Text>}
                    </Card>
                </View>
            </ScrollView>
        );
    }
}
const mapStateToProps = function(state) {
    return {
        token: state.tokenReducer.token,
        upcomingMovies: state.upcomingMoviesReducer.movies
    }
}

Upcoming.propTypes = {
    token: PropTypes.string,

}

const styles = {
    text:{
        color: 'white'
    }
}

export default connect(mapStateToProps, { GetUpcomingMovies, GetCurrentUpcomingMovie })(Upcoming);
