import React, {useState} from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import ColorCounter from '../components/ColorCounter'

const SquareScreen = ()=>{
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  // const colorChange = (color, change)=>{
  //   switch (color) {
  //     case 'red':
  //       red + change >

  //   }



  // };



  return (
    <View>
      <Text>This is SquareScreen</Text>
      <ColorCounter color={'Red'} style={styles.containers}
      increase={()=>{
        if (red+1 > 255) {
          return
        } else {
          setRed(red+1)}
        }
      }

      decrease={()=>{
        if (red-1 < 0) {
          return;
        } else {
          setRed(red-1)
        }

      }} />
      <ColorCounter color={'Green'} style={styles.containers} increase={()=>{setGreen(green+1)}} decrease={()=>{setGreen(green-1)}} />
      <ColorCounter color={'Blue'}  style={styles.containers} increase={()=>{setBlue(blue+1)}} decrease={()=>{setBlue(blue-1)}} />
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
