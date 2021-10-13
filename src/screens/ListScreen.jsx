import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from "react-native";


const initFriendList = [
  {name: 'cucho', age: 31},
  {name: 'jimena', age: 30},
  {name: 'isabella', age: 10},
  {name: 'lily', age: 0},
  {name: 'munra', age: 4},
  {name: 'tarzan', age: 1},
]

 const ListScreen = () => {
   const [friends, setFriends] = useState(initFriendList);



  async function fetchFriends() {
    const list = await fetch('https://jsonplaceholder.typicode.com/users')
    const parsedList = await list.json();
    return parsedList;
  }

  // useEffect(()=>{
  //   setFriends(fetchFriends())
  //   console.log('sanity')
  //   console.log(friends)
  // }, [])

  let listRender = (friends? (
  <FlatList
    // horizontal // place the list horizontally (no configuration)
    showsHorizontalScrollIndicator={false}
    keyExtractor={(friend)=>{return friend.name}}
    data={friends}
    renderItem={({item})=>{
      // console.log(item)
      return (
        <Text style={styles.ls}>name: {item.name}-age: {item.age}</Text>)
    }}
  />) : <Text>Loading...</Text>)




  return(
    <View>
      <Text>This is ListScreen</Text>
      {listRender}

    </View>

  )
};

const styles = StyleSheet.create({
  ls: {
    fontSize: 25,
    marginVertical: 5
  }
});

export default ListScreen;