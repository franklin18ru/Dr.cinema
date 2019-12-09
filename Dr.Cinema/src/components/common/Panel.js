import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Platform, UIManager, LayoutAnimation } from 'react-native'; 
import { Icon } from 'react-native-elements';
import Card from '../common/Card';
import CardSection from '../common/CardSection';
import Styles from '../common/styles';

class Panel extends Component{
    constructor(props){
        super(props);

        this.icons = {    
            'up'    : <Icon name='ios-arrow-dropup' type='ionicon' color='transparent' size={25} reverse></Icon>,
            'down'  : <Icon name='ios-arrow-dropdown' type='ionicon' color='transparent' size={25} reverse></Icon>
        };

        this.state = { 
            title       : props.title,
            expanded    : false,
        };
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
          }

    }
    changeLayout = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({ expanded: !this.state.expanded });
      }



    render(){
        let icon = this.icons['down'];

        if(this.state.expanded){
            icon = this.icons['up'];
        }

        //Step 5
        return ( 
            <Card>
                <View style= { Styles.titleView}>         
                    <Text style = {Styles.titleText}>
                        {this.state.title}
                    </Text>
                        
                    <View style={{ height: this.state.expanded ? null : 0, overflow: 'hidden' }}>
                        {this.props.children}
                    </View>

                    <TouchableHighlight 
                    onPress={this.changeLayout}
                    underlayColor="white"
                    >
                        { icon }
                    </TouchableHighlight>
                </View>
                
            
                

            </Card>
        );
    }
}
export default Panel;