import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail';


const ImageScreen = ()=>{



  return (
    <View>
<<<<<<< HEAD
      <ImageDetail title='Forest'/>
      <ImageDetail title='Beach'/>
      <ImageDetail title='Mountain'/>
=======
      <ImageDetail title='Forest' score={5} imageSource={require('../../assets/forest.jpg')}/>
      <ImageDetail title='Mountain' score={10} imageSource={require('../../assets/mountain.jpg')}/>
      <ImageDetail title='Beach' score={7} imageSource={require('../../assets/beach.jpg')}/>
>>>>>>> cf7c643a171dad0636ac6056b2ec3409d611ab1f
    </View>

  )
};


export default ImageScreen
