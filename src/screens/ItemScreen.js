import React from 'react';
import {SafeAreaView, TextInput, View, Text} from 'react-native';
import {useEffect, useState} from 'react';
import {Button} from 'react-native-paper';
import {StyleSheet} from 'react-native';

import {useItem} from '../hooks/useItem';

const ItemScreen = () => {
  const [select, setSelect] = useState(null);
  const [nameUpdate, setNameUpdate] = useState('');
  const [id, setId] = useState('');

  const {handleGet, handleDelete, handleUpdate, list} = useItem();
  useEffect(() => {
    handleGet();
  }, []);

  const ListData = list?.map((item, key) => {
    return (
      <SafeAreaView key={key}>
        <View >
          <View style={styles.list}>
            {select !== key ? (
              <View style={styles.listText}>
                <Text style={styles.text}>{item.name}</Text>
                <View style={styles.styleButton}>
                  <Button
                    style={styles.button}
                    mode="contained"
                    onPress={() => handleDelete({id: item._id})}>
                    Delele
                  </Button>
                </View>
              </View>
            ) : (
              <TextInput
                style={styles.input}
                onChangeText={setNameUpdate}
                value={nameUpdate}
              />
            )}
            {select !== key ? (
              <View>
                <Button
                  style={styles.button1}
                  mode="contained"
                  onPress={() => {
                    setId(item._id);
                    setNameUpdate(item.name);
                    setSelect(key);
                  }}>
                  Choose
                </Button>
              </View>
            ) : (
              <View>
                <Button
                  mode="contained"
                  onPress={() => {
                    handleUpdate({id: id, nameUpdate: nameUpdate});
                    setSelect(null);
                  }}>
                  Update
                </Button>
              </View>
            )}
          </View>
        </View>
      </SafeAreaView>
    );
  });
  return <View>{ListData}</View>;
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    marginRight: 20,
    borderWidth: 1,
    padding: 10,
    width: '40%',
  },
  ScrollView: {
    marginHorizontal: 20,
  },
  inputStyle: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  list: {
    margin: 2,
    padding:30,
    backgroundColor: 'pink',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listText:{
      width:"61%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  styleButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  table: {
    paddingLeft: 50,
  },
  button: {
    width: '100%',
  },
  button1: {
    width: '100%',
  },
});

export default ItemScreen;
