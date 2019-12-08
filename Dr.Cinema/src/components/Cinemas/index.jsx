import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Card from '../common/Card';
import CardSection from '../common/CardSection';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {getAuthentication} from '../../services/authentication';
import {GetCinemas, GetCinemaMovies, GetTest} from '../../services';


class Cinemas extends Component {
    constructor(props){
        super(props)
    }
    async componentWillMount(){
        // CALL getAuthentication HERE ATM
        // username: olafurb
        // password: ThisIsForAssignment3DrCinema

        // Should add this to state
        const token = await getAuthentication('olafurb','ThisIsForAssignment3DrCinema');
        const cinemas = await GetCinemas(token);
        //cinemas.map(cinema => {
        //    console.log(cinema.name)
        //    console.log(cinema.website)
        //});
    }

    render(){
        return(
            <ScrollView>
                <View>
                    <Card>
                        {this.props.cinemas.map(cinema => {
                            <CardSection>
                                {cinema.name}
                            </CardSection>
                        })}
                    </Card>
                </View>
            </ScrollView>
        );
    }
}
const mapStateToProps = function(state) {
    return {
        cinemas: state.GetCinemas.cinemas
    }
}

Cinemas.propTypes = {
    cinemas: PropTypes.array
}

const styles = {
    text:{
        color: 'white'
    }
}

export default connect(mapStateToProps, null)(Cinemas);
