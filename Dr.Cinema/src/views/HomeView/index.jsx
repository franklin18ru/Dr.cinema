import React, {Component} from 'react';
import {View} from 'react-native';
import Cinemas from '../../components/Cinemas';


// CHANGES THIS TO FRONT PAGE
class Home extends Component {
    static navigationOptions = {
        headerStyle: {
          backgroundColor: '#23303b',
        },
      };
    render(){
        return(
                <View style={{backgroundColor: '#273642', flex:1}}>
                    <Cinemas navigation = {this.props.navigation}/>
                </View>
        );
    }
}

export default Home;
