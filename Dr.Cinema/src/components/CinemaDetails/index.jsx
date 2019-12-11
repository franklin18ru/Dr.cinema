import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableHighlight, Dimensions, SafeAreaView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
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


class CinemaDetails extends Component {
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
        return(
            <SafeAreaView>
            <ScrollView scrollEnabled={this.state.scrollEnabled} onContentSizeChange={(w,h)=>{this.contentChanged(h)}}>
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
                        :<View style={[styles.container, styles.horizontal]}><ActivityIndicator size='large' color='white' /></View>}
                    </Card>
                    
            </ScrollView>
            </SafeAreaView>
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

export default connect(mapStateToProps, { GetCinemasMovies, GetCurrentMovie })(CinemaDetails);
