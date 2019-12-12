import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import Upcoming from '../../components/Upcoming';

class UpcomingView extends Component {

    static navigationOptions = function(props) {
      return {
        headerTitleStyle: {
          color:'white'
        },
        headerStyle: {
          backgroundColor: '#23303b',
        },
        headerTintColor: 'white',
        title:'Væntanlegar Kvikmyndir',
        headerLeft: <Icon name='ios-menu' type='ionicon' color='transparent' size={30} reverse
        onPress={()=>{props.navigation.toggleDrawer()}}/>
        }};


    render(){
        return(
          <View style={{backgroundColor: '#273642', flex:1}}>
              <Upcoming navigation = {this.props.navigation}/>
          </View>
        );
    }
}

export default UpcomingView;
