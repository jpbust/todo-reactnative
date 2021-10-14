import React from 'react';
import {View, Text, Button} from 'react-native';

const ColorCounter = ({color, style, increase, decrease})=>{
  return (
    <View style={style}>
        <Text>{color}</Text>
        <Button
          title={`Increase ${color} +`}
          onPress={()=>{increase()}}
        />
        <Button
          title={`Decrease ${color} -`}
          onPress={()=>{decrease()}}
        />
      </View>
  )
}

export default ColorCounter;