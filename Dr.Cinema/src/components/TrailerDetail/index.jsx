import React, { Component }  from 'react';
import { WebView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class TrailerDetail extends Component {
    constructor(props){
        super(props)
        
    }
    render(){
        const { trailer } = this.props
        return(

            <WebView
            useWebKit={true}
            style={styles.container}
            javaScriptEnabled={true}
            source={{
                uri: trailer.url,
            }}
            />
        
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
    },
  });

const mapStateToProps = function(state) {
    return {
        trailer:state.currentTrailerReducer.trailer
    }
}

export default connect(mapStateToProps, null)(TrailerDetail);