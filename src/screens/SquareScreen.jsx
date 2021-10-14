import React, {useState} from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

const SquareScreen = ()=>{
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);



  return (
    <View>
      <Text>This is SquareScreen</Text>
      <View style={styles.containers}>
        <Text>Red</Text>
        <Button
          title='Increase Red +'
          onPress={()=>{setRed(red+1)}}
        />
        <Button
          title='Decrease Red -'
          onPress={()=>{setRed(red-1)}}
        />
      </View>
      <View style={styles.containers}>
        <Text>Green</Text>
        <Button
          title='Increase Green +'
          onPress={()=>{setGreen(green+1)}}
        />
        <Button
          title='Decrease Green -'
          onPress={()=>{setGreen(green-1)}}
        />
      </View>
      <View style={styles.containers}>
        <Text>Blue</Text>
        <Button
          title='Increase Blue +'
          onPress={()=>{setBlue(blue+1)}}
        />
        <Button
          title='Decrease Blue -'
          onPress={()=>{setBlue(blue-1)}}
        />
      </View>

      <Text>{`R: ${red} | G: ${green} | B: ${blue}`}</Text>



      <View
       style={{
        height: 100,
        width: 100,
        backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        bottomPadding: 10
      }}/>
    </View>
  )
}

const styles = StyleSheet.create({
  containers: {
    borderColor: 'blue',
    borderWidth: 2
  }
});


export default SquareScreen;
