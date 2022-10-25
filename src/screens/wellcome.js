import React from 'react';
import {SafeAreaView, StyleSheet, View, ScrollView} from 'react-native';
import {DataTable} from 'react-native-paper';

import MyComponent from '../component/footer';
import ItemScreen from './ItemScreen';

const Welcome = () => {
  return (
    <SafeAreaView>
      <MyComponent />
      <ScrollView style={styles.ScrollView}>
        <View>
          <DataTable>
            <DataTable.Header style={styles.table}>
              <DataTable.Title>User</DataTable.Title>
              <DataTable.Title>Action</DataTable.Title>
            </DataTable.Header>
            <View>
              <ScrollView>
                <ItemScreen />
              </ScrollView>
            </View>
          </DataTable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ScrollView: {
    marginHorizontal: 20,
  },
  list: {
    margin: 10,
    padding: 30,
    backgroundColor: 'pink',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  table: {
    paddingLeft: 50,
  },
});

export default Welcome;
