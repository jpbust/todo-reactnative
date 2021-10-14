import React, {useState} from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

const ImageDetail = ({title, imageSource, score})=>{

  return (
    <View>
      <Image
        source={imageSource}/>
      <Text>{title}</Text>
      <Text>{`score: ${score}`}</Text>
    </View>



  )
};

StyleSheet


export default ImageDetail
