import React, {useState} from 'react';
import {View, Button, StyleSheet, Text, FlatList} from 'react-native';

const ColorScreen = ()=>{
  const [squares, setSquares] = useState([])

const randomRGB = ()=>{
  const r = Math.floor(Math.random()*256);
  const g = Math.floor(Math.random()*256);
  const b = Math.floor(Math.random()*256);
  const rgb =  `rgb(${r},${g},${b})`;
  return rgb
};


return(
  <View>
    <Button
      title='Add a color'
      onPress={()=>{setSquares([randomRGB(), ...squares])}}
    />


    {<FlatList
      keyExtractor={(item)=>{return item}}
      data={squares}
      renderItem={({item})=>{
        return (
          <View style={{ height: 100, width: 100, backgroundColor: item}}/>
        )
      }}
    />}

{/*
    {squares.map((square, index)=>{
      return (
        <View key={index} style={{ height: 100, width: 100, backgroundColor: square}}/>

      )
    })} */}

  </View>

)
}

export default ColorScreen;
