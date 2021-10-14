import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail';


const ImageScreen = ()=>{



  return (
    <View>
      <ImageDetail title='Forest'/>
      <ImageDetail title='Beach'/>
      <ImageDetail title='Mountain'/>
    </View>

  )
};


export default ImageScreen
