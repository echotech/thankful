import React, {useState} from 'react';
import {View, TextInput, Button, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@storage_Key', jsonValue)
  } catch (e) {
    // saving error
  }
}

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    // error reading value
  }
}

const App = () => {
  const [input, setInput] = useState('');

  const saveInput = async () => {
    try {
      // Get the current list of entries
      const currentData = await getData() || [];

      // Add the new entry to the list
      currentData.push(input);

      // Save the updated list
      await storeData(currentData);

      // Clear the input field
      setInput('');
    } catch (error) {
      // Handle errors here
    }
  };

  return (
    <View>
      <TextInput value={input} onChangeText={text => setInput(text)} />
      <Button title="Save Input" onPress={saveInput} />
    </View>
  );
};

export default App;
