import React, { Component } from 'react';
import { View, Text} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAuthentication } from '../../services/authentication';
import { GetAllCinemas } from '../../services';
import { GetToken, GetCinemas } from '../actions';


class Cinemas extends Component {

    async componentWillMount(){
        // CALL getAuthentication HERE ATM
        // username: olafurb
        // password: ThisIsForAssignment3DrCinema

        const token = await getAuthentication('olafurb','ThisIsForAssignment3DrCinema');
        await this.props.GetToken(token);

        const cinemas = await GetAllCinemas(this.props.token);
        await this.props.GetCinemas(cinemas);

    }
    
    render(){
        
        return(
          
              <Text style={styles.text}>All cinemas should be here</Text>

               
            
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