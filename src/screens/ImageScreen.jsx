import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail';


const ImageScreen = ()=>{



  return (
    <View>
      <ImageDetail title='Forest' score={5} imageSource={require('../../assets/forest.jpg')}/>
      <ImageDetail title='Mountain' score={10} imageSource={require('../../assets/mountain.jpg')}/>
      <ImageDetail title='Beach' score={7} imageSource={require('../../assets/beach.jpg')}/>
    </View>

  )
};


export default ImageScreen
