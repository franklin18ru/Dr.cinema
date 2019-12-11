import React, { Component } from 'react';
import { View ,Text, ScrollView, Image, TouchableHighlight, Linking, Dimensions, SafeAreaView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import Card from '../common/Card';
import CardSection from '../common/CardSection';
import CardSectionSmaller from '../common/CardSectionSmaller';
import CardInfoSection from '../common/CardInfoSection';
import CardInfoLeft from '../common/CardInfoLeft';
import CardInfoRight from '../common/CardInfoRight';
import CardSectionText from '../common/CardSectionText';
import { GetCurrentTrailer } from '../actions';


class UpcomingMovieDetails extends Component {
    constructor(props){
        super(props)
        const { height } = Dimensions.get('window');
        this.state = {
            screenHeight: height,
            scrollEnabled: false,
        };
    }
    
    async goToTrailer(trailer){
        await this.props.GetCurrentTrailer(trailer)
        this.props.navigation.navigate('TrailerDetailView')
    }
    
    contentChanged(height){
        if(this.state.screenHeight-100 < height){
          this.setState({scrollEnabled:true})
          return
        }
        this.setState({scrollEnabled:false})
      }

    render(){
        const { currentMovie } = this.props;
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
                        
                        
                        <CardSectionText><Text style = {{fontSize: 20}}>Sýningarbrot:</Text></CardSectionText>
                            {currentMovie.trailers != undefined ?
                            currentMovie.trailers.map(allTrailers =>(
                                allTrailers.results.map(trailer =>(
                                    <TouchableHighlight key={trailer.id}
                                    onPress={() => this.goToTrailer(trailer)}>
                                        <CardSectionSmaller>
                                            {trailer.name}
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
        currentMovie: state.currentUpcomingMovieReducer.movie,
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

export default connect(mapStateToProps, { GetCurrentTrailer })(UpcomingMovieDetails);