import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Button,
  Text,
  ScrollView,
} from 'react-native';
import {useEffect, useState} from 'react';
import {useItem} from '../hooks/useItem';

const Welcome = () => {
  useEffect(() => {
    handleGet();
  }, []);
  const {handleGet, handleCreate, handleDelete, handleUpdate, list} = useItem();

  const [name, setName] = useState('');
  const [nameUpdate, setNameUpdate] = useState('');
  console.log('name', name);
  const [id, setId] = useState('');

  let ListItem = [];
  ListItem = list?.map((item, key) => {
    return (
      <SafeAreaView>
        <ScrollView>
          <View key={key + 1} style={styles.list}>
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
                    setNameUpdate(item.name);
                  }}
                />
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  });

  return (
    <SafeAreaView>
     
      <ScrollView style={styles.ScrollView}>
        <View style={styles.list}>
          <View style={styles.inputStyle}>
            <TextInput
              style={styles.input}
              onChangeText={setName}
              value={name}
            />
            <Button title="Add" onPress={() => handleCreate({name})} />
          </View>
          <View style={styles.inputStyle}>
            <TextInput
              style={styles.input}
              onChangeText={setNameUpdate}
              value={nameUpdate}
            />
            <Button
              title="Update"
              onPress={() => handleUpdate({id: id, nameUpdate: nameUpdate})}
            />
          </View>
        </View>
        <View>
          <View>{ListItem}</View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width:"70%",
  },
  ScrollView: {
    marginHorizontal: 20,
  },
  inputStyle: {
    flexDirection: 'row',
  },
  list: {
    borderStyle: 'solid',
    margin: 24,
    padding: 30,
    backgroundColor: 'pink',
  },
});

export default Welcome;
