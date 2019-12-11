import React, { Component } from 'react';
import { Text, ScrollView, Image, TouchableHighlight, Linking, Dimensions, SafeAreaView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import Card from '../common/Card';
import CardSection from '../common/CardSection';
import CardSectionSmaller from '../common/CardSectionSmaller';
import CardInfoSection from '../common/CardInfoSection';
import CardInfoLeft from '../common/CardInfoLeft';
import CardInfoRight from '../common/CardInfoRight';
import CardSectionText from '../common/CardSectionText';
import { GetShowtimesForCurrentCinemaMovie } from '../../services';
import { GetMovieShowtimes, GetCurrentTrailer } from '../actions';



class MovieDetails extends Component {
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
        const movieShowtime = await GetShowtimesForCurrentCinemaMovie(this.props.token, this.props.currentCinema.id, this.props.currentMovie.id)
        await this.props.GetMovieShowtimes(movieShowtime);
    }
    async goToTicketPurchase(url){
        Linking.openURL(url)
    }
    async goToTrailer(trailer){
        // Add to reducer and navigation to trailer view
        await this.props.GetCurrentTrailer(trailer)
        this.props.navigation.navigate('TrailerDetailView')
        // Linking.openURL(trailer.url)
    }
    onContentSizeChange = (contentWidth, contentHeight) => {
        this.setState({ screenHeight: contentHeight });
      };

    render(){
        const { currentMovie, currentCinema, token, showtimes } = this.props;
        return(
            <SafeAreaView>
            <ScrollView scrollEnabled={this.state.scrollEnabled} onContentSizeChange={(w,h)=>{this.contentChanged(h)}}>
                <Card>
                    <CardSection>
                        {currentMovie.title}
                    </CardSection>
                    
                    
                        <CardInfoSection>
                            <CardInfoLeft>
                                <Image
                                    style={{width: 150, height: 200, overflow: 'visible', marginBottom: 10}}
                                    source={{uri: currentMovie.poster}}
                                />
                            </CardInfoLeft>
                            <CardInfoRight>
                                <CardSectionText>
                                    <Image
                                    style={{width: 30, height: 20, overflow: 'visible', backfaceVisibility: 'visible'}}
                                    source={{uri: "https://www.pocketpicturesltd.com/wp-content/uploads/2018/06/imdb.png"}}
                                    />
                                    <Text>  </Text>
                                    {currentMovie.ratings.imdb}
                                </CardSectionText>

                                <CardSectionText>
                                    <Text>Útgáfuár: </Text>
                                    {currentMovie.year}
                                </CardSectionText>

                                <CardSectionText>
                                    <Text>Lengd: </Text>
                                        {currentMovie.durationMinutes}
                                    <Text>min</Text>
                                </CardSectionText>

                                <CardSectionText>
                                    <Text>Tegund: </Text>
                                    {currentMovie.genres.map((genre,index) => {
                                        return (
                                            currentMovie.genres.length == index+1 ?
                                            <Text key={genre.ID}>  {genre.Name} </Text> :
                                            <Text key={genre.ID}> {genre.Name}, </Text>);
                                    })}

                                </CardSectionText>
                            </CardInfoRight>
                        </CardInfoSection>

                        <CardSectionSmaller>
                            {currentMovie.plot}
                        </CardSectionSmaller>
                        
                        <CardSectionText><Text style = {{fontSize: 20}}>Sýningarbrot:</Text></CardSectionText>
                            {currentMovie.trailers != undefined ?
                            currentMovie.trailers.map(allTrailers =>(
                                allTrailers.results.map((trailer,index) =>(
                                    <TouchableHighlight key={trailer.id} onPress={() => this.goToTrailer(trailer)}>
                                        <CardSectionSmaller>
                                            {trailer.name}
                                        </CardSectionSmaller>
                                    </TouchableHighlight>
                            ))))
                            :<View style={[styles.container, styles.horizontal]}><ActivityIndicator size='large' color='white' /></View>}
                        
                        <CardSectionText><Text style={{fontSize: 20}}>Sýningartímar: </Text></CardSectionText>
                        {showtimes != undefined ?
                         showtimes.map(showtime =>(
                             showtime.schedule.map(time =>(
                                 <TouchableHighlight key={time.time}
                                 onPress={() => this.goToTicketPurchase(time.purchase_url)}>
                                    <CardSectionSmaller>
                                        {time.time}
                                    </CardSectionSmaller>

                            </TouchableHighlight>
                        ))))
                         :<View style={[styles.container, styles.horizontal]}><ActivityIndicator size='large' color='white' /></View>}
                    
                </Card>
            </ScrollView>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = function(state) {
    return {
        token: state.tokenReducer.token,
        currentCinema: state.currentCinemaReducer.cinema,
        currentMovie: state.currentMovieReducer.movie,
        showtimes: state.currentMovieShowtimesReducer.showtimes
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

export default connect(mapStateToProps, { GetMovieShowtimes, GetCurrentTrailer })(MovieDetails);
