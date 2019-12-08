import React, { Component } from 'react';
import { View, Text} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {getAuthentication} from '../../services/authentication';
import {GetCinemas} from '../../services';


class Cinemas extends Component {

    async componentWillMount(){
        // CALL getAuthentication HERE ATM
        // username: olafurb
        // password: ThisIsForAssignment3DrCinema

        // Should add this to state
        const token = await getAuthentication('olafurb','ThisIsForAssignment3DrCinema');
    
        // const cinemas = await GetCinemas(token);
        // console.log(cinemas);
    }
    
    render(){
        
        return(
          
              <Text style={styles.text}>All cinemas should be here</Text>

               
            
        );
    }
}
const mapStateToProps = function(state) {
    return {
        
    }
}

Cinemas.propTypes = {
    contacts: PropTypes.array
}

const styles = {
    text:{
        color: 'white'
    }
}

export default connect(mapStateToProps, null)(Cinemas);