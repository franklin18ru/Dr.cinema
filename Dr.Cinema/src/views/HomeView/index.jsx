import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import Cinemas from '../../components/Cinemas';



class Home extends Component {
  
    static navigationOptions = function(props) {
      return {
        headerTitleStyle: {
          color:'white'
        },
        headerStyle: {
          backgroundColor: '#23303b',
        },
        title:'Dr.Cinema',
        headerLeft: <Icon name='ios-menu' type='ionicon' color='transparent' size={30} style={styles.plus} reverse 
        onPress={()=>{console.log(DrawerActions)}}/>
        }};


    render(){
        return(
                <View style={{backgroundColor: '#273642', flex:1}}>
                    <Cinemas navigation = {this.props.navigation}/>
                </View>
        );
    }
}


const styles = {
  
}

export default Home;
