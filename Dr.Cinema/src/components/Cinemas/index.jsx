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
        // CALL getAuthentication HERE ATM
        // username: olafurb
        // password: ThisIsForAssignment3DrCinema

        const token = await getAuthentication('olafurb','ThisIsForAssignment3DrCinema');
<<<<<<< HEAD
        const cinemas = await GetCinemas(token);
        //cinemas.map(cinema => {
        //    console.log(cinema.name)
        //    console.log(cinema.website)
        //});
=======
        await this.props.GetToken(token);

        const cinemas = await GetAllCinemas(this.props.token);
        await this.props.GetCinemas(cinemas);

>>>>>>> 263559cee58c61c705f1f70f693a35eeec545a09
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
<<<<<<< HEAD
        cinemas: state.GetCinemas.cinemas
=======
        token: state.tokenReducer.token,
        cinemas: state.cinemaReducer.cinemas
>>>>>>> 263559cee58c61c705f1f70f693a35eeec545a09
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

<<<<<<< HEAD
export default connect(mapStateToProps, null)(Cinemas);
=======
export default connect(mapStateToProps, { GetToken, GetCinemas })(Cinemas);
>>>>>>> 263559cee58c61c705f1f70f693a35eeec545a09
