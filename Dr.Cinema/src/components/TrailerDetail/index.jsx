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
            scalesPageToFit
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



//  {
//     "id": "5d826945869e75002e0c2c7b",
//     "iso_3166_1": "US",
//     "iso_639_1": "en",
//     "key": "sL-9Khv7wa4",
//     "name": "Knives Out (2019) New Trailer – Daniel Craig, Chris Evans, Ana de Armas",
//     "site": "YouTube",
//     "size": 1080,
//     "type": "Trailer",
//     "url": "https://www.youtube.com/embed/sL-9Khv7wa4?rel=0",
//   }
