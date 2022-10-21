import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View, Button, Text } from "react-native";
import  {useEffect, useState} from 'react';
import {useItem} from '../hooks/useItem';


const Welcome = () => {
 

 
  useEffect(()=>{
    handleGet()
    },[])
const {handleGet, handleCreate, handleDelete , handleUpdate, list} = useItem()

const [name, setName] = useState('');
console.log("name", name);
const [id, setId] = useState('');

let ListItem = [];
ListItem = list?.map((item, key) => {
  return (
    <SafeAreaView>
      <View key={key+1}>
        <View>
         
          <Text>{item.name}</Text>
          <Text>{item._id}</Text>
        </View>
        <View>
          <Text>
            <Button
              title="Delete"
              onPress={() => handleDelete({id: item._id})}
            />
          </Text>
        </View>
        <View>
          <Text>
            <Button
              title="choose"
              onPress={() => {
                setId(item._id);
                setName(item.name);
              }}
            />
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
});

  return (
    <SafeAreaView>
   
      <View>
        <Text>HELLO</Text>
        <TextInput  style={styles.input}  onChangeText = {setName} value={name} />
        <Button title="Add"  onPress={() => handleCreate({ name})} />
        <Button
          title="Update"
          onPress={() => handleUpdate({ id: id, name: name })}
        />
      </View>
      <View>
        <Text>ID</Text>
        <Text>Name</Text>
        <View>{ListItem}</View>
      </View>
   
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Welcome;