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
        title:'Upcoming Movies',
        headerLeft: <Icon name='ios-menu' type='ionicon' color='transparent' size={30} style={styles.plus} reverse 
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


const styles = {
  
}

export default UpcomingView;