import React, { Component } from 'react';
import { Text, ScrollView, Image, TouchableHighlight, Linking, Dimensions, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import Card from '../common/Card';
import CardSection from '../common/CardSection';
import CardSectionSmaller from '../common/CardSectionSmaller';
import CardInfoSection from '../common/CardInfoSection';
import CardInfoLeft from '../common/CardInfoLeft';
import CardInfoRight from '../common/CardInfoRight';
import CardSectionText from '../common/CardSectionText';
import { GetShowtimesForCurrentCinemaMovie } from '../../services';

const { height } = Dimensions.get('window');

class UpcomingMovieDetails extends Component {
    constructor(props){
        super(props)

        this.state = {
            screenHeight: 0,
        };
    }
    
    async goToTrailer(url){
        Linking.openURL(url)
    }
    
    onContentSizeChange = (contentWidth, contentHeight) => {
        this.setState({ screenHeight: contentHeight });
      };

    render(){
        const { currentMovie } = this.props;
        const scrollEnabled = this.state.screenHeight > height+2;
        return(
            <SafeAreaView>
            <ScrollView
                        scrollEnabled={scrollEnabled}
                        onContentSizeChange={this.onContentSizeChange}
            >
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
                                    <Text>Útgáfuár: </Text>
                                    {currentMovie.year}
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
                        
                        <CardSectionText>
                            <Text style = {{fontSize: 20}}>Sýningarbrot:</Text></CardSectionText>
                            {currentMovie.trailers != undefined ?
                            currentMovie.trailers.map(allTrailers =>(
                                allTrailers.results.map(trailer =>(
                                    <TouchableHighlight key={trailer.id}
                                    onPress={() => this.goToTrailer(trailer.url)}>
                                        <CardSectionSmaller>
                                            {trailer.name}
                                        </CardSectionSmaller>

                                </TouchableHighlight>
                            ))))
                            :<Text>Loading</Text>}
                        
                        
                    
                </Card>
            </ScrollView>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = function(state) {
    return {
        currentMovie: state.currentUpcomingMovieReducer.movie,
    }
}

export default connect(mapStateToProps)(UpcomingMovieDetails);