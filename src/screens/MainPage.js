import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet, Alert } from 'react-native';
import { insertNote } from '../database/db';  

const MainPage = () => {
  const [input, setInput] = useState('');

  const saveInput = async () => {
    try {
      // Get the current date in the format YYYY-MM-DD
      const currentDate = new Date().toISOString().split('T')[0];
      
      // Save the input using the SQLite function
      await insertNote(input, currentDate);

      // Clear the input field
      setInput('');

      // Optionally show a confirmation message
      Alert.alert('Saved', 'Your note has been saved successfully!');
    } catch (error) {
      console.error('Error saving note:', error);
      Alert.alert('Error', 'There was a problem saving your note. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What are you thankful for?</Text>
      <TextInput 
        style={styles.input} 
        value={input} 
        onChangeText={text => setInput(text)} 
        placeholderTextColor="#888"
        textAlignVertical="center"
        placeholder="I am thankful for..." 
      />

      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={saveInput} color="#FF6B6B" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#EAEAEA',
  },
  input: {
    height: 40,
    width: '60%',
    borderColor: '#FF6B6B',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    color: '#EAEAEA',
    backgroundColor: '#3A3F4B',
  },
  buttonContainer: {
    width: '60%',
  }
});

export default MainPage;
