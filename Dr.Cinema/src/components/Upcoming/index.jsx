import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableHighlight } from 'react-native';
import Card from '../common/Card';
import CardSection from '../common/CardSection';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { GetComingSoonMovies } from '../../services';
import { GetUpcomingMovies } from '../actions';


class Upcoming extends Component {
    constructor(props){
        super(props)
    }
    async componentWillMount(){
       

        const upcomingMoives = await GetComingSoonMovies(this.props.token);
        // ADD SORT

        //
        await this.props.GetUpcomingMovies(upcomingMoives);

    }
    

    render(){
        return(
            <ScrollView>
                <View style={{paddingLeft:5,paddingRight:5}}>
                    <Card>
                        {this.props.upcomingMovies != undefined ? this.props.upcomingMovies.map(movie => (
                            <TouchableHighlight key={movie.id}
                            onPress={() => {}}>
                                <CardSection>
                                    {movie.title}
                                    {movie['release-dateIS']}
                                    {movie.poster}
                                </CardSection>
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

export default connect(mapStateToProps, { GetUpcomingMovies })(Upcoming);
