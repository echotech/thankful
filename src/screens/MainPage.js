import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';
import { insertNote } from '../database/db'; 

const MainPage = () => {
  const [input, setInput] = useState('');

  const handleSubmitNote = () => {
    const currentDate = new Date().toISOString();
    insertNote(input, currentDate);
    setInput(''); 
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What are you thankful for?</Text>
      <TextInput 
        style={styles.input} 
        value={input} 
        onChangeText={text => setInput(text)} 
      />
      <Button title="Submit" onPress={handleSubmitNote} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF',  // AliceBlue color
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  }
});

export default MainPage;
