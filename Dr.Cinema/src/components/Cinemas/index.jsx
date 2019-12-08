import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Card from '../common/Card';
import CardSection from '../common/CardSection';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAuthentication } from '../../services/authentication';
import { GetAllCinemas } from '../../services';
import { GetToken, GetCinemas } from '../actions';


class Cinemas extends Component {
    constructor(props){
        super(props)
    }
    async componentWillMount(){
        // username: olafurb
        // password: ThisIsForAssignment3DrCinema

        const token = await getAuthentication('olafurb','ThisIsForAssignment3DrCinema');
        await this.props.GetToken(token);

        const cinemas = await GetAllCinemas(this.props.token);
        // ADD SORT
        
        //
        await this.props.GetCinemas(cinemas);

    }

    render(){
        return(
            <ScrollView>
                <View style={{paddingLeft:5,paddingRight:5}}>
                    <Card>
                        {this.props.cinemas != undefined ? this.props.cinemas.map(cinema => {
                            
                            <CardSection>
                                {cinema.name}
                            </CardSection>
                        })
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
        cinemas: state.cinemaReducer.cinemas
    }
}

Cinemas.propTypes = {
    token: PropTypes.string,
    cinemas: PropTypes.array
}

const styles = {
    text:{
        color: 'white'
    }
}

export default connect(mapStateToProps, { GetToken, GetCinemas })(Cinemas);
