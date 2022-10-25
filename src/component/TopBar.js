import * as React from 'react';
import {Appbar, Button, TextInput} from 'react-native-paper';
import {StyleSheet} from 'react-native';

import {useItem} from '../hooks/useItem';

const MyComponent = () => {
  const {handleCreate} = useItem();
  const [name, setName] = React.useState('');

  return (
    <Appbar.Header style={styles.nav}>
      <TextInput onChangeText={setName} style={styles.input} value={name} />
      {name === '' ? (
        <Button style={styles.styleButton} mode="elevated" disabled>
          Add
        </Button>
      ) : (
        <Button
          style={styles.styleButton}
          mode="elevated"
          onPress={() => handleCreate({name})}>
          Add
        </Button>
      )}
    </Appbar.Header>
  );
};
const styles = StyleSheet.create({
  input: {
    width: '75%',
  },
  nav: {
    margin:20,
    justifyContent: 'space-between',
  },
});

export default MyComponent;
