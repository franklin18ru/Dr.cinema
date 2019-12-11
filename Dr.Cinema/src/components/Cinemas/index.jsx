import React, { Component } from 'react';
import { View, ScrollView, TouchableHighlight, Dimensions, SafeAreaView, ActivityIndicator } from 'react-native';
import Card from '../common/Card';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAuthentication } from '../../services/authentication';
import { GetAllCinemas } from '../../services';
import { GetToken, GetCinemas, GetCurrentCinema } from '../actions';
import CardInfoSection from '../common/CardInfoRight';
import CardSectionTop from '../common/CardSectionTop';
import CardSectionBottom from '../common/CardSectionBottom';

class Cinemas extends Component {
    constructor(props){
        super(props)
        const { height } = Dimensions.get('window');
        this.state = {
            screenHeight: height,
            scrollEnabled: false,
        };
    }

    contentChanged(height){
        if(this.state.screenHeight-100 < height){
          this.setState({scrollEnabled:true})
          return
        }
        this.setState({scrollEnabled:false})
    }


    async componentWillMount(){
        // username: olafurb
        // password: ThisIsForAssignment3DrCinema

        const token = await getAuthentication('olafurb','ThisIsForAssignment3DrCinema');
        await this.props.GetToken(token);

        const cinemas = await GetAllCinemas(this.props.token);
 
        cinemas.sort(function(a,b){
            let stringA = a.name.replace(',','').toLowerCase();
            let stringB = b.name.replace(',','').toLowerCase();
            if(stringA < stringB){return -1;}
            if(stringA > stringB){return 1;}
            return 0;
        })
  
        await this.props.GetCinemas(cinemas);

    }
    async goToCinemaScreen(cinema){
        await this.props.GetCurrentCinema(cinema)
        this.props.navigation.navigate('CinemaDetailsView')

    }

    render(){
        return(
            <ScrollView scrollEnabled={this.state.scrollEnabled} onContentSizeChange={(w,h)=>{this.contentChanged(h)}}>
              <SafeAreaView>
                <View style={{paddingLeft:5,paddingRight:5}}>
                    <Card>
                        {this.props.cinemas != undefined ? this.props.cinemas.map(cinema => (
                            <TouchableHighlight key={cinema.id}
                            onPress={() => this.goToCinemaScreen(cinema)}>
                                <View style={{ backgroundColor : '#23303b', margin: 7, borderRadius: 5}}>
                                <CardInfoSection>
                                    <CardSectionTop>
                                        {cinema.name}
                                    </CardSectionTop>
                                    <CardSectionBottom>
                                        {cinema.website}
                                    </CardSectionBottom>                                    
                                </CardInfoSection>
                                </View>
                            </TouchableHighlight>
                        ))
                        :<View style={[styles.container, styles.horizontal]}><ActivityIndicator size='large' color='white' /></View>}
                    </Card>
                </View>
                </SafeAreaView>
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
    },
    container: {
        flex: 1,
        justifyContent: 'center'
      },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    }
}

export default connect(mapStateToProps, { GetToken, GetCinemas, GetCurrentCinema })(Cinemas);
