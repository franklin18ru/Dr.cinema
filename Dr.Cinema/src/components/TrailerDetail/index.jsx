import React, { Component }  from 'react';
import { Platform, View } from 'react-native';
import { connect } from 'react-redux';




class TrailerDetail extends Component {
    constructor(props){
        super(props)
        
    }

    render(){
        const { trailer } = this.props
        return(
            <View></View>
        );
    }
}

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
