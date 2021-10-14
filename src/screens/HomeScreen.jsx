import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";


const HomeScreen = ({navigation}) => {

  const myName = 'Juan Pablo';


  return (
    <View>
      <Text style={styles.text1}>Getting startes with RN</Text>
      <Text style={styles.text2}>{`My name is ${myName}`}</Text>
      <Button
        title='Go to list Screen'
        onPress={()=>{navigation.navigate('List')}}
      />
     <Button
        title='Go to Image Screen'
        onPress={()=>{navigation.navigate('Image')}}
      />
      <TouchableOpacity onPress={()=>{navigation.navigate('Counter')}}>
        <Text>Go Counter</Text>
      </TouchableOpacity>
      <Button
        title='Go to Color'
        onPress={()=>{navigation.navigate('Color')}}
      />
      <Button
        title='Go to Square Screen'
        onPress={()=>{navigation.navigate('Square')}}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text1: {
    fontSize: 45
  },
  text2: {
    fontSize: 20
  }
});

export default HomeScreen;
